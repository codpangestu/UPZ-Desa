import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Users, Loader2, AlertCircle, Building2, Calendar } from 'lucide-react';
import { upzDesaService } from '../services/upzDesaService';

/** Shape response GET /api/v1/masjid/{slug} (Content Service 8003) setelah
 * normalisasi nama field oleh adapter di services/api.ts (backend mengirim
 * `nama_masjid`, app memakai `nama_upz_desa`). */
interface PublikUpzDesaDetail {
  id_upz_desa?: string;
  nama_upz_desa?: string | null;
  slug_upz_desa?: string | null;
  jenis_upz_desa?: string | null;
  tipologi?: string | null;
  alamat_upz_desa?: string | null;
  deskripsi?: string | null;
  nohp_upz_desa?: string | null;
  email_upz_desa?: string | null;
  fasilitas?: Array<{ id: number; nama: string }>;
  kajian?: Array<{ id: number; judul: string; tanggal: string; penulis?: string }>;
  acara?: Array<{ id: number; judul: string; tanggal: string; penulis?: string }>;
}

export default function UpzDesaDetailPage() {
  const { id } = useParams<{ id: string }>(); // id = slug upz_desa
  const [upzDesa, setUpzDesa] = useState<PublikUpzDesaDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setNotFound(false);
    setError(false);
    setUpzDesa(null);
    if (!id) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    upzDesaService
      .getUpzDesaBySlug(id)
      .then((res) => {
        if (cancelled) return;
        // 404 backend mengirim status_code="404" dengan data null — ApiResponse
        // type frontend tidak punya status_code, jadi cukup cek data-nya.
        if (!res?.data) {
          setNotFound(true);
        } else {
          setUpzDesa(res.data as unknown as PublikUpzDesaDetail);
        }
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
  }, [id]);

  const stripHtml = (html?: string | null) => (html ? html.replace(/<[^>]*>/g, '').trim() : '');

  if (loading) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 size={32} className="animate-spin text-[#EFB100]" />
          <span className="text-sm text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Memuat profil UPZ Desa...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <AlertCircle size={48} className="text-[#EF4444] mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#303030] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Terjadi Kesalahan</h2>
          <p className="text-sm text-[#555] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Gagal memuat profil UPZ desa. Coba muat ulang halaman.</p>
          <Link to="/upz-desa" className="btn-primary-green">Kembali ke Daftar UPZ Desa</Link>
        </div>
      </div>
    );
  }

  if (notFound || !upzDesa) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-[#303030] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>UPZ Desa Tidak Ditemukan</h2>
          <p className="text-sm text-[#555] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>UPZ desa yang Anda cari tidak tersedia.</p>
          <Link to="/upz-desa" className="btn-primary-green">Kembali ke Daftar UPZ Desa</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="page-section">
        <div className="page-section-inner max-w-4xl">
          {/* Back Button */}
          <Link
            to="/upz-desa"
            className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#EFB100] transition-colors mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Kembali ke Daftar UPZ Desa
          </Link>

          {/* Header Card */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl overflow-hidden mb-6 card-hover">
            <div className="h-64 bg-gradient-to-br from-[#FDF3C0] to-[#FEF9E7] flex items-center justify-center relative">
              <svg width="110" height="110" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="32" width="52" height="38" rx="2" fill="#EFB100" opacity="0.9"/>
                <rect x="33" y="52" width="14" height="18" rx="2" fill="#C99400"/>
                <rect x="19" y="54" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                <rect x="51" y="54" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                <rect x="19" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                <rect x="35" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                <rect x="51" y="38" width="10" height="8" rx="1.5" fill="#FEF9E7" stroke="#C99400" strokeWidth="1.2"/>
                <path d="M10 33L40 14L70 33H10Z" fill="#C99400"/>
                <rect x="17" y="33" width="5" height="37" rx="1" fill="#B8860B" opacity="0.5"/>
                <rect x="58" y="33" width="5" height="37" rx="1" fill="#B8860B" opacity="0.5"/>
                <rect x="38" y="6" width="3" height="10" rx="1" fill="#C99400"/>
                <path d="M41 6L50 9.5L41 13V6Z" fill="#EFB100"/>
                <rect x="10" y="69" width="60" height="3" rx="1.5" fill="#C99400" opacity="0.6"/>
              </svg>
              {upzDesa.jenis_upz_desa && (
                <span
                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide ${
                    upzDesa.jenis_upz_desa === 'Musholla' ? 'bg-[#FF8C00]/90 text-white' : 'bg-[#EFB100]/90 text-white'
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {upzDesa.jenis_upz_desa}
                </span>
              )}
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#303030] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {upzDesa.nama_upz_desa || 'Tanpa Nama'}
              </h1>
              {upzDesa.alamat_upz_desa && (
                <div className="flex items-start gap-2 text-sm text-[#555] mb-4">
                  <MapPin size={16} className="text-[#EFB100] mt-0.5 flex-shrink-0" />
                  <span>{upzDesa.alamat_upz_desa}</span>
                </div>
              )}
              {stripHtml(upzDesa.deskripsi) && (
                <p className="text-base text-[#303030] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {stripHtml(upzDesa.deskripsi)}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informasi Kontak */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl p-6">
              <div className="badge-green mb-4 w-fit">
                <MapPin size={14} />
                <span>Informasi Kontak</span>
              </div>
              <div className="space-y-4">
                {upzDesa.alamat_upz_desa ? (
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#EFB100] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Alamat</p>
                      <p className="text-sm text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{upzDesa.alamat_upz_desa}</p>
                    </div>
                  </div>
                ) : null}
                {upzDesa.nohp_upz_desa ? (
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#EFB100] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Telepon</p>
                      <p className="text-sm text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{upzDesa.nohp_upz_desa}</p>
                    </div>
                  </div>
                ) : null}
                {upzDesa.email_upz_desa ? (
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-[#EFB100] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email</p>
                      <p className="text-sm text-[#303030]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{upzDesa.email_upz_desa}</p>
                    </div>
                  </div>
                ) : null}
                {!upzDesa.alamat_upz_desa && !upzDesa.nohp_upz_desa && !upzDesa.email_upz_desa && (
                  <p className="text-sm text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Informasi kontak belum dilengkapi admin UPZ Desa.
                  </p>
                )}
              </div>
            </div>

            {/* Fasilitas */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl p-6">
              <div className="badge-green mb-4 w-fit">
                <Building2 size={14} />
                <span>Fasilitas</span>
              </div>
              {upzDesa.fasilitas && upzDesa.fasilitas.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {upzDesa.fasilitas.map((fas) => (
                    <span key={fas.id} className="badge-sm">{fas.nama}</span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Fasilitas belum didata.
                </p>
              )}
            </div>

            {/* Kajian & Acara Terbaru dari masjid ini (data asli) */}
            <div className="md:col-span-2 bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl p-6">
              <div className="badge-green mb-4 w-fit">
                <Users size={14} />
                <span>Kajian & Acara</span>
              </div>
              {((upzDesa.kajian?.length ?? 0) + (upzDesa.acara?.length ?? 0)) > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {upzDesa.kajian?.slice(0, 4).map((k) => (
                    <div key={`k-${k.id}`} className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-[rgba(0,0,0,0.04)]">
                      <div className="w-9 h-9 rounded-full bg-[#FEF9E7] flex items-center justify-center text-[#EFB100] flex-shrink-0">
                        <Calendar size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#303030] truncate" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{k.judul}</p>
                        <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          Kajian{k.tanggal ? ` • ${k.tanggal.slice(0, 10)}` : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                  {upzDesa.acara?.slice(0, 4).map((a) => (
                    <div key={`a-${a.id}`} className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-[rgba(0,0,0,0.04)]">
                      <div className="w-9 h-9 rounded-full bg-[#FEF9E7] flex items-center justify-center text-[#EFB100] flex-shrink-0">
                        <Calendar size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#303030] truncate" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{a.judul}</p>
                        <p className="text-xs text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          Acara{a.tanggal ? ` • ${a.tanggal.slice(0, 10)}` : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#555]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Belum ada kajian/acara yang dipublikasikan UPZ Desa ini.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
