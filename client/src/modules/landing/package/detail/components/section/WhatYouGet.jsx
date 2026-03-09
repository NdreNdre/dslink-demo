import useReveal from '../../../../../../shared/hooks/useReveal';
import BeforeAfterSlider from './BeforeAfterSlider'
import { useDetailPackageStore } from '../../stores/detailPackage.store';
import { useListPackageStore } from '../../../list/stores/listPackage.store';

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-blue text-xs font-semibold tracking-[2px] uppercase mb-3">
      <span className="w-6 h-px bg-blue-600" />
      {children}
    </div>
  )
}

export default function WhatYouGet() {

  const leftRef  = useReveal()
  const rightRef = useReveal()

  const selectedPack = useDetailPackageStore((state) => state.selectedPackage);
  const iconMap = useListPackageStore((state) => state.iconMap);

  return (
    <section className="bg-[#F5F8FF] py-16 md:py-24 px-6 md:px-16">

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-[72px] items-center">

        {/* BEFORE AFTER */}
        <div ref={leftRef} className="reveal order-2 md:order-1">
          <BeforeAfterSlider />
        </div>

        {/* TEXT CONTENT */}
        <div ref={rightRef} className="reveal order-1 md:order-2">

          <SectionLabel>Yang Anda Dapatkan</SectionLabel>

          <h2 className="text-2xl md:text-4xl font-semibold text-navy leading-snug">
            Semua Sudah Termasuk<br className="hidden md:block"/>Instalasi Profesional
          </h2>

          <span className="line-grow" />

          {/* FEATURES */}
          <div className="flex flex-col gap-3.5 mt-6 md:mt-8">

            {selectedPack?.feature?.map((item) => {

              const Icon = iconMap[item.icon];

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-blue-100 
                  hover:border-blue-300 hover:shadow-[0_8px_32px_rgba(59,130,246,.12)]
                  md:hover:translate-x-1 transition-all duration-200"
                >

                  <div className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 rounded-xl flex items-center justify-center text-lg md:text-xl text-blue-700 bg-blue-100/50">
                    <Icon/>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-navy">
                      {item.title}
                    </h4>

                    <p className="text-xs text-muted mt-0.5 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}