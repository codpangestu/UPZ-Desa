import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Wallet, Building2, Megaphone, BookOpen, Users, Calendar, Settings, TrendingUp, TrendingDown, MapPin, Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { upzDesaService } from '../../services/upzDesaService';
import GrafikKasBulanan from '../../components/shared/GrafikKasBulanan';

const quickLinks = [
  {
    label: 'Buku Kas',
    icon: Wallet,
    path: '/buku-kas/penerimaan',
    color: '#EFB100',
    bgColor: '#FEF9E7',
    description: 'Kelola penerimaan & pengeluaran',
  },
  {
    label: 'Data UPZ Desa',
    icon: Building2,
    path: '/data-upz-desa/profil',
    color: '#2B7FFF',
    bgColor: '#EAF2FF',
    description: 'Profil & detail UPZ Desa',
  },
  {
    label: 'Menu Publikasi',
    icon: Megaphone,
    path: '/menu-publikasi/postingan',
    color: '#7C3AED',
    bgColor: '#F3E8FF',
    description: 'Postingan, kajian, acara',
  },
  {
    label: 'Data Pengurus',
    icon: Users,
    path: '/info-upz-desa/data-pengurus',
    color: '#D97706',
    bgColor: '#FFFBEB',
    description: 'Kelola pengurus UPZ Desa',
  },
  {
    label: 'Kegiatan',
    icon: Calendar,
    path: '/kegiatan-upz-desa',
    color: '#E11D48',
    bgColor: '#FFF1F2',
    description: 'Data kegiatan UPZ Desa',
  },
  {
    label: 'Buku Aset',
    icon: BookOpen,
    path: '/buku-aset',
    color: '#0891B2',
    bgColor: '#ECFEFF',
    description: 'Pencatatan aset UPZ Desa',
  },
  {
    label: 'Setting Akun',
    icon: Settings,
    path: '/setting-akun',
    color: '#64748B',
    bgColor: '#F1F5F9',
    description: 'Pengaturan profil & password',
  },
];

function formatCurrency(val: number | undefined | null): string {
  if (val == null || Number.isNaN(Number(val))) return 'Rp 0';
  return `Rp ${Number(val).toLocaleString('id-ID')}`;
}

export default function DashboardAdminUpzDesa() {
  const { user } = useAuthStore();
  // id upz_desa user: login admin-upz-desa mengisi id_jalur_akses = id_upz_desa (kode org)
  const idUpzDesa = user?.id_jalur_akses || user?.id_upz_desa;

  const { data: upzDesaData, isLoading: upzDesaLoading } = useQuery({
    queryKey: ['dashboard-upz-desa-detail', idUpzDesa],
    queryFn: async () => {
      if (!idUpzDesa) return null;
      const res = await upzDesaService.getUpzDesaDetail(idUpzDesa);
      return res?.data ?? null;
    },
    enabled: !!idUpzDesa,
  });

  const { data: rekapData } = useQuery({
    queryKey: ['dashboard-upz-desa-rekap', idUpzDesa],
    queryFn: async () => {
      if (!idUpzDesa) return null;
      const res = await upzDesaService.getRekapByUpzDesa(idUpzDesa);
      return res?.data ?? null;
    },
    enabled: !!idUpzDesa,
  });

  const upzDesa = upzDesaData as (typeof upzDesaData & { nama_upz_desa?: string; alamat_upz_desa?: string }) | null;
  const namaUpzDesa = upzDesa?.nama_upz_desa || user?.nama_upz_desa || '';
  const alamatUpzDesa = upzDesa?.alamat_upz_desa || '';
  const totalPenerimaan = rekapData?.total_penerimaan;
  const totalPengeluaran = rekapData?.total_pengeluaran;
  const saldo =
    totalPenerimaan != null && totalPengeluaran != null
      ? Number(totalPenerimaan) - Number(totalPengeluaran)
      : null;

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-[#C99400] to-[#EFB100] rounded-2xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Selamat Datang, {user?.nama || 'Admin'}!
            </h1>
            <p className="text-sm text-white/80" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Anda login sebagai <span className="font-medium text-white">Admin UPZ Desa</span>
            </p>
          </div>
          {upzDesaLoading ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-right flex items-center gap-2">
              <Loader2 size={14} className="animate-spin" />
              <span className="text-sm">Memuat...</span>
            </div>
          ) : namaUpzDesa ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-right">
              <p className="text-xs text-white/70">UPZ Desa</p>
              <p className="text-sm font-medium">{namaUpzDesa}</p>
            </div>
          ) : (
            <Link
              to="/data-upz-desa/profil"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-right transition-colors"
            >
              <p className="text-xs text-white/70">UPZ Desa</p>
              <p className="text-sm font-medium">Lengkapi profil →</p>
            </Link>
          )}
        </div>
        {/* Alamat UPZ Desa dari API */}
        {alamatUpzDesa && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-white/80" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <MapPin size={13} />
            <span className="line-clamp-1">{alamatUpzDesa}</span>
          </div>
        )}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.1)] hover:shadow-md hover:border-[#EFB100]/30 transition-all duration-200 group"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: link.bgColor, color: link.color }}
              >
                <link.icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-[#303030] mb-0.5">{link.label}</h3>
                <p className="text-xs text-[#555]">{link.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Grafik Penerimaan vs Pengeluaran per Bulan (FR-2.5–2.7) */}
      <GrafikKasBulanan idUpzDesa={idUpzDesa} />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Total Penerimaan</p>
            <TrendingUp size={16} className="text-[#EFB100]" />
          </div>
          <p className="text-2xl font-semibold text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {formatCurrency(totalPenerimaan)}
          </p>
          <span className="badge-xs mt-2 inline-flex bg-[#FDF3C0] text-[#7D5A00]">Seluruh waktu</span>
        </div>
        <div className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Total Pengeluaran</p>
            <TrendingDown size={16} className="text-red-500" />
          </div>
          <p className="text-2xl font-semibold text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {formatCurrency(totalPengeluaran)}
          </p>
          <span className="badge-xs mt-2 inline-flex bg-red-50 text-red-600">Seluruh waktu</span>
        </div>
        <div className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Saldo Akhir</p>
            <Wallet size={16} className="text-[#EFB100]" />
          </div>
          <p className="text-2xl font-semibold text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {formatCurrency(saldo)}
          </p>
          <span className="badge-xs mt-2 inline-flex bg-[#FEF9E7] text-[#C99400]">Tersedia</span>
        </div>
      </div>
    </div>
  );
}
