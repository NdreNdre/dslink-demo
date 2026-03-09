import useReveal from '../../../../../../shared/hooks/useReveal';

const steps = [
  { icon: '📋', title: 'Konsultasi', desc: 'Diskusi kebutuhan dan survey lokasi gratis tanpa syarat' },
  { icon: '🚚', title: 'Delivery', desc: 'Pengiriman material tepat waktu langsung ke lokasi Anda' },
  { icon: '🔨', title: 'Instalasi Rapi', desc: 'Pemasangan profesional oleh tukang berlisensi dan berpengalaman' },
  { icon: '✅', title: 'After-Sales', desc: 'Garansi kerja dan dukungan purna jual yang bisa diandalkan' },
]

const badges = [
  { icon: '🛡️', bg: 'bg-blue-50', title: 'Tukang Lokal Berlisensi', desc: 'Tim profesional terlatih bersertifikat' },
  { icon: '🔐', bg: 'bg-amber-50', title: 'Garansi Kerja', desc: 'Jaminan kualitas instalasi 1 tahun penuh' },
  { icon: '📸', bg: 'bg-green-50', title: 'Foto Before-After', desc: 'Dokumentasi lengkap setiap pekerjaan' },
]

export default function LayananSection() {

  const headRef   = useReveal()
  const stepsRef  = useReveal()
  const badgesRef = useReveal()

  return (
    <section className="bg-[#EDF2FB] py-16 md:py-24 px-6 md:px-16">

      <div className="max-w-[1280px] mx-auto">

        {/* HEAD */}
        <div ref={headRef} className="reveal text-center mb-10 md:mb-14">

          <div className="inline-flex items-center justify-center gap-2 text-blue-600 text-xs font-semibold tracking-[2px] uppercase mb-3">
            Proses Kerja Kami
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold text-navy leading-snug">
            Layanan End-to-End
          </h2>

          <p className="text-sm text-muted font-light mt-2.5 leading-relaxed max-w-xl mx-auto">
            Dari konsultasi hingga after-sales, kami dampingi Anda sepenuhnya
          </p>

        </div>


        {/* STEPS */}
        <div
          ref={stepsRef}
          className="reveal relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0"
        >

          {/* connector line desktop */}
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          {steps.map((step) => (

            <div
              key={step.title}
              className="group flex flex-col items-center text-center px-4 relative"
            >

              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-white border-2 border-blue-200 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center text-2xl mb-4 md:mb-5 shadow-[0_8px_24px_rgba(59,130,246,.12)] transition-all duration-200 z-10">
                {step.icon}
              </div>

              <h3 className="text-sm font-semibold text-navy mb-2">
                {step.title}
              </h3>

              <p className="text-xs text-muted font-light leading-relaxed max-w-[220px]">
                {step.desc}
              </p>

            </div>

          ))}

        </div>


        {/* BADGES */}
        <div
          ref={badgesRef}
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:mt-12"
        >

          {badges.map((b) => (

            <div
              key={b.title}
              className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-blue-100 
              hover:border-blue-300 hover:shadow-[0_8px_28px_rgba(59,130,246,.1)] 
              transition-all duration-200"
            >

              <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg ${b.bg}`}>
                {b.icon}
              </div>

              <div>
                <h5 className="text-sm font-semibold text-navy">
                  {b.title}
                </h5>

                <p className="text-xs text-muted font-light mt-0.5">
                  {b.desc}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}