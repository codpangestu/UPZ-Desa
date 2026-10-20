import { upzDesaApi, adminApi } from '../../services/api';
import type { UpzDesaDetail, BankInfo, Medsos } from '../../types';

const API_KEY = 'upzdesa23apikey';
const API_KEY_HEADER = { 'x-api-key': API_KEY };

// Catatan: path API di bawah masih memakai nama backend `/api/v1/masjid/...`
// (route backend belum di-rename). Nama field di payload/response ditangani
// otomatis oleh adapter di services/api.ts.
const BASE = '/api/v1/admin/masjid';

export const profilUpzDesaApi = {
  getDetail: async (id: string) => {
    const response = await upzDesaApi.get<{ status: boolean; data: UpzDesaDetail }>(
      `/api/v1/masjid/detail/${id}`
    );
    return response.data;
  },

  update: async (id: string, data: Partial<UpzDesaDetail>) => {
    const response = await adminApi.put<{ status: boolean; data: UpzDesaDetail; message?: string }>(
      `${BASE}/update/${id}`,
      data,
      { headers: API_KEY_HEADER }
    );
    return response.data;
  },

  addBank: async (data: { id_upz_desa: string; nama_bank: string; norek: string; atas_nama: string }) => {
    const response = await adminApi.post<{ status: boolean; data: BankInfo; message?: string }>(
      `${BASE}/bank/create`,
      data,
      { headers: API_KEY_HEADER }
    );
    return response.data;
  },

  deleteBank: async (id: number) => {
    const response = await adminApi.delete<{ status: boolean; message?: string }>(
      `${BASE}/bank/delete/${id}`,
      { headers: API_KEY_HEADER }
    );
    return response.data;
  },

  addMedsos: async (data: { id_upz_desa: string; name_medsos: string; url_medsos: string }) => {
    const response = await adminApi.post<{ status: boolean; data: Medsos; message?: string }>(
      `${BASE}/medsos/create`,
      data,
      { headers: API_KEY_HEADER }
    );
    return response.data;
  },

  deleteMedsos: async (id: number) => {
    const response = await adminApi.delete<{ status: boolean; message?: string }>(
      `${BASE}/medsos/delete/${id}`,
      { headers: API_KEY_HEADER }
    );
    return response.data;
  },
};
