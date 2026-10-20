import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  BookOpen,
  Users,
  Calendar,
  Megaphone,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Wallet,
  BarChart3,
  FileText,
  ClipboardCheck,
  HelpCircle,
  UserCog,
  HandCoins,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { authService } from '../../services/authService';
import type { UserRole } from '../../types';

interface SidebarItem {
  label: string;
  icon: typeof LayoutDashboard;
  path: string;
  roles: UserRole[];
}

const sidebarMenu: SidebarItem[] = [
  {      label: 'Beranda',
    icon: LayoutDashboard,
    path: '/dashboard',
    roles: ['admin-upz-desa'],
  },
  {
    label: 'Dashboard BAZNAS',
    icon: BarChart3,
    path: '/dashboard-baznas',
    roles: ['admin-baznas'],
  },
  {
    label: 'Dashboard Daerah',
    icon: BarChart3,
    path: '/dashboard-daerah',
    roles: ['admin-daerah'],
  },
  {
    label: 'Dashboard Kab',
    icon: BarChart3,
    path: '/dashboard-kab',
    roles: ['admin-kab'],
  },
  {
    label: 'Dashboard KUA',
    icon: BarChart3,
    path: '/dashboard-kua',
    roles: ['admin-kua'],
  },
  {      label: 'Data UPZ Desa',
    icon: Building2,
    path: '/data-upz-desa/profil',
    roles: ['admin-upz-desa'],
  },
  {
    // Admin BAZNAS + anak-anaknya (Daerah/Kab/KUA): halaman daftar UPZ Desa
    // (nasional untuk BAZNAS, otomatis ter-scope wilayah untuk 3 role lainnya)
    label: 'Data UPZ Desa',
    icon: Building2,
    path: '/data-upz-desa/daftar',
    roles: ['admin-baznas', 'admin-daerah', 'admin-kab', 'admin-kua'],
  },
  {      label: 'Info UPZ Desa',
    icon: FileText,
    path: '/info-upz-desa/data-pengurus',
    roles: ['admin-upz-desa'],
  },
  {      label: 'Menu Publikasi',
    icon: Megaphone,
    path: '/menu-publikasi/postingan',
    roles: ['admin-upz-desa'],
  },
  {      label: 'Buku Kas',
    icon: Wallet,
    path: '/buku-kas/penerimaan',
    roles: ['admin-upz-desa'],
  },
  {      label: 'Buku Aset',
    icon: BookOpen,
    path: '/buku-aset',
    roles: ['admin-upz-desa'],
  },
  {      label: 'Data Pengurus',
    icon: Users,
    path: '/info-upz-desa/data-pengurus',
    roles: ['admin-upz-desa', 'admin-baznas', 'admin-daerah', 'admin-kab', 'admin-kua'],
  },
  {      label: 'Data Anggota',
    icon: Users,
    path: '/info-upz-desa/data-anggota',
    roles: ['admin-upz-desa'],
  },
  {      label: 'Kegiatan UPZ Desa',
    icon: Calendar,
    path: '/kegiatan-upz-desa',
    roles: ['admin-upz-desa'],
  },
  {      label: 'Microfinance',
    icon: HandCoins,
    path: '/microfinance',
    roles: ['admin-upz-desa'],
  },
  {
    label: 'Setting Akun',
    icon: Settings,
    path: '/setting-akun',
    roles: ['admin-upz-desa', 'admin-baznas', 'admin-daerah', 'admin-kab', 'admin-kua'],
  },
  {      label: 'Pengajuan UPZ Desa',
    icon: ClipboardCheck,
    path: '/pengajuan-upz-desa',
    roles: ['admin-baznas'],
  },
  {
    label: 'Kelola Pengguna',
    icon: UserCog,
    path: '/kelola-pengguna',
    roles: ['admin-baznas'],
  },
];

const roleBadgeColors: Record<UserRole, string> = {
  'admin-upz-desa': 'bg-[#FDF3C0] text-[#7D5A00]',
  'admin-baznas': 'bg-[#F3E8FF] text-[#7C3AED]',
  'admin-daerah': 'bg-[#E0F2FE] text-[#0369A1]',
  'admin-kab': 'bg-[#FEF3C7] text-[#B45309]',
  'admin-kua': 'bg-[#FCE7F3] text-[#BE185D]',
};

const roleBadgeLabels: Record<UserRole, string> = {
  'admin-upz-desa': 'Admin UPZ Desa',
  'admin-baznas': 'Admin BAZNAS',
  'admin-daerah': 'Admin Daerah',
  'admin-kab': 'Admin Kab',
  'admin-kua': 'Admin KUA',
};

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, role, logout: clearAuth } = useAuthStore();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const filteredMenu = sidebarMenu.filter(
    (item) => role && item.roles.includes(role)
  );

  const handleLogout = async () => {
    await authService.logout();
    clearAuth();
    navigate('/login');
  };

  const currentPath = location.pathname;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[rgba(0,0,0,0.08)]">
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <img src="/assets/icons/logo-upzDesa2.webp" alt="UPZ Desa Logo" className="w-full h-full object-contain" />
        </div>
        {!sidebarCollapsed && (
          <span className="text-sm font-semibold text-[#303030] whitespace-nowrap" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            UPZ Desa
          </span>
        )}
      </div>

      {/* User Info */}
      {!sidebarCollapsed && (
        <div className="px-4 py-3 border-b border-[rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EFB100] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
              {user?.nama?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-[#303030] truncate" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {user?.nama || 'User'}
              </p>
              {role && (
                <span
                  className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mt-0.5 ${roleBadgeColors[role]}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {roleBadgeLabels[role]}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {filteredMenu.map((item) => {
          const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
          return (
            <Link
              key={`${item.label}-${item.path}`}
              to={item.path}
              onClick={() => setMobileSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-[#EFB100]/10 text-[#EFB100] font-medium'
                  : 'text-[#555] hover:bg-[#F0F4F8] hover:text-[#303030]'
              }`}
              title={sidebarCollapsed ? item.label : undefined}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!sidebarCollapsed && (
                <span className="text-sm whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="border-t border-[rgba(0,0,0,0.08)] p-2 space-y-0.5">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#555] hover:bg-[#F0F4F8] hover:text-[#303030] transition-all duration-200"
          title={sidebarCollapsed ? 'Kunjungi Website' : undefined}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <HelpCircle size={20} className="flex-shrink-0" />
          {!sidebarCollapsed && <span className="text-sm">Bantuan</span>}
        </Link>
        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-200"
          title={sidebarCollapsed ? 'Keluar' : undefined}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <LogOut size={20} className="flex-shrink-0" />
          {!sidebarCollapsed && <span className="text-sm">Keluar</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-white border-r border-[rgba(0,0,0,0.08)] transition-all duration-300 relative ${
          sidebarCollapsed ? 'w-16' : 'w-60'
        }`}
      >
        {/* Collapse toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white border border-[rgba(0,0,0,0.08)] rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow z-10"
        >
          {sidebarCollapsed ? <ChevronRight size={14} className="text-[#555]" /> : <ChevronLeft size={14} className="text-[#555]" />}
        </button>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
            <div className="flex justify-end p-2">
              <button onClick={() => setMobileSidebarOpen(false)} className="p-2 rounded-lg hover:bg-[#F0F4F8]">
                <X size={20} className="text-[#555]" />
              </button>
            </div>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-[rgba(0,0,0,0.08)] px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-[#F0F4F8]">
                <Menu size={20} className="text-[#555]" />
              </button>
              <h1 className="text-lg font-semibold text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {sidebarMenu.find((item) => currentPath === item.path || currentPath.startsWith(item.path + '/'))
                  ?.label || 'Dashboard'}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {user?.nama_upz_desa && (
                <span className="hidden sm:block text-sm text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {user.nama_upz_desa}
                </span>
              )}
              <div className="w-8 h-8 rounded-full bg-[#EFB100]/10 flex items-center justify-center text-[#EFB100] text-sm font-semibold">
                {user?.nama?.charAt(0)?.toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowLogoutConfirm(false)} />
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut size={24} className="text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#303030] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Keluar Aplikasi
              </h3>
              <p className="text-sm text-[#555] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Apakah Anda yakin ingin keluar dari aplikasi?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 py-2.5 border border-[rgba(0,0,0,0.15)] rounded-lg text-sm font-medium text-[#303030] hover:bg-[#F0F4F8] transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Tidak
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 py-2.5 bg-red-500 rounded-lg text-sm font-medium text-white hover:bg-red-600 transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Ya, Keluar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
