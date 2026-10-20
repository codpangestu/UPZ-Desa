import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const API_KEY = 'upzdesa23apikey';

// Service-specific base URLs
export const AUTH_URL = 'http://localhost:8001';
export const UPZ_DAFA_URL = 'http://localhost:8002';
export const CONTENT_URL = 'http://localhost:8003';
export const TRANSACTION_URL = 'http://localhost:8004';
export const ADMIN_URL = 'http://localhost:8005';

interface CreateApiClientOptions {
  /** Sertakan header x-api-key (diperlukan hampir semua endpoint privat). */
  withApiKey?: boolean;
}

// ============================================================================
// Adapter nama field `masjid` ↔ `upz_desa`
// ----------------------------------------------------------------------------
// Kontrak backend BELUM di-rename: kolom tabel & response API masih memakai
// nama lama (`nama_masjid`, `id_masjid`, `alamat_masjid`, `slug_masjid`, dst.),
// sedangkan seluruh kode frontend sudah memakai nama baru (`*_upz_desa`).
// Translasi dilakukan SEKALI di sini supaya tidak tersebar di tiap service:
//   • response masuk : nama_masjid → nama_upz_desa (dan sejenisnya)
//   • payload keluar : nama_upz_desa → nama_masjid (kebalikannya)
// Payload keluar WAJIB diterjemahkan: backend membuang key yang tidak dikenal
// (create_record/update_record memakai hasattr), jadi mengirim `nama_upz_desa`
// membuat data tersimpan kosong tanpa error.
// Hanya KEY objek yang diubah — value seperti `jalur_akses: 'Masjid'` tidak disentuh.
// ============================================================================
const FIELD_LAST = 'masjid';
const FIELD_NEW = 'upz_desa';

function translateKeys(value: unknown, from: string, to: string): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => translateKeys(item, from, to));
  }
  // Hanya plain object (bukan File/Blob/Map/Date) yang key-nya diterjemahkan.
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      const nextKey = key.split(from).join(to);
      out[nextKey] = translateKeys(val, from, to);
    }
    return out;
  }
  return value;
}

/** Response backend (nama lama) → nama field app-facing. */
export const toAppShape = <T,>(data: T): T =>
  translateKeys(data, FIELD_LAST, FIELD_NEW) as T;

/** Payload/params app-facing → nama field yang dikenal backend. */
export const toApiShape = <T,>(data: T): T =>
  translateKeys(data, FIELD_NEW, FIELD_LAST) as T;

function createApiClient(baseURL: string, options: CreateApiClientOptions = {}) {
  const client = axios.create({
    baseURL,
    timeout: 15000, // cegah request menggantung → UI loading stuck (mis. backend mati)
    headers: {
      'Content-Type': 'application/json',
      ...(options.withApiKey ? { 'x-api-key': API_KEY } : {}),
    },
  });

  // Request interceptor: pasang Authorization Bearer dari authStore secara
  // real-time ke SEMUA instance — token selalu terbaca walau halaman di-refresh.
  // Store adalah single source of truth: jika token kosong, header dihapus
  // eksplisit agar token lama tidak bocor (mis. setelah auto-logout 401).
  client.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    // Terjemahkan payload & query params ke nama field yang dikenal backend
    // (lihat catatan adapter di atas). FormData (upload file) dilewatkan apa adanya.
    if (config.data && typeof config.data === 'object' && !(config.data instanceof FormData)) {
      config.data = toApiShape(config.data);
    }
    if (config.params && typeof config.params === 'object') {
      config.params = toApiShape(config.params);
    }
    return config;
  });

  // Response interceptor: 401 (token invalid/expired) → bersihkan sesi & arahkan ke login.
  // Endpoint auth publik (login/register/logout) dikecualikan karena 401 di sana
  // adalah error normal (mis. password salah) yang ditangani halaman login.
  const AUTH_PUBLIC_PATHS = [
    '/api/v1/login',
    // Path backend masih /login/admin-masjid (dipakai opsi "Admin UPZ Desa").
    '/api/v1/login/admin-masjid',
    '/api/v1/login/admin-pusat',
    '/api/v1/login/admin-kua',
    '/api/v1/register/user',
    '/api/v1/logout',
  ];
  client.interceptors.response.use(
    (res) => {
      // Normalisasi nama field response backend → nama app-facing (lihat adapter).
      res.data = toAppShape(res.data);
      return res;
    },
    (error) => {
      const status = error?.response?.status;
      const url: string = error?.config?.url || '';
      // Gunakan daftar eksak (bukan regex) agar /users/register tidak terkecualikan
      const isAuthPublicEndpoint = AUTH_PUBLIC_PATHS.some((p) => url.endsWith(p));
      if (status === 401 && !isAuthPublicEndpoint) {
        const { isAuthenticated, token, logout } = useAuthStore.getState();
        if (isAuthenticated || token) {
          logout();
          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return client;
}

// 5 instance Axios — satu per microservice
export const authApi = createApiClient(AUTH_URL, { withApiKey: true });
export const upzDesaApi = createApiClient(UPZ_DAFA_URL, { withApiKey: true });
export const contentApi = createApiClient(CONTENT_URL);
export const transactionApi = createApiClient(TRANSACTION_URL, { withApiKey: true });
export const adminApi = createApiClient(ADMIN_URL, { withApiKey: true });

// Set/bersihkan Authorization header pada semua instance (backward compat —
// interceptor request di atas sudah otomatis membaca token dari store).
export const setAuthToken = (token: string | null) => {
  const header = token ? `Bearer ${token}` : undefined;
  [authApi, upzDesaApi, contentApi, transactionApi, adminApi].forEach((instance) => {
    if (header) {
      instance.defaults.headers.common['Authorization'] = header;
    } else {
      delete instance.defaults.headers.common['Authorization'];
    }
  });
};
