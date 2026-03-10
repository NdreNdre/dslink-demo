import { useState } from 'react'
import useReveal from '../../../../../../shared/hooks/useReveal';
import { FaWhatsapp } from "react-icons/fa";

const banks = [
  { nama: 'BCA', url:'https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png', style:'w-10 h-8'},
  { nama: 'BNI', url:'https://jasalogocepat.com/wp-content/uploads/2023/12/Logo-Bank-BNI-PNG.png', style:'w-10 h-3'},
  { nama: 'Kredivo', url:'https://iconlogovector.com/uploads/images/2024/03/lg-65e38a973fa47-Kredivo.webp', style:'w-10 h-8'},
]

const features = [
  { title: 'DP Rendah', desc: 'Mulai dari 10% saja' },
  { title: 'Tenor Fleksibel', desc: '6, 12, atau 24 bulan' },
  { title: 'Proses Cepat', desc: 'Approval 1–2 hari kerja' },
  { title: 'Dibantu Tim Kami', desc: 'Pengajuan sampai approval' },
]

const ctaPoints = [
  { text: <>Survei lokasi <strong className="text-white">gratis tanpa syarat</strong></> },
  { text: <>Penawaran <strong className="text-white">transparan, tanpa biaya tersembunyi</strong></> },
  { text: <>Cicilan via <strong className="text-white">BRI, BCA, Mandiri, Home Credit, Kredivo</strong></> },
  { text: <>Respon cepat <strong className="text-white">dalam hitungan menit</strong></> },
]

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
)

export default function CicilanSection() {

  const [activeBank, setActiveBank] = useState('BRI')

  const leftRef  = useReveal()
  const rightRef = useReveal()

  const handleWhatsapp = () => {
        const phone = "628139120388";
        // const phone = "6281391200388";
        const message = `Halo DS Link, saya [nama] dari [lokasi]. [pesan]. No HP: [telepon]`
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

  return (
    <section className="bg-[#F5F8FF] py-16 md:py-24 px-6 md:px-16">

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT */}
        <div ref={leftRef} className="reveal">

          <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold tracking-[2px] uppercase mb-3">
            <span className="w-6 h-px bg-blue-600" />
            Pembayaran Fleksibel
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold text-navy leading-snug">
            Simulasi<br className="hidden md:block"/>Cicilan Ringan
          </h2>

          <p className="text-sm text-muted font-light mt-2.5 leading-relaxed">
            Proses cepat dibantu penuh oleh tim DS Link hingga approval
          </p>


          {/* BANK PILLS */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-7">

            {banks.map((bank) => (

              <button
                key={bank.nama}
                onClick={() => setActiveBank(bank.nama)}
                className={`px-4 py-2 flex items-center space-x-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeBank === bank.nama
                    ? 'bg-blue-100 text-black border-blue-600'
                    : 'bg-white text-navy2 border-blue-200 hover:border-blue-400'
                }`}
              >
                <img src={bank.url} className={bank.style} alt="" />
              </button>

            ))}

          </div>


          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 md:mt-7">

            {features.map((f) => (

              <div
                key={f.title}
                className="p-4 md:p-5 bg-white rounded-2xl border border-blue-100"
              >

                <div className="text-blue-600 text-base mb-2">✦</div>

                <h5 className="text-sm font-semibold text-navy">
                  {f.title}
                </h5>

                <p className="text-xs text-muted mt-1 font-light">
                  {f.desc}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* RIGHT CTA */}
        <div
          ref={rightRef}
          className="reveal rounded-3xl p-6 md:p-10 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0D2148 0%, #071230 100%)' }}
        >

          <div
            className="absolute -top-10 -right-10 w-52 h-52 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,.25), transparent 70%)' }}
          />

          <p className="text-xs font-light text-white/50 tracking-widest uppercase mb-1.5">
            Dapatkan Penawaran Terbaik
          </p>

          <h3 className="text-xl md:text-3xl font-bold text-blue-300 leading-snug mb-2">
            Harga Disesuaikan<br/>dengan Kebutuhan Anda
          </h3>

          <p className="text-sm text-white/40 font-light mb-6">
            Konsultasikan langsung — survei gratis, penawaran transparan
          </p>

          <div className="h-px bg-white/10 mb-6" />


          <div className="flex flex-col gap-3 mb-2">

            {ctaPoints.map((p, i) => (

              <div key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                <span className="text-blue-300 mt-0.5 flex-shrink-0">✓</span>
                <span>{p.text}</span>
              </div>

            ))}

          </div>


          <div className="h-px bg-white/10 my-6" />

          <p className="text-xs text-white/40 font-light mb-1.5 tracking-widest uppercase">
            Bank Dipilih
          </p>

          <p className="text-base font-semibold text-blue-300 mb-6">
            {activeBank}
          </p>


          <button className="w-full flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white py-3.5 md:py-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-[0_8px_24px_rgba(37,99,235,.4)] hover:-translate-y-0.5" onClick={handleWhatsapp}>

            <FaWhatsapp />
            Tanya Harga via WhatsApp

          </button>

          <p className="text-center text-xs text-white/30 font-light mt-3">
            Tidak ada kewajiban — tanya dulu, putuskan kemudian
          </p>

        </div>

      </div>

    </section>
  )
}