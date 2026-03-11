import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiMedal } from "react-icons/ci";
import { FaHistory, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const counters = [
    { icon: FaHistory,      value: 25,  suffix: "+", label: "Tahun Ekosistem Depo Pelita" },
    { icon: FaMapMarkerAlt, value: 940, suffix: "+", label: "Desa Potensial di Jawa Tengah" },
    { icon: FaCreditCard,   value: 6,   suffix: "",  label: "Partner Pembiayaan Resmi" },
    { icon: BsStars,        value: 5,   suffix: "",  label: "Program Inovasi Terintegrasi" },
];

const PoweredSection = () => {
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const iconRef = useRef(null);
    const leftTextRef = useRef(null);
    const dividerRef = useRef(null);
    const rightTextRef = useRef(null);
    const counterCardRef = useRef(null);
    const itemRefs = useRef([]);
    const [counts, setCounts] = useState(counters.map(() => 0));
    const hasAnimated = useRef(false);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // ── COUNTER CARD ──────────────────────────────────────────────────
            gsap.set(counterCardRef.current, { y: 20, opacity: 0 });
            ScrollTrigger.create({
                trigger: counterCardRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(counterCardRef.current, {
                        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
                    });

                    gsap.fromTo(
                        itemRefs.current,
                        { y: 20, opacity: 0, scale: 0.95 },
                        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)", stagger: 0.12 }
                    );

                    if (!hasAnimated.current) {
                        hasAnimated.current = true;
                        counters.forEach((counter, i) => {
                            const obj = { val: 0 };
                            gsap.to(obj, {
                                val: counter.value,
                                duration: 2,
                                ease: "power2.out",
                                delay: i * 0.15,
                                onUpdate: () => {
                                    setCounts((prev) => {
                                        const next = [...prev];
                                        next[i] = Math.floor(obj.val);
                                        return next;
                                    });
                                },
                                onComplete: () => {
                                    setCounts((prev) => {
                                        const next = [...prev];
                                        next[i] = counter.value;
                                        return next;
                                    });
                                },
                            });
                        });
                    }
                },
            });

            // ── TOP LINE ──────────────────────────────────────────────────────
            gsap.set(topLineRef.current, { scaleX: 0, transformOrigin: "left center" });
            ScrollTrigger.create({
                trigger: topLineRef.current,
                scroller, start: "top 95%", once: true,
                onEnter: () => {
                    gsap.to(topLineRef.current, { scaleX: 1, duration: 0.9, ease: "power2.inOut" });
                },
            });

            // ── ICON ──────────────────────────────────────────────────────────
            gsap.set(iconRef.current, { scale: 0, opacity: 0, rotation: -15 });
            ScrollTrigger.create({
                trigger: iconRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(iconRef.current, { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" });
                },
            });

            // ── LEFT TEXT ─────────────────────────────────────────────────────
            gsap.set(leftTextRef.current, { x: -40, opacity: 0 });
            ScrollTrigger.create({
                trigger: leftTextRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(leftTextRef.current, { x: 0, opacity: 1, duration: 0.65, ease: "power3.out", delay: 0.1 });
                },
            });

            // ── DIVIDER ───────────────────────────────────────────────────────
            gsap.set(dividerRef.current, { scaleY: 0, transformOrigin: "top center", opacity: 0 });
            ScrollTrigger.create({
                trigger: dividerRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(dividerRef.current, { scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.25 });
                },
            });

            // ── RIGHT TEXT ────────────────────────────────────────────────────
            gsap.set(rightTextRef.current, { x: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: rightTextRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(rightTextRef.current, { x: 0, opacity: 1, duration: 0.65, ease: "power3.out", delay: 0.2 });
                },
            });

            // ── BOTTOM LINE ───────────────────────────────────────────────────
            gsap.set(bottomLineRef.current, { scaleX: 0, transformOrigin: "right center" });
            ScrollTrigger.create({
                trigger: bottomLineRef.current,
                scroller, start: "top 98%", once: true,
                onEnter: () => {
                    gsap.to(bottomLineRef.current, { scaleX: 1, duration: 0.9, ease: "power2.inOut", delay: 0.1 });
                },
            });

            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section className="relative bg-gradient-to-r from-slate-800 to-slate-900">

            <div
                ref={topLineRef}
                className="h-1 w-full bg-gradient-to-r from-[#5c4519] via-[#D4A03C] to-[#5c4519] mb-16"
            />

            <div className="mb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* Left Side */}
                        <div className="flex items-center gap-6">
                            <div
                                ref={iconRef}
                                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4A03C] to-[#E8C76A] flex items-center justify-center shadow-xl shadow-[#D4A03C]/30"
                            >
                                <CiMedal className="w-12 h-12 text-[#0D1B6B]" />
                            </div>
                            <div ref={leftTextRef}>
                                <p className="text-sm text-[#E8C76A]/60">Didukung penuh oleh</p>
                                <h3 className="text-white text-2xl font-semibold">Depo Pelita</h3>
                            </div>
                        </div>

                        {/* Divider */}
                        <div ref={dividerRef} className="hidden md:block w-px h-16 bg-[#D4A03C]/25" />

                        {/* Right Side */}
                        <div ref={rightTextRef} className="text-center md:text-left max-w-2xl">
                            <h4 className="text-lg md:text-xl leading-relaxed text-white/85">
                                <span className="bg-gradient-to-r from-[#D4A03C] to-[#E8C76A] bg-clip-text text-transparent font-semibold">
                                    Sistem distribusi terpercaya
                                </span>{" "}
                                dengan produk berkualitas tinggi untuk setiap proyek
                            </h4>
                        </div>

                    </div>
                </div>
            </div>

            <div className="z-20 px-4 sm:px-6 lg:px-8">
                <div
                    ref={counterCardRef}
                    className="max-w-7xl mx-auto bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-xl border border-[#D4A03C] px-6 py-7"
                >

                    
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#0D1B6B]/10">
                        {counters.map((counter, i) => {
                            const Icon = counter.icon;
                            return (
                                <div
                                    key={i}
                                    ref={(el) => (itemRefs.current[i] = el)}
                                    className="flex flex-col items-center text-center px-4 py-2"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#D4A03C]/10 flex items-center justify-center mb-3">
                                        <Icon className="w-5 h-5 text-[#D4A03C]" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white leading-none">
                                        {counts[i]}
                                        <span className="text-[#D4A03C]">{counter.suffix}</span>
                                    </div>
                                    <p className="mt-2 text-xs md:text-sm text-white/70 leading-snug">
                                        {counter.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            
            <div
                ref={bottomLineRef}
                className="h-1 w-full bg-gradient-to-l from-[#5c4519] via-[#D4A03C] to-[#5c4519] mt-16"
            />

        </section>
    );
};

export default PoweredSection;