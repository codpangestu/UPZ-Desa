export interface Aset {
  id: number;
  nama_aset: string;
  jumlah: number;
  kondisi: 'baik' | 'rusak-ringan' | 'rusak-berat';
  keterangan?: string;
  status_aktif: number;
  created_at?: string;
  updated_at?: string;
}

export interface AsetFormData {
  nama_aset: string;
  jumlah: number;
  kondisi: 'baik' | 'rusak-ringan' | 'rusak-berat';
  keterangan: string;
}

export const KONDISI_OPTIONS = [
  { value: 'baik', label: 'Baik' },
  { value: 'rusak-ringan', label: 'Rusak Ringan' },
  { value: 'rusak-berat', label: 'Rusak Berat' },
];

export const KONDISI_COLOR: Record<string, string> = {
  baik: 'bg-[#FDF3C0] text-[#7D5A00]',
  'rusak-ringan': 'bg-amber-50 text-amber-700',
  'rusak-berat': 'bg-red-50 text-red-600',
};
