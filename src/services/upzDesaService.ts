import { upzDesaApi, contentApi } from './api';
import type {
  ApiResponse,
  UpzDesa,
  UpzDesaDetail,
  Provinsi,
  KabupatenKota,
  Kecamatan,
  KelurahanDesa,
  RekapPenerimaan,
  RekapPengeluaran,
  RekapByUpzDesa,
  RekapBulanan,
  PaginatedResponse,
} from '../types';

export const upzDesaService = {
  // UPZ Desa
  getUpzDesaList: async (page = 1, perPage = 10) => {
    const response = await upzDesaApi.get<PaginatedResponse<UpzDesa>>('/api/v1/masjid/list', {
      params: { page, per_page: perPage },
    });
    return response.data;
  },

  getUpzDesaDetail: async (id: string) => {
    const response = await upzDesaApi.get<ApiResponse<UpzDesaDetail>>(`/api/v1/masjid/detail/${id}`);
    return response.data;
  },

  getUpzDesaBySlug: async (slug: string) => {
    // Detail publik UPZ Desa ada di CONTENT SERVICE (8003) — route /masjid/{slug}
    // (bukan UPZ Desa Service 8002 yang butuh auth). Lihat CONTEXT.md Fix #48.
    const response = await contentApi.get<ApiResponse<UpzDesaDetail>>(`/api/v1/masjid/${slug}`);
    return response.data;
  },

  searchUpzDesa: async (params: {
    nama?: string;
    jenis?: string;
    tipologi?: string;
    id_provinsi?: number;
    id_kabupaten_kota?: number;
    id_kecamatan?: number;
    limit?: number;
  }) => {
    // Pencarian UPZ Desa PUBLIK ada di CONTENT SERVICE (8003) — route /upz-desa/search.
    // Bug pra-eksisting (Fix #48): dulu memanggil upzDesaApi (8002) yang tidak punya
    // route ini → 404; dan route /upz-desa/search di 8003 tertangkap /upz-desa/{slug}.
    const response = await contentApi.get<ApiResponse<UpzDesa[]>>('/api/v1/masjid/search', {
      params,
    });
    return response.data;
  },

  getUpzDesaByWilayah: async (idProvinsi: number, page = 1, perPage = 10) => {
    const response = await upzDesaApi.get<PaginatedResponse<UpzDesa>>('/api/v1/masjid/by-wilayah', {
      params: { id_provinsi: idProvinsi, page, per_page: perPage },
    });
    return response.data;
  },

  // Wilayah
  getProvinsi: async () => {
    const response = await upzDesaApi.get<ApiResponse<Provinsi[]>>('/api/v1/provinsi');
    return response.data;
  },

  getKabupatenKota: async (idProvinsi?: number) => {
    const response = await upzDesaApi.get<ApiResponse<KabupatenKota[]>>('/api/v1/kabupaten-kota', {
      params: idProvinsi ? { id_provinsi: idProvinsi } : undefined,
    });
    return response.data;
  },

  getKecamatan: async (idKabupatenKota?: number) => {
    const response = await upzDesaApi.get<ApiResponse<Kecamatan[]>>('/api/v1/kecamatan', {
      params: idKabupatenKota ? { id_kabupaten_kota: idKabupatenKota } : undefined,
    });
    return response.data;
  },

  getKelurahanDesa: async (idKecamatan?: number) => {
    const response = await upzDesaApi.get<ApiResponse<KelurahanDesa[]>>('/api/v1/kelurahan-desa', {
      params: idKecamatan ? { id_kecamatan: idKecamatan } : undefined,
    });
    return response.data;
  },

  // Rekap
  getRekapPenerimaan: async () => {
    const response = await upzDesaApi.get<ApiResponse<RekapPenerimaan>>('/api/v1/rekap/penerimaan');
    return response.data;
  },

  getRekapPengeluaran: async () => {
    const response = await upzDesaApi.get<ApiResponse<RekapPengeluaran>>('/api/v1/rekap/pengeluaran');
    return response.data;
  },

  /** Rekap per UPZ Desa (untuk dashboard Admin UPZ Desa). */
  getRekapByUpzDesa: async (idUpzDesa: string) => {
    const response = await upzDesaApi.get<ApiResponse<RekapByUpzDesa>>(`/api/v1/rekap/by-masjid/${idUpzDesa}`);
    return response.data;
  },

  /** Rekap penerimaan vs pengeluaran per bulan (FR-2.5).
   * Mode: tahun tertentu (12 bulan Jan–Des) ATAU rentang tanggal custom (FR-2.6). */
  getRekapBulananByUpzDesa: async (
    idUpzDesa: string,
    opts: { tahun?: number; startDate?: string; endDate?: string } = {},
  ) => {
    const params: Record<string, string | number> = {};
    if (opts.tahun) params.tahun = opts.tahun;
    if (opts.startDate && opts.endDate) {
      params.start_date = opts.startDate;
      params.end_date = opts.endDate;
    }
    const response = await upzDesaApi.get<ApiResponse<RekapBulanan>>(
      `/api/v1/rekap/bulanan/${idUpzDesa}`,
      { params },
    );
    return response.data;
  },
};
