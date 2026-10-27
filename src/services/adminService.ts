import { adminApi, upzDesaApi, authApi } from './api';
import type {
  ApiResponse,
  PengajuanUpzDesa,
  PengajuanFormData,
  PaginatedResponse,
  UserListItem,
  UpzDesaOption,
  UpdateUserResponse,
  StatusPengajuan,
} from '../types';

export const adminService = {
  // Kelola Pengguna (Auth Service 8001) — Admin Pusat
  getUsersList: async () => {
    const response = await authApi.get<ApiResponse<UserListItem[]>>('/api/v1/users/list');
    return response.data;
  },

  /** Update user — catatan: backend menerima param lewat query string, bukan body. */
  updateUser: async (
    idUser: number,
    data: {
      id_level?: number;
      id_jalur_akses?: string;
      status_aktif?: number;
      kode_org_baznas?: string;
      // Scope wilayah untuk promosi ke Admin Daerah/Kab/KUA (lihat CONTEXT.md)
      id_provinsi?: number;
      id_kabupaten_kota?: number;
      id_kecamatan?: number;
    }
  ) => {
    const response = await authApi.put<UpdateUserResponse>(
      `/api/v1/users/update/${idUser}`,
      null,
      { params: data }
    );
    return response.data;
  },

  // Daftar UPZ Desa untuk dropdown promosi admin UPZ Desa (UPZ Desa Service 8002)
  // Catatan: path backend masih /api/v1/upz-desa/... (belum di-rename di backend).
  getUpzDesaOptions: async () => {
    const response = await upzDesaApi.get<ApiResponse<UpzDesaOption[]>>('/api/v1/upz-desa/list', {
      params: { page: 1, per_page: 100 },
    });
    return response.data;
  },

  // Pengajuan UPZ Desa (langkah 1) — status default 'pending' agar konsisten dengan key
  // frontend. Backend menerbitkan kode UPZ Desa + slug LANGSUNG saat pengajuan dibuat
  // (dikembalikan di `data`), dipakai pemohon untuk lanjut ke langkah 2 (daftar admin).
  // Payload ditulis dengan nama app-facing (`nama_upz_desa`, dst.) — adapter di
  // services/api.ts yang menerjemahkannya ke nama kolom backend (`nama_upz_desa`).
  submitPengajuan: async (data: PengajuanFormData) => {
    const response = await adminApi.post<ApiResponse<{ id: number; kode_org_baznas?: string; slug_upz_desa?: string }>>(
      '/api/v1/admin/pengajuan/create',
      { ...data, status_pengajuan: 'pending' }
    );
    return response.data;
  },

  /**
   * Langkah 2 — simpan data admin pemohon ke pengajuan yang sama
   * (tanpa mengubah status). Backend menyimpan nama/email/jk/nohp/alamat pemohon
   * di pengajuan; saat Admin BAZNAS menyetujui, UPZ Desa + akun admin dibuat sekaligus.
   */
  updatePengajuanAdmin: async (
    id: number,
    data: {
      nama_pemohon: string;
      email_pemohon: string;
      jk_pemohon: string;
      nohp_pemohon: string;
      alamat_pemohon: string;
    }
  ) => {
    const response = await adminApi.put<ApiResponse<null>>(
      `/api/v1/admin/pengajuan/update/${id}`,
      data
    );
    return response.data;
  },

  /** Normalisasi status pengajuan dari backend ('Menunggu'/'Disetujui'/'Ditolak') ke key frontend. */
  normalizePengajuanStatus: (raw?: string): StatusPengajuan => {
    const map: Record<string, StatusPengajuan> = {
      'pending': 'pending',
      'menunggu': 'pending',
      'disetujui': 'disetujui',
      'ditolak': 'ditolak',
    };
    return map[(raw || '').toLowerCase()] ?? 'pending';
  },

  getPengajuanList: async (page = 1, perPage = 10) => {
    const response = await adminApi.get<PaginatedResponse<PengajuanUpzDesa>>(
      '/api/v1/admin/pengajuan/list',
      { params: { page, per_page: perPage } }
    );
    return response.data;
  },

  /**
   * Update status pengajuan. Saat disetujui, backend menerbitkan kode UPZ Desa
   * (kode_org_baznas) yang dikembalikan di `data` — dipakai untuk memberi tahu
   * pemohon agar bisa mendaftar sebagai Admin UPZ Desa.
   */
  updatePengajuan: async (id: number, data: { status_pengajuan: string; keterangan?: string }) => {
    const response = await adminApi.put<ApiResponse<PengajuanUpzDesa & { kode_org_baznas?: string }>>(
      `/api/v1/admin/pengajuan/update/${id}`,
      data
    );
    return response.data;
  },

  deletePengajuan: async (id: number) => {
    const response = await adminApi.delete<ApiResponse<null>>(
      `/api/v1/admin/pengajuan/delete/${id}`
    );
    return response.data;
  },

  // Wilayah — using upzDesaApi (UPZ Desa Service port 8002) per PRD section 11.2
  getProvinsi: async () => {
    const response = await upzDesaApi.get<ApiResponse<any[]>>('/api/v1/provinsi');
    return response.data;
  },

  getKabupatenKota: async (idProvinsi: number) => {
    const response = await upzDesaApi.get<ApiResponse<any[]>>('/api/v1/kabupaten-kota', {
      params: { id_provinsi: idProvinsi },
    });
    return response.data;
  },

  getKecamatan: async (idKabupatenKota: number) => {
    const response = await upzDesaApi.get<ApiResponse<any[]>>('/api/v1/kecamatan', {
      params: { id_kabupaten_kota: idKabupatenKota },
    });
    return response.data;
  },

  getKelurahanDesa: async (idKecamatan: number) => {
    const response = await upzDesaApi.get<ApiResponse<any[]>>('/api/v1/kelurahan-desa', {
      params: { id_kecamatan: idKecamatan },
    });
    return response.data;
  },
};
