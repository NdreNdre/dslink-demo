import { useDetailPackageStore } from "../../stores/detailPackage.store"
import { HiHome, HiStar, HiShieldCheck } from "react-icons/hi";

const stats = [
  { num: '120+', label: 'Rumah Ditangani', icon: HiHome },
  { num: '4.9',  label: 'Rating Pelanggan', icon: HiStar },
  { num: '100%', label: 'Garansi Instalasi', icon: HiShieldCheck },
];

export default function HeroSection() {

  const selectedPack = useDetailPackageStore((state) => state.selectedPackage);

  const handleWhatsapp = () => {
        const phone = "6282119466523";
        const message = `Halo, saya ingin memesan paket DS Link`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

  return (
    <section className="relative min-h-[65vh] md:min-h-[55vh] flex items-center overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedPack.imgHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A163C]/90 via-[#0A163C]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(59,130,246,0.18),transparent_60%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16 max-w-6xl animate-fadeUp">

        {/* TAG */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/45 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-semibold text-blue-300 tracking-widest uppercase mb-5 md:mb-6">
          ★ Paket {selectedPack.name}
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight max-w-2xl">
          "{selectedPack.tagline}"
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-3 md:mt-4 text-sm md:text-base text-white/60 leading-relaxed font-light max-w-xl">
          Instalasi profesional dengan hasil elegan & tahan lama. Semua sudah
          termasuk — material, pengiriman, dan pemasangan.
        </p>

        {/* STATS */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-9 mt-7 md:mt-8">

          {stats.map((s, i) => {
            const Icon = s.icon;

            return (
              <div key={s.label} className="flex items-center gap-4">

                <div className="flex items-center justify-center w-9 h-9 rounded-lg 
                bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-400/30">
                  <Icon className="text-lg" />
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-semibold text-yellow-500 leading-none">
                    {s.num}
                  </span>
                  <span className="text-xs text-white/50 font-light">
                    {s.label}
                  </span>
                </div>

                {/* divider desktop */}
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px self-stretch bg-white/15 ml-6" />
                )}

              </div>
            );
          })}

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3.5 mt-8 md:mt-9">

          <button onClick={handleWhatsapp} className="bg-blue-600 hover:bg-navy text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_8px_30px_rgba(37,99,235,.35)] hover:-translate-y-0.5">
            Pesan Paket Ini
          </button>

          {/* <button className="bg-transparent text-white/80 border border-white/30 hover:border-blue-300 hover:text-blue-300 px-7 py-3 rounded-full text-sm font-normal transition-all duration-200">
            Lihat Detail ↓
          </button> */}

        </div>

      </div>

      {/* SCROLL TEXT */}
      <div className="absolute bottom-6 md:bottom-9 left-6 md:left-16 flex items-center gap-2 text-white/35 text-[10px] md:text-xs font-light tracking-widest uppercase">
        <span className="w-8 md:w-10 h-px bg-white/25" />
        Scroll untuk lihat detail
      </div>

    </section>
  )
}