import { Link } from 'react-router-dom';
import {
  AlertCircle,
  FileText,
  Target,
  UserCheck,
  Server,
  ExternalLink,
  RefreshCw,
  Award,
  Scale,
  ArrowLeft,
  Printer,
  Mail,
  Phone,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export default function DisclaimerPage() {
  const handlePrint = () => {
    window.print();
  };

  const sections = [
    {
      num: 1,
      title: 'Pengenalan',
      icon: <FileText size={18} className="text-[#EFB100]" />,
      desc: 'Halaman ini memuat disclaimer yang mengatur penggunaan aplikasi berbasis website yang disediakan oleh kami. Dengan mengakses dan menggunakan aplikasi ini, Anda dianggap telah membaca, memahami, dan menyetujui semua ketentuan dalam disclaimer ini. Jika Anda tidak setuju dengan ketentuan ini, diharapkan untuk tidak melanjutkan penggunaan aplikasi ini.',
    },
    {
      num: 2,
      title: 'Tujuan Aplikasi',
      icon: <Target size={18} className="text-[#EFB100]" />,
      desc: 'Aplikasi ini disediakan untuk memberikan informasi, layanan, atau fungsi khusus kepada pengguna. Meskipun kami berupaya menyajikan informasi yang akurat dan up-to-date, kami tidak memberikan jaminan atas keakuratan, kelengkapan, atau keandalan informasi yang terkandung dalam aplikasi ini. Pengguna bertanggung jawab sepenuhnya atas penggunaan informasi yang ditemukan dalam aplikasi ini.',
    },
    {
      num: 3,
      title: 'Tanggung Jawab Pengguna',
      icon: <UserCheck size={18} className="text-[#EFB100]" />,
      desc: 'Penggunaan aplikasi ini sepenuhnya menjadi tanggung jawab pengguna. Kami tidak bertanggung jawab atas kerugian, kerusakan, atau tuntutan yang timbul dari penggunaan aplikasi ini, termasuk namun tidak terbatas pada kesalahan, kehilangan data, gangguan, atau kerugian finansial yang mungkin timbul.',
    },
    {
      num: 4,
      title: 'Ketersediaan Aplikasi',
      icon: <Server size={18} className="text-[#EFB100]" />,
      desc: 'Kami berupaya menjaga ketersediaan aplikasi ini sebaik mungkin. Namun, kami tidak memberikan jaminan bahwa aplikasi ini akan selalu tersedia tanpa gangguan atau kesalahan. Kami berhak untuk melakukan pemeliharaan, perbaikan, atau penghentian sementara atau permanen pada aplikasi ini tanpa pemberitahuan sebelumnya.',
    },
    {
      num: 5,
      title: 'Tautan Eksternal',
      icon: <ExternalLink size={18} className="text-[#EFB100]" />,
      desc: 'Aplikasi ini mungkin menyediakan tautan ke situs web eksternal yang tidak dikendalikan atau dioperasikan oleh kami. Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik lainnya yang ada di situs web eksternal tersebut. Penggunaan tautan eksternal dilakukan atas risiko pengguna sendiri.',
    },
    {
      num: 6,
      title: 'Perubahan Ketentuan',
      icon: <RefreshCw size={18} className="text-[#EFB100]" />,
      desc: 'Kami berhak untuk mengubah atau memperbarui ketentuan dalam disclaimer ini tanpa pemberitahuan sebelumnya. Disarankan bagi pengguna untuk secara berkala memeriksa halaman ini guna memahami ketentuan terbaru yang berlaku.',
    },
    {
      num: 7,
      title: 'Hak Kekayaan Intelektual',
      icon: <Award size={18} className="text-[#EFB100]" />,
      desc: 'Aplikasi ini dilindungi oleh hak kekayaan intelektual, termasuk namun tidak terbatas pada hak cipta, merek dagang, atau paten. Pengguna tidak diizinkan untuk menggunakan, mendistribusikan, atau memodifikasi konten aplikasi ini tanpa izin tertulis dari pemilik hak.',
    },
    {
      num: 8,
      title: 'Hukum yang Berlaku',
      icon: <Scale size={18} className="text-[#EFB100]" />,
      desc: 'Penggunaan aplikasi ini tunduk pada hukum yang berlaku di wilayah yang relevan. Segala sengketa atau perselisihan yang timbul terkait dengan penggunaan aplikasi ini akan diselesaikan secara damai dan bila perlu dapat dirujuk ke yurisdiksi yang berwenang.',
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
          <span className="text-[#303030] font-medium">Disclaimer</span>
        </div>

        {/* Badge */}
        <div className="badge-green mx-auto mb-6 w-fit">
          <AlertCircle size={14} className="text-[#7D5A00]" />
          <span>Batasan Tanggung Jawab &amp; Ketentuan</span>
        </div>

        {/* Title */}
        <h1>
          Disclaimer <span className="text-gradient-green">Aplikasi</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#555] max-w-2xl mx-auto">
          Pernyataan resmi mengenai batas tanggung jawab, pemanfaatan informasi, ketersediaan sistem, dan hak kekayaan intelektual pada aplikasi dan layanan kami.
        </p>

        {/* Quick action bar */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={handlePrint}
            className="btn-outline-green cursor-pointer text-xs sm:text-sm py-2 px-4 shadow-sm inline-flex items-center gap-2"
            title="Cetak Dokumen Disclaimer"
          >
            <Printer size={15} />
            <span>Cetak Dokumen</span>
          </button>
          <Link
            to="/kebijakan-privasi"
            className="btn-outline-green text-xs sm:text-sm py-2 px-4 shadow-sm inline-flex items-center gap-2"
          >
            <ShieldCheck size={15} />
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
            {/* Sidebar Highlights (Sticky on desktop) */}
            <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
              {/* Quick Navigation Card */}
              <div className="bg-white rounded-2xl p-6 border border-black/10 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] flex items-center justify-center text-[#EFB100]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#303030] text-sm">Daftar Poin Disclaimer</h3>
                    <p className="text-xs text-[#767676]">8 Ketentuan penggunaan aplikasi</p>
                  </div>
                </div>

                <nav className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                  {sections.map((item) => (
                    <a
                      key={item.num}
                      href={`#poin-${item.num}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-[#FEF9E7] text-[#555] hover:text-[#303030] transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#FAFAFA] border border-gray-200 group-hover:border-[#EFB100] group-hover:bg-[#EFB100] group-hover:text-white flex items-center justify-center text-[10px] font-bold text-[#767676] transition-colors">
                          {item.num}
                        </span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <ChevronRight size={12} className="text-gray-300 group-hover:text-[#EFB100] transition-colors" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Legal Notice Note Card */}
              <div className="bg-[#FEF9E7] rounded-2xl p-6 border border-[#EFB100]/20">
                <h4 className="font-semibold text-[#303030] text-sm mb-2 flex items-center gap-2">
                  <AlertCircle size={18} className="text-[#C99400]" />
                  Catatan Penting
                </h4>
                <p className="text-xs text-[#555] mb-4 leading-relaxed">
                  Disclaimer ini bersifat informatif dan tidak menggantikan nasihat hukum yang profesional. Untuk pertanyaan lebih lanjut, silakan hubungi saluran resmi BAZNAS:
                </p>
                <div className="space-y-2 text-xs text-[#303030]">
                  <a
                    href="mailto:baznas@baznas.go.id"
                    className="flex items-center gap-2 text-[#303030] hover:text-[#C99400] transition-colors"
                  >
                    <Mail size={14} className="text-[#C99400]" />
                    <span>baznas@baznas.go.id</span>
                  </a>
                  <a
                    href="tel:081188821818"
                    className="flex items-center gap-2 text-[#303030] hover:text-[#C99400] transition-colors"
                  >
                    <Phone size={14} className="text-[#C99400]" />
                    <span>0811 8882 1818</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/10 shadow-sm print:shadow-none print:border-none print:p-0">
              {/* Document Header */}
              <div className="border-b border-gray-100 pb-8 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#C99400]">
                      Ketentuan &amp; Batasan Tanggung Jawab
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#303030] mt-1">
                      Disclaimer Aplikasi
                    </h2>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block px-3 py-1 bg-[#FEF9E7] text-[#C99400] text-xs font-semibold rounded-full">
                      Berlaku untuk Semua Pengguna
                    </span>
                    <p className="text-[11px] text-[#767676] mt-1">
                      Platform Layanan BAZNAS
                    </p>
                  </div>
                </div>
              </div>

              {/* Poin-poin Disclaimer */}
              <div className="space-y-6">
                {sections.map((item) => (
                  <div
                    key={item.num}
                    id={`poin-${item.num}`}
                    className="bg-[#FAFAFA] rounded-2xl p-6 border border-black/5 hover:border-[#EFB100]/40 transition-colors scroll-mt-24"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                        {item.num}
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-semibold text-[#303030]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[#555] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Informative Note Box at bottom */}
              <div className="mt-8 p-6 rounded-2xl bg-[#FEF9E7]/70 border border-[#EFB100]/30 text-[#303030]">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-[#C99400] flex-shrink-0 mt-0.5" />
                  <div className="space-y-2 text-sm leading-relaxed">
                    <p>
                      Mohon dicatat bahwa disclaimer ini hanya bersifat informatif dan tidak menggantikan nasihat hukum yang profesional. Jika Anda memiliki pertanyaan atau kekhawatiran terkait penggunaan aplikasi ini, disarankan untuk mengonsultasikan dengan ahli hukum sebelum mengambil tindakan.
                    </p>
                    <p className="font-semibold text-[#C99400]">
                      Terima kasih atas pengertian dan kerjasamanya.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/"
                  className="btn-outline-green text-sm inline-flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  <span>Kembali ke Beranda</span>
                </Link>

                <div className="flex items-center gap-4 text-xs text-[#767676]">
                  <Link
                    to="/kebijakan-privasi"
                    className="hover:text-[#C99400] transition-colors underline"
                  >
                    Kebijakan Privasi
                  </Link>
                  <span>&bull;</span>
                  <div className="flex items-center gap-1.5">
                    <Scale size={14} className="text-[#C99400]" />
                    <span>BAZNAS RI</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
