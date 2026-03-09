import useReveal from '../../../../../../shared/hooks/useReveal';

const testimonials = [
  {
    initials: 'IR',
    name: 'Ibu Rina',
    location: 'Bekasi, Jawa Barat',
    text: 'Awalnya kamar mandi kami biasa saja, sekarang jadi seperti hotel. Pengerjaan cepat, rapi, dan hasilnya melebihi ekspektasi kami.',
  },
  {
    initials: 'PA',
    name: 'Pak Arif',
    location: 'Tangerang, Banten',
    text: 'Tim DS Link sangat profesional. Instalasi rapi dan selesai tepat waktu sesuai jadwal. Sangat direkomendasikan untuk yang mau renovasi!',
  },
  {
    initials: 'IS',
    name: 'Ibu Santi',
    location: 'Depok, Jawa Barat',
    text: 'Sekarang mandi jadi jauh lebih nyaman. Air panas stabil dan shower kuat. Nggak nyesel sama sekali pilih paket dari DS Link.',
  },
];

export default function TestiSection() {
  const headRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="bg-[#F5F8FF] py-20 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        {/* Head */}
        <div
          ref={headRef}
          className="reveal flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold tracking-[2px] uppercase mb-3">
              <span className="w-6 h-px bg-blue-600" />
              Kata Pelanggan
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-navy leading-snug">
              Mereka Sudah<br />Merasakannya
            </h2>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-none">
              4.9
            </span>

            <div>
              <div className="text-amber-400 text-sm md:text-base">★★★★★</div>
              <p className="text-xs text-muted font-light mt-0.5">
                dari 120+ ulasan
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 md:p-7 border border-blue-100 hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(59,130,246,.1)] transition-all duration-200"
            >
              {/* Quote */}
              <div className="text-4xl md:text-5xl text-blue-100 leading-none mb-1">
                "
              </div>

              {/* Stars */}
              <div className="text-amber-400 text-sm mb-3">★★★★★</div>

              {/* Text */}
              <p className="text-sm text-muted leading-[1.75] font-light italic mb-5">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600 flex-shrink-0">
                  {t.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted font-light">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}