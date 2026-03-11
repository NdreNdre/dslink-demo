import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBoxOpen, FaCreditCard, FaShieldAlt } from "react-icons/fa";
import { ImTruck } from "react-icons/im";

gsap.registerPlugin(ScrollTrigger);

const partners = [
    {
        name: "BRI",
        color: "#003d99",
        logo: (
            <svg viewBox="0 0 120 40" className="w-20 h-10">
                <text x="10" y="28" fontSize="22" fontWeight="bold" fill="currentColor">BRI</text>
            </svg>
        ),
    },
    {
        name: "BCA",
        color: "#005baa",
        logo: (
            <svg viewBox="0 0 120 40" className="w-20 h-10">
                <text x="10" y="28" fontSize="22" fontWeight="bold" fill="currentColor">BCA</text>
            </svg>
        ),
    },
    {
        name: "BNI",
        color: "#f36f21",
        logo: (
            <svg viewBox="0 0 120 40" className="w-20 h-10">
                <text x="10" y="28" fontSize="22" fontWeight="bold" fill="currentColor">BNI</text>
            </svg>
        ),
    },
    {
        name: "Home Credit",
        color: "#e4002b",
        logo: (
            <svg viewBox="0 0 160 40" className="w-28 h-10">
                <text x="5" y="28" fontSize="16" fontWeight="bold" fill="currentColor">Home Credit</text>
            </svg>
        ),
    },
    {
        name: "Akulaku",
        color: "#1a73e8",
        logo: (
            <svg viewBox="0 0 140 40" className="w-24 h-10">
                <text x="5" y="28" fontSize="18" fontWeight="bold" fill="currentColor">Akulaku</text>
            </svg>
        ),
    },
    {
        name: "Kredivo",
        color: "#00b14f",
        logo: (
            <svg viewBox="0 0 140 40" className="w-24 h-10">
                <text x="5" y="28" fontSize="18" fontWeight="bold" fill="currentColor">Kredivo</text>
            </svg>
        ),
    },
];

const highlights = [
    { icon: FaBoxOpen,   title: "Supply Depo Pelita", desc: "Stok dari gudang distributor, harga kompetitif" },
    { icon: FaCreditCard, title: "6 Partner Cicilan",  desc: "Cicilan bunga 0% tanpa kartu kredit" },
    { icon: ImTruck,     title: "Gratis Ongkir 15km", desc: "Standar layanan permanen, bukan promo" },
    { icon: FaShieldAlt, title: "Garansi 1 Bulan",    desc: "Rusak pabrik? Ganti baru. Titik." },
];

const TrustHighlightSection = () => {
    const labelRef = useRef(null);
    const partnerRefs = useRef([]);
    const stripRef = useRef(null);
    const highlightRefs = useRef([]);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // ── 1. LABEL ──────────────────────────────────────────────────────
            gsap.set(labelRef.current, { y: 20, opacity: 0 });
            ScrollTrigger.create({
                trigger: labelRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => gsap.to(labelRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }),
            });

            // ── 2. PARTNER LOGOS — stagger fade in ────────────────────────────
            partnerRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 20, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el, scroller, start: "top 90%", once: true,
                    onEnter: () => gsap.to(el, {
                        y: 0, opacity: 1,
                        duration: 0.5, ease: "power3.out",
                        delay: i * 0.08,
                    }),
                });
            });

            // ── 3. HIGHLIGHT STRIP — scale in ─────────────────────────────────
            gsap.set(stripRef.current, { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: stripRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => gsap.to(stripRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }),
            });

            // ── 4. HIGHLIGHT ITEMS — stagger dari bawah ───────────────────────
            highlightRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 30, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el, scroller, start: "top 90%", once: true,
                    onEnter: () => gsap.to(el, {
                        y: 0, opacity: 1,
                        duration: 0.55, ease: "back.out(1.4)",
                        delay: i * 0.1,
                    }),
                });
            });

            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section className="bg-[#FAF9F6] py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── TRUST BAR ── */}
                <div className="text-center mb-8">
                    <p ref={labelRef} className="text-xs font-semibold tracking-widest uppercase text-[#1A3A8F]/50 mb-6">
                        Partner Pembiayaan Resmi
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {partners.map((partner, i) => (
                            <div
                                key={i}
                                ref={(el) => (partnerRefs.current[i] = el)}
                                className="text-[#0D1B6B]/20 hover:text-current transition-all duration-300 cursor-default select-none"
                                style={{ '--hover-color': partner.color }}
                                onMouseEnter={e => e.currentTarget.style.color = partner.color}
                                onMouseLeave={e => e.currentTarget.style.color = ''}
                            >
                                {partner.logo}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4A03C]/30 to-transparent my-12" />

                {/* ── HIGHLIGHT STRIP ── */}
                <div
                    ref={stripRef}
                    className="rounded-2xl bg-gradient-to-r from-[#0D1B6B] to-[#000066] px-6 py-8 md:px-10"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    ref={(el) => (highlightRefs.current[i] = el)}
                                    className="flex items-start gap-4"
                                >
                                    {/* Icon */}
                                    <div className="w-11 h-11 rounded-xl bg-[#D4A03C]/15 border border-[#D4A03C]/25 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-[#D4A03C]" />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h4 className="font-semibold text-white text-sm leading-snug">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/50 text-xs mt-1 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrustHighlightSection;