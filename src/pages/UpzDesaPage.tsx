import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ChevronRight, Star, Users, Share2, Filter, Loader2, AlertCircle } from 'lucide-react';
import { upzDesaService } from '../services/upzDesaService';
import type { Provinsi } from '../types';

/** Field UPZ Desa dari endpoint publik GET /content 8003 /masjid/search (Fix #48). */
interface PublikUpzDesa {
  id_upz_desa: string;
  nama_upz_desa: string | null;
  jenis_upz_desa: string | null;
  tipologi: string | null;
  alamat_upz_desa: string | null;
  daya_tampung: string | null;
  deskripsi: string | null;
  slug_upz_desa: string | null;
}

type FilterType = 'Semua' | 'UPZ Desa' | 'UPZ Kelurahan';

export default function UpzDesaPage() {
  const [searchInput, setSearchInput] = useState('');
  const [nama, setNama] = useState(''); // nilai yang sudah di-debounce → dikirim ke server
  const [activeFilter, setActiveFilter] = useState<FilterType>('Semua');
  const [idProvinsi, setIdProvinsi] = useState<number | undefined>(undefined);

  const [upzDesas, setUpzDesas] = useState<PublikUpzDesa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [provinsiList, setProvinsiList] = useState<Provinsi[]>([]);
  const hasilRef = useRef<HTMLDivElement>(null);

  // Debounce input pencarian (server-side search, bukan filter data mock)
  useEffect(() => {
    const t = setTimeout(() => setNama(searchInput.trim()), 400);
    return () => clearTimeout(t);
  }, [searchInput]);

  // Fetch daftar UPZ Desa dari endpoint publik content service
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    upzDesaService
      .searchUpzDesa({
        nama: nama || undefined,
        jenis: activeFilter === 'Semua' ? undefined : activeFilter,
        id_provinsi: idProvinsi,
        limit: 60,
      })
      .then((res) => {
        if (cancelled) return;
        setUpzDesas((res.data || []) as unknown as PublikUpzDesa[]);
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [nama, activeFilter, idProvinsi]);

  // Daftar provinsi untuk section "Jelajahi Wilayah" (endpoint butuh x-api-key — sudah ada di upzDesaApi)
  useEffect(() => {
    upzDesaService
      .getProvinsi()
      .then((res) => setProvinsiList((res.data || []) as Provinsi[]))
      .catch(() => setProvinsiList([]));
  }, []);

  const handleShare = (upzDesa: PublikUpzDesa) => {
    const shareData = {
      title: upzDesa.nama_upz_desa || 'UPZ Desa',
      text: `${upzDesa.nama_upz_desa} - terdaftar di platform UPZ Desa`,
      url: `${window.location.origin}/upz-desa/${upzDesa.slug_upz_desa}`,
    };
    if (typeof navigator.share === 'function') {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard?.writeText(shareData.url).catch(() => {});
    }
  };

  const pilihProvinsi = (id: number) => {
    setIdProvinsi((prev) => (prev === id ? undefined : id));
    hasilRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section pb-6">
        <div className="badge-green mx-auto mb-6 w-fit">
          <MapPin size={14} />
          <span>Peta Sebaran</span>
        </div>
        <h1>
          Cari <span className="text-gradient-green">UPZ Desa</span>{' '}
          <span className="text-gradient-green">Seluruh Indonesia</span>
        </h1>
        <p className="text-lg text-[#555] max-w-2xl mx-auto mt-3">
          Temukan informasi lengkap UPZ Desa di berbagai wilayah Indonesia
        </p>

        {/* Search Container */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm p-6">
            {/* Filter Buttons */}
            <div className="flex items-center gap-2 mb-4">
              <Filter size={14} className="text-[#555]" />
              {(['Semua', 'UPZ Desa', 'UPZ Kelurahan'] as FilterType[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-[#EFB100] text-white shadow-sm shadow-[#EFB100]/20'
                      : 'bg-[#F0F4F8] text-[#555] hover:bg-[#FDF3C0] hover:text-[#EFB100]'
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="flex items-center bg-[#F0F4F8] rounded-xl px-4 py-3">
              <Search size={18} className="text-[#B0B0B0] mr-3 flex-shrink-0" />                <input
                type="text"
                placeholder="Cari nama UPZ Desa..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full text-sm text-[#303030] placeholder:text-[#B0B0B0] focus:outline-none bg-transparent"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              />
              <span className="text-[11px] text-[#B0B0B0] flex-shrink-0 ml-2 hidden sm:inline">
                {loading ? '...' : `${upzDesas.length} ditemukan`}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HASIL PENCARIAN (data asli dari Content Service) ===== */}
      <section className="page-section pt-4" ref={hasilRef}>
        <div className="page-section-inner max-w-6xl">
          <div className="text-center mb-10">
            <div className="badge-green mx-auto mb-4 w-fit">
              <Star size={14} />
              <span>Terdaftar</span>
            </div>
            <h2 className="section-title">
              UPZ Desa <span className="text-gradient-green">Terverifikasi BAZNAS</span>
            </h2>
            <p className="text-base text-[#555] mt-3">
              {loading
                ? 'Memuat data UPZ Desa...'
                : `${upzDesas.length} UPZ Desa ditampilkan${upzDesas.length >= 60 ? ' (maks. 60)' : ''}`}
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-16 gap-3">
              <Loader2 size={28} className="animate-spin text-[#EFB100]" />
              <span className="text-sm text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Memuat data UPZ Desa...
              </span>
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
              <AlertCircle size={40} className="text-[#EF4444]" />
              <p className="text-sm text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Gagal memuat data UPZ Desa. Coba muat ulang halaman.
              </p>
            </div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {!loading &&
              !error &&
              upzDesas.map((upzDesa) => (
                <div
                  key={upzDesa.id_upz_desa}
                  className="bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl overflow-hidden card-hover group transition-all hover:shadow-lg hover:border-[#EFB100]/20"
                >
                  {/* Image */}
                  <div className="relative h-44 bg-gradient-to-br from-[#FDF3C0] to-[#FEF9E7] flex items-center justify-center overflow-hidden">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Base bangunan utama */}
                        <rect x="14" y="32" width="52" height="38" rx="2" fill="#EFB100" opacity="0.9"/>
                        {/* Pintu masuk tengah */}
                        <rect x="33" y="52" width="14" height="18" rx="2" fill="#C99400"/>
                        {/* Jendela kiri bawah */}
                        <rect x="19" y="54" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                        {/* Jendela kanan bawah */}
                        <rect x="51" y="54" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                        {/* Jendela kiri atas */}
                        <rect x="19" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                        {/* Jendela tengah atas */}
                        <rect x="35" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                        {/* Jendela kanan atas */}
                        <rect x="51" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                        {/* Atap / pediment */}
                        <path d="M10 33L40 14L70 33H10Z" fill="#C99400"/>
                        {/* Tiang kiri */}
                        <rect x="17" y="33" width="5" height="37" rx="1" fill="#B8860B" opacity="0.5"/>
                        {/* Tiang kanan */}
                        <rect x="58" y="33" width="5" height="37" rx="1" fill="#B8860B" opacity="0.5"/>
                        {/* Bendera / tanda UPZ di atas */}
                        <rect x="38" y="6" width="3" height="10" rx="1" fill="#C99400"/>
                        <path d="M41 6L50 9.5L41 13V6Z" fill="#EFB100"/>
                        {/* Garis lantai */}
                        <rect x="10" y="69" width="60" height="3" rx="1.5" fill="#C99400" opacity="0.6"/>
                      </svg>
                    </div>

                    {/* Type Badge */}
                    <span
                      className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide ${
                        upzDesa.jenis_upz_desa === 'UPZ Kelurahan'
                          ? 'bg-[#FF8C00]/90 text-white'
                          : 'bg-[#EFB100]/90 text-white'
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {upzDesa.jenis_upz_desa || 'UPZ Desa'}
                    </span>

                    {/* Capacity Badge */}
                    {upzDesa.daya_tampung && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-medium text-[#555] shadow-sm">
                        <Users size={10} />
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{upzDesa.daya_tampung}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Location */}
                    {upzDesa.alamat_upz_desa && (
                      <div className="flex items-start gap-1 text-[11px] text-[#888] mb-1.5">
                        <MapPin size={11} className="mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {upzDesa.alamat_upz_desa}
                        </span>
                      </div>
                    )}

                    {/* Name */}
                    <h3
                      className="text-base font-bold text-[#303030] mb-1.5 group-hover:text-[#EFB100] transition-colors"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {upzDesa.nama_upz_desa || 'Tanpa Nama'}
                    </h3>

                    {/* Description */}
                    {upzDesa.deskripsi && (
                      <p
                        className="text-xs text-[#666] mb-3 line-clamp-2"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        dangerouslySetInnerHTML={{ __html: upzDesa.deskripsi }}
                      />
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t border-[rgba(0,0,0,0.04)]">
                      <Link
                        to={`/upz-desa/${upzDesa.slug_upz_desa || upzDesa.id_upz_desa}`}
                        className="flex-1 text-center text-xs font-semibold text-white bg-[#EFB100] hover:bg-[#1f8a13] px-4 py-2 rounded-xl transition-colors"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Lihat Profil
                      </Link>
                      <button
                        onClick={() => handleShare(upzDesa)}
                        className="flex items-center justify-center gap-1.5 text-xs font-medium text-[#555] bg-[#F0F4F8] hover:bg-[#FDF3C0] hover:text-[#EFB100] px-3 py-2 rounded-xl transition-all"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        <Share2 size={12} />
                        <span className="hidden sm:inline">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Empty State */}
          {!loading && !error && upzDesas.length === 0 && (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4 opacity-30">
                <svg width="56" height="56" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="14" y="32" width="52" height="38" rx="2" fill="#EFB100"/>
                  <rect x="33" y="52" width="14" height="18" rx="2" fill="#C99400"/>
                  <rect x="19" y="54" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                  <rect x="51" y="54" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                  <rect x="19" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                  <rect x="35" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                  <rect x="51" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                  <path d="M10 33L40 14L70 33H10Z" fill="#C99400"/>
                  <rect x="38" y="6" width="3" height="10" rx="1" fill="#C99400"/>
                  <path d="M41 6L50 9.5L41 13V6Z" fill="#EFB100"/>
                  <rect x="10" y="69" width="60" height="3" rx="1.5" fill="#C99400" opacity="0.6"/>
                </svg>
              </div>
              <p
                className="text-sm text-[#888]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Tidak ada UPZ Desa yang ditemukan
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== REGIONS (data provinsi asli dari API, klik untuk filter) ===== */}
      <section className="page-section">
        <div className="page-section-inner max-w-6xl">
          <div className="text-center mb-10">
            <div className="badge-green mx-auto mb-4 w-fit">
              <MapPin size={14} />
              <span>Wilayah</span>
            </div>
            <h2 className="section-title">
              Jelajahi Berdasarkan <span className="text-gradient-green">Wilayah</span>
            </h2>
            <p className="text-base text-[#555] mt-3">
              Klik provinsi untuk memfilter daftar UPZ Desa di atas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {provinsiList.map((prov) => (
              <button
                key={prov.id}
                onClick={() => pilihProvinsi(Number(prov.id))}
                className={`group flex items-center justify-between p-4 rounded-xl border transition-all text-left card-hover ${
                  idProvinsi === Number(prov.id)
                    ? 'bg-[#FEF9E7] border-[#EFB100] shadow-md'
                    : 'bg-white border-[rgba(0,0,0,0.08)] hover:border-[#EFB100]/30 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF3C0] flex items-center justify-center text-[#EFB100] font-bold text-sm shrink-0">
                    {prov.nama_provinsi.charAt(0)}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold transition-colors text-sm ${
                        idProvinsi === Number(prov.id) ? 'text-[#EFB100]' : 'text-[#303030] group-hover:text-[#EFB100]'
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {prov.nama_provinsi}
                    </h4>
                    <p
                      className="text-xs text-[#888] mt-0.5"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Provinsi
                    </p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#ccc] group-hover:text-[#EFB100] transition-colors shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
