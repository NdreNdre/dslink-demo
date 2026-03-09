import useReveal from '../../../../../../shared/hooks/useReveal'
import { useDetailPackageStore } from '../../stores/detailPackage.store'

export default function ProdukSection() {
  const headRef = useReveal()
  const cardsRef = useReveal()

  const selectedPack = useDetailPackageStore((state) => state.selectedPackage)

  if (!selectedPack) return null

  return (
    <section className="bg-[#EDF2FB] py-20 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        {/* Head */}
        <div
          ref={headRef}
          className="reveal flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold tracking-[2px] uppercase mb-3">
              <span className="w-6 h-px bg-blue-600" />
              Add-On Populer
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-navy leading-snug">
              Lengkapi dengan<br />Produk Pilihan
            </h2>
          </div>

          <p className="text-sm text-muted font-light max-w-full md:max-w-[280px] text-left md:text-right leading-relaxed">
            Tambahkan produk pilihan untuk hasil yang lebih sempurna
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {selectedPack?.addOn?.map((p) => (
            <div
              key={p.id || p.title}
              className="group bg-white rounded-2xl overflow-hidden border border-blue-100 hover:border-blue-200 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(13,33,72,.13)] transition-all duration-300"
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-warm">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-3 right-3 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                  + Add On
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h4 className="text-base font-semibold text-navy">
                  {p.title}
                </h4>

                <p className="text-xs text-muted mt-1.5 font-light leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex items-center gap-1.5 mt-3.5 text-xs text-green-700 font-medium">
                  <span className="font-bold">✓</span>
                  {p.benefit}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}