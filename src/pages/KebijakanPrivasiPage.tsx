import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Scale,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  Printer,
  Mail,
  Phone,
  HelpCircle,
  FileText,
  ChevronRight,
} from 'lucide-react';

export default function KebijakanPrivasiPage() {
  const handlePrint = () => {
    window.print();
  };

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
          <span className="text-[#303030] font-medium">Kebijakan Privasi</span>
        </div>

        {/* Badge */}
        <div className="badge-green mx-auto mb-6 w-fit">
          <ShieldCheck size={14} className="text-[#7D5A00]" />
          <span>Privasi & Keamanan Data</span>
        </div>

        {/* Title */}
        <h1>
          Kebijakan <span className="text-gradient-green">Privasi</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#555] max-w-2xl mx-auto">
          Komitmen kami dalam melindungi privasi, kerahasiaan, dan keamanan informasi pribadi Anda selama menggunakan layanan dan platform kami.
        </p>

        {/* Quick action bar */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={handlePrint}
            className="btn-outline-green cursor-pointer text-xs sm:text-sm py-2 px-4 shadow-sm inline-flex items-center gap-2"
            title="Cetak Kebijakan Privasi"
          >
            <Printer size={15} />
            <span>Cetak Dokumen</span>
          </button>
          <Link
            to="/kontak"
            className="btn-primary-green text-xs sm:text-sm py-2 px-4 shadow-sm inline-flex items-center gap-2"
          >
            <HelpCircle size={15} />
            <span>Bantuan & Pengaduan</span>
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
              {/* Highlight Card */}
              <div className="bg-white rounded-2xl p-6 border border-black/10 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] flex items-center justify-center text-[#EFB100]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#303030] text-sm">Ringkasan Ketentuan</h3>
                    <p className="text-xs text-[#767676]">Prinsip perlindungan data</p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2 border-t border-gray-100 text-xs text-[#555]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                      1
                    </div>
                    <p><strong className="text-[#303030]">Kerahasiaan Data:</strong> Pengelola wajib melindungi data pribadi dan tidak memberikannya ke pihak lain tanpa izin tertulis.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                      2
                    </div>
                    <p><strong className="text-[#303030]">Pengecualian Hukum:</strong> Kerahasiaan dikecualikan jika ada perintah hukum, putusan pengadilan, atau instansi berwenang.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                      3
                    </div>
                    <p><strong className="text-[#303030]">Batasan Tanggung Jawab:</strong> Pengelola hanya bertanggung jawab atas data yang diberikan langsung ke sistem resmi.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                      4
                    </div>
                    <p><strong className="text-[#303030]">Pembaruan Ketentuan:</strong> Pengelola berhak memperbarui ketentuan tanpa mengurangi hak kerahasiaan data.</p>
                  </div>
                </div>
              </div>

              {/* Contact Mini Card */}
              <div className="bg-[#FEF9E7] rounded-2xl p-6 border border-[#EFB100]/20">
                <h4 className="font-semibold text-[#303030] text-sm mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#C99400]" />
                  Punya Pertanyaan Privasi?
                </h4>
                <p className="text-xs text-[#555] mb-4 leading-relaxed">
                  Jika Anda memiliki pertanyaan mengenai penggunaan atau keamanan data Anda, silakan hubungi tim BAZNAS:
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
                      Dokumen Resmi Kebijakan
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#303030] mt-1">
                      Kebijakan Privasi Pengguna
                    </h2>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block px-3 py-1 bg-[#FEF9E7] text-[#C99400] text-xs font-semibold rounded-full">
                      Berlaku &amp; Mengikat
                    </span>
                    <p className="text-[11px] text-[#767676] mt-1">
                      Platform Layanan BAZNAS
                    </p>
                  </div>
                </div>
              </div>

              {/* Intro / Pembukaan */}
              <div className="space-y-4 mb-8 text-[#555] leading-relaxed text-sm sm:text-base">
                <div className="p-5 rounded-2xl bg-[#FEF9E7]/60 border border-[#EFB100]/30 text-[#303030]">
                  <p className="font-medium leading-relaxed">
                    Terima kasih telah mengakses aplikasi Menara Masjid yaitu website{' '}
                    <a
                      href="https://www.menara.baznas.go.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C99400] underline font-semibold hover:text-[#EFB100]"
                    >
                      www.menara.baznas.go.id
                    </a>
                    . Kami sangat menghormati kenyamanan privasi Anda dan melindungi informasi pribadi Anda sebaik-baiknya.
                  </p>
                </div>

                <p>
                  Ketentuan-ketentuan yang ada dalam halaman ini mengatur hal-hal menyangkut data-data para Pengguna Situs yang diberikan oleh para Pengguna Situs kepada Pengelola Situs dalam rangka pemanfaatan fasilitas, fitur, jasa, dan/atau layanan yang ditawarkan oleh Pengelola Situs melalui Situs{' '}
                  <strong className="text-[#303030]">www.menara.baznas.go.id</strong>.
                </p>

                <p>
                  Ketentuan-ketentuan menyangkut data mengikat seluruh Pengguna Situs tanpa terkecuali untuk tunduk dan patuh atas ketentuan-ketentuan yang telah ditetapkan Pengelola Situs.
                </p>

                <p className="font-semibold text-[#303030] pt-2">
                  Berikut ini ketentuan-ketentuan menyangkut data tersebut:
                </p>
              </div>

              {/* Poin-poin Kebijakan */}
              <div className="space-y-6">
                {/* Poin 1 */}
                <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-black/5 hover:border-[#EFB100]/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                      1
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-[#303030]">
                        Kewajiban Pengelola Atas Data Pengguna
                      </h3>
                      <p className="text-sm text-[#555] leading-relaxed">
                        Atas data-data yang diberikan oleh para Pengguna Situs kepada Pengelola Situs sebagai pemenuhan syarat atas pemanfaatan fasilitas, fitur, jasa, dan/atau layanan yang ditawarkan oleh Pengelola Situs, maka Pengelola Situs berkewajiban untuk:
                      </p>

                      <div className="space-y-3 pt-1">
                        {/* 1.a */}
                        <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                          <div className="w-6 h-6 rounded-full bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                            a
                          </div>
                          <div>
                            <span className="font-semibold text-[#303030] text-sm block mb-1">
                              Menjaga Kerahasiaan Data Pengguna
                            </span>
                            <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                              Menjaga kerahasiaan data-data para Pengguna yang tidak dapat ditampilkan dalam Situs dan/atau diberikan kepada pihak-pihak tertentu atas penggunaan jasa atau layanan Situs selama tidak ada perjanjian tertulis terlebih dahulu kepada Pengguna;
                            </p>
                          </div>
                        </div>

                        {/* 1.b */}
                        <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                          <div className="w-6 h-6 rounded-full bg-[#FEF9E7] text-[#C99400] flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                            b
                          </div>
                          <div>
                            <span className="font-semibold text-[#303030] text-sm block mb-1">
                              Pengecualian Berdasarkan Ketentuan Hukum
                            </span>
                            <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                              Kerahasiaan data Pengguna yang wajib dijaga oleh Pengelola Situs menjadi tidak berlaku apabila Pengelola Situs dipaksa oleh ketentuan hukum yang berlaku, perintah pengadilan, dan/atau perintah dari aparat/instansi yang berwenang, untuk membuka data-data milik Pengguna tersebut.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Poin 2 */}
                <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-black/5 hover:border-[#EFB100]/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                      2
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-[#303030]">
                        Batasan Tanggung Jawab Pengelola Situs
                      </h3>
                      <p className="text-sm text-[#555] leading-relaxed">
                        Pengelola Situs hanya bertanggung jawab atas data yang diberikan Pengguna Situs kepada Pengelola Situs sebagaimana yang telah ditentukan pada ketentuan sebelumnya.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Poin 3 */}
                <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-black/5 hover:border-[#EFB100]/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                      3
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-[#303030]">
                        Pertukaran Data Antar Pengguna Situs
                      </h3>
                      <p className="text-sm text-[#555] leading-relaxed">
                        Pengelola Situs tidak bertanggung jawab atas pemberian atau pertukaran data yang dilakukan sendiri antar Pengguna Situs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Poin 4 */}
                <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-black/5 hover:border-[#EFB100]/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EFB100] text-white flex items-center justify-center flex-shrink-0 font-bold text-base shadow-sm">
                      4
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-[#303030]">
                        Hak Perubahan Ketentuan
                      </h3>
                      <p className="text-sm text-[#555] leading-relaxed">
                        Pengelola berhak untuk mengubah ketentuan menyangkut data-data para Pengguna Situs tanpa pemberitahuan terlebih dahulu dengan tanpa mengabaikan hak para Pengguna Situs untuk dijaga kerahasiaan datanya sebagaimana yang telah ditentukan dalam butir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Back Button */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/"
                  className="btn-outline-green text-sm inline-flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  <span>Kembali ke Beranda</span>
                </Link>

                <div className="flex items-center gap-2 text-xs text-[#767676]">
                  <Scale size={14} className="text-[#C99400]" />
                  <span>Badan Amil Zakat Nasional (BAZNAS) RI</span>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
