import { Link } from 'react-router-dom';
import { Building2, Users, Settings, TrendingUp, TrendingDown, Globe } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const quickLinks = [
  {
    label: 'Data UPZ Desa',
    icon: Building2,
    path: '/data-upz-desa/daftar',
    color: '#7C3AED',
    bgColor: '#F3E8FF',
    description: 'Data UPZ Desa di wilayah Anda',
  },
  {
    label: 'Data Pengurus',
    icon: Users,
    path: '/info-upz-desa/data-pengurus',
    color: '#D97706',
    bgColor: '#FFFBEB',
    description: 'Pengurus lintas UPZ Desa di wilayah Anda',
  },
  {
    label: 'Setting Akun',
    icon: Settings,
    path: '/setting-akun',
    color: '#64748B',
    bgColor: '#F1F5F9',
    description: 'Profil & password',
  },
  {
    label: 'Kunjungi Website',
    icon: Globe,
    path: '/',
    color: '#EFB100',
    bgColor: '#FEF9E7',
    description: 'Lihat portal publik UPZ Desa',
  },
];

interface DashboardScopedAdminProps {
  /** Judul role, mis. "Admin Daerah" */
  roleLabel: string;
}

/**
 * Dashboard untuk "anak" Admin BAZNAS yang scope-nya dipersempit ke wilayah
 * tertentu (Admin Daerah/Kab/KUA). Data di kartu statistik & Data UPZ Desa
 * otomatis ter-scope oleh backend (lihat rbac_middleware.get_user_scope_columns)
 * berdasar id_provinsi/id_kabupaten_kota/id_kecamatan milik akun yang login —
 * tidak ada filter tambahan di frontend.
 */
export default function DashboardScopedAdmin({ roleLabel }: DashboardScopedAdminProps) {
  const { user } = useAuthStore();

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
              Anda login sebagai <span className="font-medium text-white">{roleLabel}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.1)] hover:shadow-md hover:border-[#EFB100]/30 transition-all duration-200 group relative"
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Total UPZ Desa</p>
            <Building2 size={16} className="text-[#EFB100]" />
          </div>
          <p className="text-2xl font-semibold text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>0</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp size={14} className="text-[#EFB100]" />
            <span className="badge-xs bg-[#FDF3C0] text-[#7D5A00]">Di wilayah Anda</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Total Penerimaan</p>
            <TrendingUp size={16} className="text-[#EFB100]" />
          </div>
          <p className="text-2xl font-semibold text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Rp 0</p>
          <span className="badge-xs bg-[#FDF3C0] text-[#7D5A00]">Di wilayah Anda</span>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Total Pengeluaran</p>
            <TrendingDown size={16} className="text-red-500" />
          </div>
          <p className="text-2xl font-semibold text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Rp 0</p>
          <span className="badge-xs bg-red-50 text-red-600">Di wilayah Anda</span>
        </div>
      </div>
    </div>
  );
}
