import { Link } from 'react-router-dom';
import {
  FileText,
  Copyright,
  Users2,
  Compass,
  ShieldAlert,
  Lock,
  Code2,
  AlertTriangle,
  Layers,
  RefreshCw,
  Mail,
  Printer,
  ChevronRight,
  ArrowLeft,
  Building2,
  School,
  Landmark,
  CheckCircle2,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

export default function SyaratKetentuanPage() {
  const handlePrint = () => {
    window.print();
  };

  const menuItems = [
    { num: 1, title: 'Identitas & Atribusi Pengembangan', id: 'atribusi' },
    { num: 2, title: 'Ruang Lingkup Hak Cipta', id: 'hak-cipta' },
    { num: 3, title: 'Tujuan & Ruang Lingkup Penggunaan', id: 'ruang-lingkup' },
    { num: 4, title: 'Ketentuan Penggunaan', id: 'ketentuan' },
    { num: 5, title: 'Data, Privasi & Keamanan Informasi', id: 'keamanan-data' },
    { num: 6, title: 'Pengembangan, Pembaruan & Kolaborasi', id: 'kolaborasi' },
    { num: 7, title: 'Batasan Tanggung Jawab', id: 'batasan' },
    { num: 8, title: 'Lisensi & Komponen Pihak Ketiga', id: 'lisensi-pihak-ketiga' },
    { num: 9, title: 'Perubahan Ketentuan', id: 'perubahan' },
    { num: 10, title: 'Kontak & Permohonan Izin', id: 'kontak-izin' },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ============================== */}
      {/* HERO SECTION */}
      {/* ============================== */}
      <section className="hero-section">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#767676] mb-4">
          <Link to="/" className="hover:text-[#C99400] transition-colors flex items-center gap-1">
            Beranda
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#303030] font-medium">Syarat &amp; Ketentuan</span>
        </div>

        {/* Badge */}
        <div className="badge-green mx-auto mb-6 w-fit">
          <Copyright size={14} className="text-[#7D5A00]" />
          <span>Hak Cipta &amp; Ketentuan Penggunaan</span>
        </div>

        {/* Title */}
        <h1>
          Syarat &amp; <span className="text-gradient-green">Ketentuan Penggunaan</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#555] max-w-2xl mx-auto">
          Informasi mengenai hak cipta, atribusi pengembangan, ketentuan penggunaan, perlindungan data, serta tanggung jawab pengguna terhadap platform digital kami.
        </p>

        {/* Quick action bar */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={handlePrint}
            className="btn-outline-green cursor-pointer text-xs sm:text-sm py-2 px-4 shadow-sm inline-flex items-center gap-2"
            title="Cetak Dokumen Syarat & Ketentuan"
          >
            <Printer size={15} />
            <span>Cetak Dokumen</span>
          </button>
          <Link
            to="/kebijakan-privasi"
            className="btn-outline-green text-xs sm:text-sm py-2 px-4 shadow-sm inline-flex items-center gap-2"
          >
            <Lock size={15} />
            <span>Kebijakan Privasi</span>
          </Link>
          <Link
            to="/kontak"
            className="btn-primary-green text-xs sm:text-sm py-2 px-4 shadow-sm inline-flex items-center gap-2"
          >
            <HelpCircle size={15} />
            <span>Hubungi Kami</span>
          </Link>
        </div>
      </section>

      {/* ============================== */}
      {/* MAIN CONTENT SECTION */}
      {/* ============================== */}
      <section className="page-section pb-24">
        <div className="page-section-inner">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Sticky Navigation (Desktop) */}
            <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-6 border border-black/10 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] flex items-center justify-center text-[#EFB100]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#303030] text-sm">Daftar Ketentuan</h3>
                    <p className="text-xs text-[#767676]">10 Pasal Penggunaan Platform</p>
                  </div>
                </div>

                <nav className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                  {menuItems.map((item) => (
                    <a
                      key={item.num}
                      href={`#${item.id}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-[#FEF9E7] text-[#555] hover:text-[#303030] transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#FAFAFA] border border-gray-200 group-hover:border-[#EFB100] group-hover:bg-[#EFB100] group-hover:text-white flex items-center justify-center text-[10px] font-bold text-[#767676] transition-colors flex-shrink-0">
                          {item.num}
                        </span>
                        <span className="font-medium line-clamp-1">{item.title}</span>
                      </div>
                      <ChevronRight size={12} className="text-gray-300 group-hover:text-[#EFB100] transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Copyright Badge Card */}
              <div className="bg-[#FEF9E7] rounded-2xl p-6 border border-[#EFB100]/25">
                <div className="flex items-center gap-2 mb-2">
                  <Copyright size={18} className="text-[#C99400]" />
                  <h4 className="font-semibold text-[#303030] text-sm">Hak Cipta Terlindungi</h4>
                </div>
                <p className="text-xs text-[#555] mb-4 leading-relaxed">
                  &copy; 2026 — Hak Cipta Dilindungi Sesuai Ketentuan yang Berlaku. Dikembangkan untuk kemaslahatan umat dan tata kelola filantropi Islam.
                </p>
                <div className="pt-3 border-t border-[#EFB100]/20 flex flex-col gap-2 text-xs">
                  <Link to="/founder" className="font-semibold text-[#C99400] hover:underline flex items-center gap-1.5">
                    <span>Profil Founder &amp; Tim Pengembang</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/10 shadow-sm print:shadow-none print:border-none print:p-0 space-y-8">
              {/* Document Header */}
              <div className="border-b border-gray-100 pb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#C99400]">
                      Dokumen Resmi Platform
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#303030] mt-1">
                      Hak Cipta &amp; Ketentuan Penggunaan
                    </h2>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block px-3 py-1 bg-[#FEF9E7] text-[#C99400] text-xs font-semibold rounded-full">
                      Tahun Rilis: 2026
                    </span>
                    <p className="text-[11px] text-[#767676] mt-1">
                      Menara Masjid &bull; UPZ Desa &bull; UPZ Sekolah
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-[#FEF9E7]/60 border border-[#EFB100]/30 text-sm text-[#555] leading-relaxed">
                  <p className="font-medium text-[#303030]">
                    Halaman ini memuat informasi mengenai hak cipta, atribusi pengembangan, ketentuan penggunaan, perlindungan data, serta tanggung jawab pengguna terhadap platform digital yang dikembangkan untuk mendukung digitalisasi tata kelola kelembagaan dan filantropi Islam.
                  </p>
                </div>
              </div>

              {/* ========================================= */}
              {/* PASAL 1: IDENTITAS & ATRIBUSI PENGEMBANGAN */}
              {/* ========================================= */}
              <section id="atribusi" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    1
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Identitas dan Atribusi Pengembangan
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Founder Box */}
                      <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-black/5 space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C99400]">
                          Founder &amp; Inisiator
                        </span>
                        <h4 className="font-bold text-sm text-[#303030]">
                          M. Romadhona Kusuma, A.Md.Kom., S.Kom., M.Kom.
                        </h4>
                        <p className="text-xs text-[#555] leading-relaxed pt-1">
                          Dosen Program Studi Sistem dan Teknologi Informasi, Universitas Darunnajah, serta praktisi teknologi informasi dan amil BAZNAS Republik Indonesia.
                        </p>
                      </div>

                      {/* Tim Reborn Box */}
                      <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-black/5 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C99400]">
                          Tim Reborn, Pengembangan Ulang, &amp; Penyempurnaan
                        </span>
                        <div className="space-y-1.5 text-xs text-[#303030]">
                          <div className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EFB100] mt-1.5 flex-shrink-0" />
                            <p><strong>Akbar Pangestu</strong> — Mahasiswa Prodi Sistem dan Teknologi Informasi, Universitas Darunnajah.</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EFB100] mt-1.5 flex-shrink-0" />
                            <p><strong>Ari Fujiono</strong> — Mahasiswa Prodi Sistem dan Teknologi Informasi, Universitas Darunnajah.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-[#555] leading-relaxed space-y-3 pt-1">
                      <p>
                        Platform ini merupakan bagian dari inisiatif digital yang digagas oleh <strong>M. Romadhona Kusuma</strong>. Dalam tahap pengembangan selanjutnya, aplikasi mengalami proses reborn, pembaruan, dan penyempurnaan teknologi melalui kolaborasi yang melibatkan <strong>Akbar Pangestu dan Ari Fujiono</strong>.
                      </p>
                      <p>
                        Kolaborasi ini mencerminkan sinergi antara dosen dan mahasiswa dalam menghadirkan solusi digital yang mendukung digitalisasi tata kelola zakat, infak, dan sedekah (ZIS).
                      </p>
                      <p>
                        Atribusi ini diberikan untuk menjelaskan peran masing-masing pihak dalam perjalanan pengembangan aplikasi. Hak atas konsep, kode sumber, desain, dokumentasi, dan komponen lainnya mengikuti kontribusi masing-masing pihak, perjanjian yang berlaku, serta ketentuan peraturan perundang-undangan.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 2: RUANG LINGKUP HAK CIPTA */}
              {/* ========================================= */}
              <section id="hak-cipta" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    2
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Ruang Lingkup Hak Cipta
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Hak cipta dapat mencakup berbagai komponen karya dalam platform, antara lain:
                    </p>
                    <ul className="space-y-2 text-sm text-[#555]">
                      {[
                        'Konsep, rancangan, dan dokumentasi pengembangan yang merupakan karya orisinal.',
                        'Desain antarmuka pengguna (UI/UX) dan elemen visual yang dibuat secara mandiri.',
                        'Kode sumber, struktur program, modul, dan implementasi perangkat lunak.',
                        'Dokumentasi teknis, panduan penggunaan, dan materi pendukung.',
                        'Konten, ilustrasi, serta elemen digital lainnya sesuai kepemilikan dan lisensinya.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#EFB100] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-[#767676] leading-relaxed pt-2">
                      Perlindungan terhadap setiap komponen mengikuti ketentuan hak cipta dan kekayaan intelektual yang berlaku. Komponen pihak ketiga, termasuk pustaka open-source, tetap tunduk pada lisensi masing-masing.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 3: TUJUAN DAN RUANG LINGKUP PENGGUNAAN */}
              {/* ========================================= */}
              <section id="ruang-lingkup" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    3
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Tujuan dan Ruang Lingkup Penggunaan
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Platform ini dikembangkan untuk mendukung pemanfaatan teknologi informasi dalam pengelolaan administrasi, pencatatan, dokumentasi, pelaporan, dan penyampaian informasi kelembagaan. Penerapannya dapat disesuaikan dengan kebutuhan masing-masing platform:
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4">
                      {/* Platform A */}
                      <div className="p-4 rounded-2xl bg-[#FEF9E7]/50 border border-[#EFB100]/20 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-[#EFB100] text-white flex items-center justify-center">
                          <Landmark size={18} />
                        </div>
                        <h4 className="font-bold text-sm text-[#303030]">
                          a. Aplikasi Menara Masjid
                        </h4>
                        <p className="text-xs text-[#555] leading-relaxed">
                          Mendukung digitalisasi administrasi dan pengelolaan kegiatan masjid serta Unit Pengumpul Zakat (UPZ) Masjid.
                        </p>
                      </div>

                      {/* Platform B */}
                      <div className="p-4 rounded-2xl bg-[#FEF9E7]/50 border border-[#EFB100]/20 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-[#EFB100] text-white flex items-center justify-center">
                          <Building2 size={18} />
                        </div>
                        <h4 className="font-bold text-sm text-[#303030]">
                          b. Aplikasi UPZ Desa
                        </h4>
                        <p className="text-xs text-[#555] leading-relaxed">
                          Mendukung administrasi, pencatatan, pelaporan, dan penyediaan informasi kelembagaan UPZ di tingkat desa.
                        </p>
                      </div>

                      {/* Platform C */}
                      <div className="p-4 rounded-2xl bg-[#FEF9E7]/50 border border-[#EFB100]/20 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-[#EFB100] text-white flex items-center justify-center">
                          <School size={18} />
                        </div>
                        <h4 className="font-bold text-sm text-[#303030]">
                          c. Aplikasi UPZ Sekolah
                        </h4>
                        <p className="text-xs text-[#555] leading-relaxed">
                          Mendukung digitalisasi administrasi dan pengelolaan kegiatan UPZ di lingkungan pendidikan.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[#555] leading-relaxed">
                      Ketiga platform tersebut merupakan bagian dari kesinambungan inovasi digital melalui pendekatan replikasi, adaptasi, dan penyempurnaan teknologi sesuai kebutuhan masing-masing lembaga.
                    </p>
                    <p className="text-xs text-[#767676] leading-relaxed">
                      Setiap lembaga pengguna bertanggung jawab memastikan bahwa pemanfaatan aplikasi sesuai dengan kewenangan, kebijakan internal, dan ketentuan yang berlaku.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 4: KETENTUAN PENGGUNAAN */}
              {/* ========================================= */}
              <section id="ketentuan" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    4
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Ketentuan Penggunaan
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Pengguna wajib menggunakan platform secara bertanggung jawab dan <strong className="text-[#303030]">tidak diperkenankan untuk</strong>:
                    </p>
                    <div className="space-y-2.5">
                      {[
                        'Menggandakan, menjual, mendistribusikan, atau mengomersialkan komponen aplikasi yang dilindungi tanpa izin atau dasar lisensi yang sah.',
                        'Menghapus atau mengubah atribusi pencipta, pemberitahuan hak cipta, maupun informasi lisensi tanpa kewenangan.',
                        'Menggunakan aplikasi untuk penipuan, akses tanpa izin, manipulasi data, atau tindakan yang melanggar hukum.',
                        'Melakukan modifikasi, rekayasa balik, atau pembuatan karya turunan yang melanggar hak pemilik maupun ketentuan lisensi.',
                        'Menggunakan data yang diperoleh melalui platform untuk tujuan yang tidak sah atau di luar kewenangan.',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFAFA] border border-black/5 text-xs sm:text-sm text-[#555]">
                          <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                            &times;
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-[#767676] leading-relaxed pt-2">
                      Penggunaan, modifikasi, pengembangan turunan, dan distribusi lebih lanjut harus mengikuti izin pemegang hak dan ketentuan lisensi yang berlaku.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 5: DATA, PRIVASI, DAN KEAMANAN INFORMASI */}
              {/* ========================================= */}
              <section id="keamanan-data" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    5
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Data, Privasi, dan Keamanan Informasi
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Data yang dimasukkan ke dalam platform, termasuk data kelembagaan, transaksi, laporan, dan data pribadi, harus dikelola sesuai ketentuan perlindungan data serta peraturan perundang-undangan yang berlaku.
                    </p>
                    <p className="text-sm font-semibold text-[#303030]">
                      Pengelola platform dan lembaga pengguna bertanggung jawab sesuai peran dan kewenangannya untuk:
                    </p>
                    <ul className="space-y-2 text-sm text-[#555]">
                      {[
                        'Menjaga kerahasiaan dan keamanan informasi.',
                        'Memastikan penggunaan data memiliki dasar yang sah.',
                        'Membatasi akses berdasarkan kebutuhan dan kewenangan pengguna.',
                        'Menjaga keakuratan pencatatan serta pelaporan.',
                        'Mencegah akses, pengungkapan, atau pemanfaatan data tanpa izin.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#EFB100] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-[#767676] leading-relaxed pt-2">
                      Pengguna wajib menjaga kerahasiaan akun dan kredensial akses. Informasi pribadi maupun data transaksi tidak boleh disebarluaskan tanpa dasar yang sah.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 6: PENGEMBANGAN, PEMBARUAN, DAN KOLABORASI */}
              {/* ========================================= */}
              <section id="kolaborasi" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    6
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Pengembangan, Pembaruan, dan Kolaborasi
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Platform dapat mengalami pembaruan, redesign, reborn, penambahan fitur, perubahan teknologi, dan penyesuaian sistem sesuai kebutuhan operasional.
                    </p>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Pengembangan tersebut dapat melibatkan founder, mahasiswa, pengembang, kontributor, maupun mitra lainnya. Setiap kontribusi perlu diakui secara proporsional, sedangkan kepemilikan atas hasil pengembangan mengikuti perjanjian, kontribusi masing-masing pihak, dan ketentuan hukum yang berlaku.
                    </p>
                    <p className="text-xs text-[#767676] leading-relaxed">
                      Penggunaan kembali kode sumber, desain, modul, atau komponen aplikasi pada platform lain tidak secara otomatis memberikan hak untuk menyalin atau mendistribusikan seluruh komponen tersebut tanpa izin atau dasar lisensi yang sesuai.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 7: BATASAN TANGGUNG JAWAB */}
              {/* ========================================= */}
              <section id="batasan" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    7
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Batasan Tanggung Jawab
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Platform disediakan sebagai sarana pendukung digitalisasi kelembagaan. Upaya dilakukan untuk menjaga keandalan, keamanan, dan ketersediaan sistem, tetapi gangguan teknis, kesalahan perangkat lunak, atau kendala layanan tetap mungkin terjadi.
                    </p>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Pengelola platform tidak serta-merta menggantikan kewenangan lembaga dalam melakukan verifikasi, pengesahan transaksi, validasi laporan, maupun pengambilan keputusan operasional.
                    </p>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Setiap lembaga pengguna tetap bertanggung jawab atas kebenaran data yang dimasukkan, validitas transaksi, pengesahan laporan, dan kepatuhan terhadap prosedur kelembagaan serta ketentuan yang berlaku. Ketentuan ini tidak menghapus tanggung jawab yang tidak dapat dikesampingkan berdasarkan hukum.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 8: LISENSI DAN KOMPONEN PIHAK KETIGA */}
              {/* ========================================= */}
              <section id="lisensi-pihak-ketiga" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    8
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Lisensi dan Komponen Pihak Ketiga
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Sebagian komponen platform dapat menggunakan perangkat lunak, pustaka, layanan, atau sumber daya pihak ketiga. Penggunaannya tunduk pada ketentuan lisensi dan persyaratan layanan masing-masing penyedia.
                    </p>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Tidak ada bagian dalam halaman ini yang dimaksudkan untuk mengalihkan hak milik pihak ketiga kepada founder, pengembang, atau pengguna platform. Permohonan penggunaan ulang, integrasi, modifikasi, maupun distribusi komponen tertentu dapat diajukan kepada pihak yang berwenang sesuai kepemilikan dan lisensinya.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 9: PERUBAHAN KETENTUAN */}
              {/* ========================================= */}
              <section id="perubahan" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    9
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Perubahan Ketentuan
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Ketentuan hak cipta dan penggunaan ini dapat diperbarui apabila terdapat perubahan teknologi, kebijakan pengembangan, kebutuhan kelembagaan, atau peraturan perundang-undangan.
                    </p>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Versi terbaru akan dipublikasikan melalui halaman ini. Apabila terdapat perjanjian khusus yang sah antara pihak terkait, ketentuan dalam perjanjian tersebut berlaku sesuai ruang lingkupnya.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* ========================================= */}
              {/* PASAL 10: KONTAK DAN PERMOHONAN IZIN */}
              {/* ========================================= */}
              <section id="kontak-izin" className="scroll-mt-24 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                    10
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-[#303030]">
                      Kontak dan Permohonan Izin
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      Untuk keperluan berikut:
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#555]">
                      {[
                        'Permohonan izin penggunaan atau pengembangan lebih lanjut.',
                        'Kerja sama teknologi dan integrasi sistem.',
                        'Pelaporan dugaan pelanggaran hak cipta.',
                        'Pertanyaan mengenai atribusi dan lisensi.',
                        'Permintaan informasi terkait pengembangan aplikasi.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EFB100] mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-[#555] leading-relaxed pt-2">
                      Silakan menghubungi pengelola resmi melalui kanal kontak yang tersedia pada website atau aplikasi terkait.
                    </p>
                    <div className="pt-2">
                      <Link to="/kontak" className="btn-primary-green text-xs sm:text-sm inline-flex items-center gap-2">
                        <Mail size={15} />
                        <span>Kunjungi Halaman Kontak</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* ========================================= */}
              {/* INFORMASI PENGEMBANGAN (GOLDEN CARD) */}
              {/* ========================================= */}
              <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FEF9E7] via-white to-[#FEF9E7] border border-[#EFB100]/40 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center shadow-sm">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#303030]">
                      INFORMASI PENGEMBANGAN
                    </h3>
                    <p className="text-xs text-[#C99400] font-semibold">
                      Kolaborasi Akademisi &amp; Mahasiswa
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#303030]">
                  <div className="space-y-2">
                    <div>
                      <span className="text-[#767676] block text-[11px] uppercase tracking-wider">
                        Founder &amp; Inisiator
                      </span>
                      <strong className="text-sm text-[#303030]">
                        M. Romadhona Kusuma, A.Md.Kom., S.Kom., M.Kom.
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#767676] block text-[11px] uppercase tracking-wider">
                        Profesi
                      </span>
                      <span>Dosen Prodi Sistem dan Teknologi Informasi, Universitas Darunnajah</span>
                    </div>
                    <div>
                      <span className="text-[#767676] block text-[11px] uppercase tracking-wider">
                        Platform Ekosistem
                      </span>
                      <span className="font-medium text-[#C99400]">
                        Menara Masjid | UPZ Desa | UPZ Sekolah
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-[#767676] block text-[11px] uppercase tracking-wider">
                        Tim Reborn &amp; Penyempurnaan Aplikasi
                      </span>
                      <ul className="space-y-1 font-medium mt-1">
                        <li>&bull; Akbar Pangestu (Mahasiswa STI Univ. Darunnajah)</li>
                        <li>&bull; Ari Fujiono (Mahasiswa STI Univ. Darunnajah)</li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-[#767676] block text-[11px] uppercase tracking-wider">
                        Tahun &amp; Hak Cipta
                      </span>
                      <span className="font-semibold text-[#303030]">
                        &copy; 2026 — Hak Cipta Dilindungi Sesuai Ketentuan yang Berlaku
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFB100]/20 text-center">
                  <p className="text-xs sm:text-sm text-[#555] italic leading-relaxed">
                    &ldquo;Dikembangkan dengan semangat kolaborasi, inovasi, dan pemanfaatan teknologi untuk mendukung pelayanan masyarakat serta digitalisasi tata kelola kelembagaan yang transparan dan akuntabel.&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/"
                  className="btn-outline-green text-sm inline-flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  <span>Kembali ke Beranda</span>
                </Link>

                <div className="flex items-center gap-4 text-xs text-[#767676]">
                  <Link to="/kebijakan-privasi" className="hover:text-[#C99400] transition-colors">
                    Kebijakan Privasi
                  </Link>
                  <span>&bull;</span>
                  <Link to="/disclaimer" className="hover:text-[#C99400] transition-colors">
                    Disclaimer
                  </Link>
                  <span>&bull;</span>
                  <Link to="/founder" className="hover:text-[#C99400] transition-colors">
                    Founder
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
