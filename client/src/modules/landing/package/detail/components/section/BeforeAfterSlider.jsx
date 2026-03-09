import { useRef, useState, useCallback } from 'react'
import { useDetailPackageStore } from '../../stores/detailPackage.store'



export default function BeforeAfterSlider() {

  const selectedPack = useDetailPackageStore((state) => state.selectedPackage);

  const [pct, setPct] = useState(50)
  const dragging = useRef(false)
  const sliderRef = useRef(null)

  const calcPct = useCallback((clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect()
    if (!rect) return
    const raw = ((clientX - rect.left) / rect.width) * 100
    setPct(Math.min(Math.max(raw, 5), 95))
  }, [])

  const onMouseDown = (e) => { dragging.current = true; calcPct(e.clientX) }
  const onMouseMove = (e) => { if (dragging.current) calcPct(e.clientX) }
  const onMouseUp   = ()  => { dragging.current = false }
  const onTouchStart = (e) => { dragging.current = true; calcPct(e.touches[0].clientX) }
  const onTouchMove  = (e) => { if (dragging.current) calcPct(e.touches[0].clientX) }

  return (
    <div className="relative">
      {/* Decorative accents */}
      <div className="absolute -top-5 -right-5 w-28 h-28 border-2 border-blue-100 rounded-2xl -z-10" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-50 rounded-xl -z-10" />

      {/* Slider */}
      <div
        ref={sliderRef}
        className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_24px_80px_rgba(13,33,72,.18)] cursor-col-resize select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        
        <img src={selectedPack.imgAfter} alt="Sesudah" className="absolute inset-0 w-full h-full object-cover" />
        
        <img
          src={selectedPack.imgBefore}
          alt="Sebelum"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        />

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
          style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-navy font-bold text-sm cursor-col-resize"
          style={{ left: `${pct}%`, transform: 'translate(-50%, -50%)' }}
        >
          ⇔
        </div>

        {/* Labels */}
        <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
          Sebelum
        </span>
        <span className="absolute bottom-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
          Sesudah
        </span>
      </div>

      <p className="mt-3.5 text-xs text-muted text-center font-light">← Geser untuk melihat perubahan →</p>
    </div>
  )
}
