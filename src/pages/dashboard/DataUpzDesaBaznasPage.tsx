import { useState, useEffect, useCallback } from 'react';
import { Building2, Search, Loader2, MapPin, ExternalLink, KeyRound, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { upzDesaService } from '../../services/upzDesaService';
import { adminService } from '../../services/adminService';
import type { UpzDesa, Provinsi, KabupatenKota } from '../../types';

const PER_PAGE = 10;

export default function DataUpzDesaBaznasPage() {
  const [allItems, setAllItems] = useState<UpzDesa[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Region filter
  const [provinsiFilter, setProvinsiFilter] = useState('');
  const [kabFilter, setKabFilter] = useState('');
  const [provinsiList, setProvinsiList] = useState<Provinsi[]>([]);
  const [kabList, setKabList] = useState<KabupatenKota[]>([]);

  // Fetch provinsi on mount
  useEffect(() => {
    upzDesaService.getProvinsi().then((res) => {
      if (res?.data) setProvinsiList(res.data);
    });
  }, []);

  // Fetch kab/kota when provinsi changes
  useEffect(() => {
    if (provinsiFilter) {
      upzDesaService.getKabupatenKota(Number(provinsiFilter)).then((res) => {
        if (res?.data) setKabList(res.data);
      });
    } else {
      setKabList([]);
    }
    setKabFilter('');
  }, [provinsiFilter]);

  /** Fetch ALL UPZ Desa by paginating through backend (max per_page=100). */
  const fetchAllUpzDesa = async (): Promise<UpzDesa[]> => {
    const ALL: UpzDesa[] = [];
    let pg = 1;
    const PER = 100; // backend max per_page
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        const res = await upzDesaService.getUpzDesaList(pg, PER);
        const batch = Array.isArray(res?.data) ? (res.data as UpzDesa[]) : [];
        ALL.push(...batch);
        if (batch.length < PER) break; // last page
        pg++;
      } catch {
        break; // stop on error, keep what we have
      }
    }
    return ALL;
  };

  const loadData = useCallback(async () => {
    setLoading(true);
    let upzDesaList: UpzDesa[] = [];

    // Fetch all UPZ Desa (paginated) — primary source
    try {
      upzDesaList = await fetchAllUpzDesa();
    } catch {
      // ignore
    }

    // Fetch users list to find extra UPZ Desa (non-critical)
    try {
      const usersRes = await adminService.getUsersList();
      const usersList = Array.isArray(usersRes?.data) ? usersRes.data : [];
      const existingIds = new Set(upzDesaList.map((m) => m.id_upz_desa));
      const extraUpzDesas: UpzDesa[] = usersList
        .filter(
          (u: any) =>
            u.id_level === 2 &&
            !!u.id_jalur_akses &&
            !existingIds.has(u.id_jalur_akses)
        )
        .map((u: any) => ({
          id_upz_desa: u.id_jalur_akses,
          nama_upz_desa: u.nama_upz_desa || '-',
          alamat_upz_desa: u.alamat_upz_desa || '',
          kode_org_baznas: u.id_jalur_akses,
        }));
      upzDesaList = [...upzDesaList, ...extraUpzDesas];
    } catch {
      // Users API failed — show only UPZ Desa data
    }

    setAllItems(upzDesaList);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [searchQuery, provinsiFilter, kabFilter]);

  // Apply all filters
  const filteredItems = allItems.filter((m) => {
    // Search filter
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      const matchesSearch =
        (m.nama_upz_desa || '').toLowerCase().includes(q) ||
        (m.alamat_upz_desa || '').toLowerCase().includes(q) ||
        (m.kode_org_baznas || m.id_upz_desa || '').toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }
    // Region filters
    if (provinsiFilter && String(m.id_provinsi) !== provinsiFilter) return false;
    if (kabFilter && String(m.id_kabupaten_kota) !== kabFilter) return false;
    return true;
  });

  const total = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const pageItems = filteredItems.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const hasActiveFilter = !!searchQuery || !!provinsiFilter || !!kabFilter;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FEF9E7] rounded-xl flex items-center justify-center">
            <Building2 size={20} className="text-[#EFB100]" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Data UPZ Desa
            </h2>
            <p className="text-sm text-text-gray" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {allItems.length} UPZ Desa terdaftar di seluruh Indonesia
              {hasActiveFilter && (
                <span className="text-[#EFB100] font-medium"> · {total} ditampilkan</span>
              )}
            </p>
          </div>
        </div>
        <button
          onClick={loadData}
          disabled={loading}
          className="text-sm text-[#EFB100] hover:text-[#C99400] transition-colors flex items-center gap-1"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <Loader2 size={14} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {/* Search + Region Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B0B0]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama UPZ Desa, alamat, atau kode..."
            className="w-full pl-10 pr-4 py-2.5 border border-[#D4D4D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#EFB100]/20 focus:border-[#EFB100]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          />
        </div>
        <div className="relative sm:w-52">
          <select
            value={provinsiFilter}
            onChange={(e) => setProvinsiFilter(e.target.value)}
            className="w-full pl-4 pr-8 py-2.5 border border-[#D4D4D4] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#EFB100]/20 appearance-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <option value="">Semua Provinsi</option>
            {provinsiList.map((p) => (
              <option key={String(p.id)} value={String(p.id)}>
                {p.nama_provinsi}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B0B0B0] pointer-events-none" />
        </div>
        <div className="relative sm:w-52">
          <select
            value={kabFilter}
            onChange={(e) => setKabFilter(e.target.value)}
            disabled={!provinsiFilter}
            className="w-full pl-4 pr-8 py-2.5 border border-[#D4D4D4] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#EFB100]/20 appearance-none disabled:opacity-50 disabled:bg-[#F5F5F5]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <option value="">Semua Kab/Kota</option>
            {kabList.map((k) => (
              <option key={String(k.id)} value={String(k.id)}>
                {k.nama_kabupaten_kota}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B0B0B0] pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#F0F4F8] overflow-hidden">
        {loading ? (
          <div className="p-12 text-center">
            <Loader2 size={24} className="animate-spin text-[#EFB100] mx-auto mb-2" />
            <p className="text-sm text-text-gray" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Memuat data UPZ Desa...</p>
          </div>
        ) : pageItems.length === 0 ? (
          <div className="p-12 text-center">
            <Building2 size={40} className="text-[#D4D4D4] mx-auto mb-3" />
            <p className="text-sm text-text-gray" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {hasActiveFilter ? 'Tidak ada UPZ Desa yang cocok dengan filter' : 'Belum ada data UPZ Desa'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#F0F4F8]">
                  <th className="text-left text-xs font-medium text-text-gray px-4 py-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nama UPZ Desa</th>
                  <th className="text-left text-xs font-medium text-text-gray px-4 py-3 hidden sm:table-cell" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Kode</th>
                  <th className="text-left text-xs font-medium text-text-gray px-4 py-3 hidden md:table-cell" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Alamat</th>
                  <th className="text-right text-xs font-medium text-text-gray px-4 py-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F4F8]">
                {pageItems.map((m) => (
                  <tr key={m.id_upz_desa} className="hover:bg-[#FAFAFA] transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {m.nama_upz_desa}
                      </p>
                      <p className="text-xs text-text-gray md:hidden truncate max-w-[200px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {m.alamat_upz_desa}
                      </p>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#7D5A00] bg-[#FDF3C0] px-2 py-1 rounded-md" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        <KeyRound size={12} />
                        {m.kode_org_baznas || m.id_upz_desa}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-sm text-text-gray flex items-start gap-1.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#B0B0B0]" />
                        <span className="truncate max-w-[320px]">{m.alamat_upz_desa || '-'}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        to={`/upz-desa/${m.slug_upz_desa || m.id_upz_desa}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-[#EFB100] hover:text-[#C99400] transition-colors text-sm"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        <ExternalLink size={14} />
                        Lihat
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {!loading && total > PER_PAGE && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-text-gray" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Halaman {page} dari {totalPages} · {total} UPZ Desa
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="px-3 py-1.5 border border-[#D4D4D4] rounded-lg text-xs text-[#555] hover:border-[#EFB100] hover:text-[#EFB100] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sebelumnya
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="px-3 py-1.5 border border-[#D4D4D4] rounded-lg text-xs text-[#555] hover:border-[#EFB100] hover:text-[#EFB100] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Berikutnya
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
