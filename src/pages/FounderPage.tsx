import { Link } from 'react-router-dom';
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Quote,
  Building2,
  Code2,
  Heart,
  ArrowLeft,
  ChevronRight,
  UserCheck,
  CheckCircle2,
  Award,
  Layers,
  Lightbulb,
  Users2,
  BookOpen,
} from 'lucide-react';

export default function FounderPage() {
  const rekamJejak = [
    {
      title: 'Praktisi IT dan Amil BAZNAS Republik Indonesia',
      desc: 'Berpengalaman dalam pengembangan teknologi informasi untuk mendukung digitalisasi tata kelola zakat, infak, dan sedekah (ZIS) nasional.',
      badge: 'Sejak 2017',
      icon: <Building2 size={20} className="text-[#EFB100]" />,
    },
    {
      title: 'Founder dan Inisiator',
      desc: 'Penggagas dan arsitek utama platform digital Aplikasi Menara Masjid dan Aplikasi UPZ Desa untuk tata kelola dana umat yang inklusif.',
      badge: 'Founder',
      icon: <Layers size={20} className="text-[#EFB100]" />,
    },
    {
      title: 'Pengurus Dewan Masjid Indonesia (DMI) Kota Bekasi',
      desc: 'Ketua Bidang Pengembangan Sarana, aktif mendorong optimalisasi fasilitas dan sarana kemakmuran kemasjidan.',
      badge: 'Ketua Bidang Sarana',
      icon: <Award size={20} className="text-[#EFB100]" />,
    },
    {
      title: 'Dosen Program Studi Sistem dan Teknologi Informasi',
      desc: 'Tenaga pendidik akademisi di Universitas Darunnajah, mendidik dan menginspirasi generasi muda dalam inovasi teknologi.',
      badge: 'Akademisi',
      icon: <BookOpen size={20} className="text-[#EFB100]" />,
    },
  ];

  const riwayatPendidikan = [
    {
      jenjang: 'S-3',
      jurusan: 'Informatika',
      status: 'Kandidat Doktor (Sedang Ditempuh)',
      isCurrent: true,
      desc: 'Melanjutkan riset dan pengembangan keilmuan tingkat doktoral dalam bidang informatika.',
    },
    {
      jenjang: 'S-2',
      jurusan: 'Ilmu Komputer',
      status: 'Magister Komputer (M.Kom.)',
      isCurrent: false,
      desc: 'Spesialisasi riset komputasi dan implementasi teknologi sistem skala lanjut.',
    },
    {
      jenjang: 'S-1',
      jurusan: 'Sistem Informasi',
      status: 'Sarjana Komputer (S.Kom.)',
      isCurrent: false,
      desc: 'Fokus pada tata kelola perangkat lunak, arsitektur data, dan perancangan sistem informasi.',
    },
    {
      jenjang: 'D-3',
      jurusan: 'Manajemen Informatika',
      status: 'Ahli Madya Komputer (A.Md.Kom.)',
      isCurrent: false,
      desc: 'Pondasi keahlian teknis pemrograman, database engineering, dan dasar rancang bangun software.',
    },
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
          <Link to="/tentang" className="hover:text-[#C99400] transition-colors">
            Tentang Kami
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#303030] font-medium">Founder</span>
        </div>

        {/* Badge */}
        <div className="badge-green mx-auto mb-6 w-fit">
          <UserCheck size={14} className="text-[#7D5A00]" />
          <span>Profil Founder &amp; Inovator</span>
        </div>

        {/* Title */}
        <h1>
          Profil Founder &amp; <span className="text-gradient-green">Inovator</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#555] max-w-2xl mx-auto">
          Mengenal sosok di balik lahirnya inisiatif digitalisasi pengelolaan dana umat hingga tingkat akar rumput.
        </p>
      </section>

      {/* ============================== */}
      {/* MAIN CONTENT SECTION */}
      {/* ============================== */}
      <section className="page-section pb-24">
        <div className="page-section-inner space-y-12">
          {/* ========================================= */}
          {/* 1. BIODATA & PROFIL FOUNDER UTAMA */}
          {/* ========================================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/10 shadow-sm relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FEF9E7] to-transparent rounded-full -mr-32 -mt-32 opacity-70 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Profile Avatar & Badge */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  {/* Outer Ring */}
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-tr from-[#EFB100] via-[#F5CC4D] to-[#FEF9E7] shadow-lg">
                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 border border-black/5 shadow-inner">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FEF9E7] flex items-center justify-center text-[#EFB100] mb-2 shadow-sm">
                        <UserCheck size={48} className="text-[#C99400]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#C99400] uppercase tracking-wider">
                        Founder &amp; Inovator
                      </span>
                      <span className="text-xs font-semibold text-[#303030]">
                        UPZ Desa &amp; Menara Masjid
                      </span>
                    </div>
                  </div>

                  {/* Floating Certified Icon */}
                  <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#EFB100] text-white flex items-center justify-center shadow-md border-2 border-white">
                    <Sparkles size={20} />
                  </div>
                </div>

                {/* Sub-badge Card */}
                <div className="w-full max-w-xs bg-[#FEF9E7] rounded-2xl p-4 border border-[#EFB100]/25 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <Layers size={18} className="text-[#C99400]" />
                    <span className="font-semibold text-xs text-[#303030]">
                      Inisiator Ekosistem Digital
                    </span>
                  </div>
                  <p className="text-xs text-[#7D5A00] font-medium">
                    Aplikasi Menara Masjid &bull; Aplikasi UPZ Desa
                  </p>
                </div>
              </div>

              {/* Founder Information & Statement */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF9E7] text-[#C99400] text-xs font-semibold mb-3">
                    <Award size={14} />
                    <span>Founder &amp; Inovator</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#303030] leading-tight">
                    Muhammad Romadhona Kusuma,{' '}
                    <span className="text-lg sm:text-xl font-medium text-[#767676] block sm:inline">
                      A.Md.Kom., S.Kom., M.Kom.
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#555] mt-3 leading-relaxed">
                    Muhammad Romadhona Kusuma merupakan praktisi teknologi informasi, akademisi, dan pegiat filantropi Islam yang berdedikasi dalam menghadirkan solusi digital berdampak luas bagi masyarakat. Berpegang pada prinsip <em>“sebaik-baiknya manusia adalah yang paling bermanfaat untuk orang lain”</em>, beliau berkomitmen mengintegrasikan inovasi teknologi informasi dengan tata kelola filantropi Islam untuk mendukung kemaslahatan umat, khususnya di tingkat akar rumput (<em>grassroots</em>).
                  </p>
                </div>

                {/* Hadits Quote Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FEF9E7] to-[#FFFDF5] border border-[#EFB100]/30 relative">
                  <Quote size={28} className="text-[#EFB100]/40 absolute top-4 right-4" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C99400] mb-2 flex items-center gap-2">
                    <Heart size={14} />
                    <span>Prinsip &amp; Landasan Hidup</span>
                  </p>
                  <blockquote className="text-base sm:text-lg font-medium text-[#303030] italic leading-relaxed">
                    &ldquo;Sebaik-baiknya manusia adalah yang paling bermanfaat untuk orang lain.&rdquo;
                  </blockquote>
                </div>

                {/* Key Summary Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="bg-[#FAFAFA] p-4 rounded-xl border border-gray-100 text-center">
                    <span className="text-xl sm:text-2xl font-bold text-[#C99400] block">2017</span>
                    <span className="text-[11px] text-[#767676]">Amil BAZNAS RI</span>
                  </div>
                  <div className="bg-[#FAFAFA] p-4 rounded-xl border border-gray-100 text-center">
                    <span className="text-xl sm:text-2xl font-bold text-[#C99400] block">Inisiator</span>
                    <span className="text-[11px] text-[#767676]">UPZ Desa &amp; Masjid</span>
                  </div>
                  <div className="bg-[#FAFAFA] p-4 rounded-xl border border-gray-100 text-center">
                    <span className="text-xl sm:text-2xl font-bold text-[#C99400] block">S-3</span>
                    <span className="text-[11px] text-[#767676]">Kandidat Doktor</span>
                  </div>
                  <div className="bg-[#FAFAFA] p-4 rounded-xl border border-gray-100 text-center">
                    <span className="text-xl sm:text-2xl font-bold text-[#C99400] block">DMI</span>
                    <span className="text-[11px] text-[#767676]">Pengurus Kota Bekasi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* 2. LATAR BELAKANG DAN INSPIRASI UPZ DESA */}
          {/* ========================================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/10 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C99400]">
                Perjalanan &amp; Inspirasi
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#303030] mt-1">
                Latar Belakang dan Inspirasi Lahirnya UPZ Desa
              </h3>
            </div>

            <div className="space-y-6 text-[#555] leading-relaxed text-sm sm:text-base">
              {/* Paragraf 1: Pengalaman Amil BAZNAS */}
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 hover:border-[#EFB100]/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-base text-[#303030]">
                      Pengalaman di BAZNAS RI &amp; Dorongan Digitalisasi
                    </h4>
                    <p>
                      Sebagai amil di Badan Amil Zakat Nasional (BAZNAS) Republik Indonesia sejak 2017, Romadhona memiliki pengalaman dalam pengembangan teknologi informasi untuk mendukung digitalisasi tata kelola zakat, infak, dan sedekah (ZIS). Pengalaman tersebut mendorongnya untuk terus menghadirkan inovasi digital yang dapat dimanfaatkan oleh lembaga pengelola dana umat hingga ke tingkat desa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraf 2: Inisiatif Aplikasi Menara Masjid */}
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 hover:border-[#EFB100]/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-base text-[#303030]">
                      Inisiatif Aplikasi Menara Masjid yang Inklusif
                    </h4>
                    <p>
                      Salah satu inisiatif yang dikembangkannya adalah <em>Aplikasi Menara Masjid</em>, sebuah platform digital yang dirancang untuk membantu masjid dan Unit Pengumpul Zakat (UPZ) Masjid dalam mengelola administrasi, pencatatan, pelaporan, dan transparansi kegiatan pengelolaan ZIS. Dengan mengusung semangat pemanfaatan teknologi yang inklusif, platform ini dikembangkan agar dapat dimanfaatkan tanpa membebani penggunanya dengan biaya penggunaan aplikasi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraf 3: Inisiasi Aplikasi UPZ Desa */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FEF9E7]/80 to-white border border-[#EFB100]/40">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Lightbulb size={20} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold text-base text-[#303030]">
                        Inisiasi Aplikasi UPZ Desa
                      </h4>
                      <span className="px-2.5 py-0.5 bg-[#FEF9E7] text-[#C99400] text-xs font-semibold rounded-full border border-[#EFB100]/30">
                        Pemberdayaan Tingkat Desa
                      </span>
                    </div>
                    <p>
                      Berangkat dari pengalaman tersebut, Romadhona menginisiasi <em>Aplikasi UPZ Desa</em>, sebuah platform digital yang mengadaptasi pendekatan digitalisasi Menara Masjid untuk mendukung pengelolaan zakat di tingkat desa. Aplikasi ini dirancang untuk menyediakan sistem manajemen, pencatatan, pelaporan, serta website mandiri bagi UPZ Desa agar pengelolaan zakat dapat berlangsung secara lebih profesional, transparan, dan akuntabel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* 3. KOLABORASI DAN PENGEMBANGAN TEKNOLOGI */}
          {/* ========================================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/10 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C99400]">
                Pengembangan Berkelanjutan
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#303030] mt-1">
                Kolaborasi dan Pengembangan Teknologi
              </h3>
            </div>

            <div className="space-y-6 text-[#555] leading-relaxed text-sm sm:text-base">
              {/* Paragraf 1: Redesign Reborn */}
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 hover:border-[#EFB100]/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Code2 size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-base text-[#303030]">
                      Proses Redesign dan Pembaruan Fondasi (Reborn)
                    </h4>
                    <p>
                      Dalam perjalanan pengembangannya, Aplikasi UPZ Desa memasuki fase pembaruan melalui proses redesign dan pengembangan ulang (<em>reborn</em>) dengan memanfaatkan teknologi dan bahasa pemrograman yang lebih mutakhir. Proses ini bertujuan untuk memperbarui fondasi aplikasi, meningkatkan kualitas implementasi, serta membuka peluang pengembangan fitur yang lebih relevan dengan kebutuhan pengelolaan zakat di tingkat desa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraf 2: Keterlibatan Akbar Pangestu dan Arif Fujiono */}
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 hover:border-[#EFB100]/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users2 size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-base text-[#303030]">
                      Sinergi Praktisi, Akademisi, dan Mahasiswa
                    </h4>
                    <p>
                      Pengembangan tersebut turut melibatkan <strong>Akbar Pangestu dan Arif Fujiono</strong>, mahasiswa Program Studi Sistem dan Teknologi Informasi Universitas Darunnajah. Keterlibatan keduanya mencerminkan kolaborasi antara praktisi teknologi, akademisi, dan mahasiswa dalam menghasilkan inovasi digital yang memiliki nilai manfaat sosial.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraf 3: Ruang Pembelajaran & Kontribusi Nyata */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FEF9E7]/80 to-white border border-[#EFB100]/40">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <GraduationCap size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-base text-[#303030]">
                      Ruang Pembelajaran dan Kontribusi Generasi Muda
                    </h4>
                    <p>
                      Melalui kolaborasi ini, UPZ Desa tidak hanya menjadi sebuah inisiatif digitalisasi pengelolaan zakat, tetapi juga ruang pembelajaran dan kontribusi nyata generasi muda dalam mengembangkan teknologi untuk pemberdayaan masyarakat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* 4. KOMITMEN DAN REKAM JEJAK + PENDIDIKAN */}
          {/* ========================================= */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Rekam Jejak */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/10 shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#EFB100] flex items-center justify-center flex-shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#303030]">Komitmen dan Rekam Jejak</h3>
                  <p className="text-xs text-[#767676]">Pengalaman profesional, organisasi, dan dedikasi</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {rekamJejak.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAFAFA] border border-black/5 hover:border-[#EFB100]/30 transition-all group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 group-hover:border-[#EFB100] flex items-center justify-center flex-shrink-0 shadow-2xs transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-semibold text-sm text-[#303030]">
                            {item.title}
                          </h4>
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#FEF9E7] text-[#C99400] border border-[#EFB100]/20">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#555] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Riwayat Pendidikan */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/10 shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#EFB100] flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#303030]">Riwayat Pendidikan</h3>
                  <p className="text-xs text-[#767676]">Kualifikasi akademis formal di bidang teknologi informasi</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {riwayatPendidikan.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all ${
                      edu.isCurrent
                        ? 'bg-[#FEF9E7]/60 border-[#EFB100]/40'
                        : 'bg-[#FAFAFA] border-black/5 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-2xs ${
                          edu.isCurrent
                            ? 'bg-[#EFB100] text-white shadow-sm'
                            : 'bg-white border border-gray-200 text-[#303030]'
                        }`}
                      >
                        {edu.jenjang}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-semibold text-sm sm:text-base text-[#303030]">
                            {edu.jurusan}
                          </h4>
                          {edu.isCurrent && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EFB100] text-white">
                              Aktif / Riset
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-medium text-[#C99400]">
                          {edu.status}
                        </p>
                        <p className="text-xs text-[#555] leading-relaxed pt-1">
                          {edu.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-[#767676]">
                <CheckCircle2 size={15} className="text-[#EFB100]" />
                <span>Kualifikasi Pendidikan: Informatika &bull; Ilmu Komputer &bull; Sistem Informasi</span>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* 5. VISI INOVASI */}
          {/* ========================================= */}
          <div className="bg-gradient-to-r from-[#FEF9E7] via-white to-[#FEF9E7] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#EFB100]/30 shadow-sm relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#C99400] text-xs font-semibold shadow-2xs border border-[#EFB100]/20 mx-auto">
                <Lightbulb size={14} />
                <span>Visi Inovasi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#303030]">
                Teknologi untuk Kemaslahatan Umat
              </h3>
              <p className="text-base sm:text-lg text-[#555] leading-relaxed max-w-3xl mx-auto pt-2">
                Bagi Romadhona, teknologi bukan sekadar perangkat dan sistem, melainkan sarana untuk memperluas manfaat, meningkatkan transparansi, serta memperkuat kepercayaan masyarakat terhadap pengelolaan dana umat. Melalui Menara Masjid dan UPZ Desa, ia berupaya mendorong transformasi digital filantropi Islam agar semakin mudah diakses, inklusif, dan berkelanjutan hingga ke tingkat akar rumput.
              </p>
            </div>
          </div>

          {/* ========================================= */}
          {/* 6. FOOTER NAVIGATION CARD */}
          {/* ========================================= */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                to="/tentang"
                className="btn-outline-green text-sm inline-flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                <span>Tentang Kami</span>
              </Link>
              <Link
                to="/"
                className="btn-outline-green text-sm inline-flex items-center gap-2"
              >
                <span>Beranda</span>
              </Link>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#767676]">
              <Link to="/kebijakan-privasi" className="hover:text-[#C99400] transition-colors">
                Kebijakan Privasi
              </Link>
              <span>&bull;</span>
              <Link to="/disclaimer" className="hover:text-[#C99400] transition-colors">
                Disclaimer
              </Link>
              <span>&bull;</span>
              <span>UPZ Desa BAZNAS RI</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
