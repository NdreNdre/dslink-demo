import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiMedal } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

const PoweredSection = () => {
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const iconRef = useRef(null);
    const leftTextRef = useRef(null);
    const dividerRef = useRef(null);
    const rightTextRef = useRef(null);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // ── 1. TOP LINE — tumbuh dari kiri ke kanan ──────────────────────
            gsap.set(topLineRef.current, { scaleX: 0, transformOrigin: "left center" });
            ScrollTrigger.create({
                trigger: topLineRef.current,
                scroller, start: "top 95%", once: true,
                onEnter: () => {
                    gsap.to(topLineRef.current, { scaleX: 1, duration: 0.9, ease: "power2.inOut" });
                },
            });

            // ── 2. ICON — pop in dengan bounce ───────────────────────────────
            gsap.set(iconRef.current, { scale: 0, opacity: 0, rotation: -15 });
            ScrollTrigger.create({
                trigger: iconRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(iconRef.current, {
                        scale: 1, opacity: 1, rotation: 0,
                        duration: 0.6, ease: "back.out(1.7)",
                    });
                },
            });

            // ── 3. LEFT TEXT — fade slide dari kiri ──────────────────────────
            gsap.set(leftTextRef.current, { x: -40, opacity: 0 });
            ScrollTrigger.create({
                trigger: leftTextRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(leftTextRef.current, {
                        x: 0, opacity: 1,
                        duration: 0.65, ease: "power3.out", delay: 0.1,
                    });
                },
            });

            // ── 4. DIVIDER — grow dari atas ke bawah ─────────────────────────
            gsap.set(dividerRef.current, { scaleY: 0, transformOrigin: "top center", opacity: 0 });
            ScrollTrigger.create({
                trigger: dividerRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(dividerRef.current, {
                        scaleY: 1, opacity: 1,
                        duration: 0.5, ease: "power2.out", delay: 0.25,
                    });
                },
            });

            // ── 5. RIGHT TEXT — fade slide dari kanan ────────────────────────
            gsap.set(rightTextRef.current, { x: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: rightTextRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(rightTextRef.current, {
                        x: 0, opacity: 1,
                        duration: 0.65, ease: "power3.out", delay: 0.2,
                    });
                },
            });

            // ── 6. BOTTOM LINE — tumbuh dari kanan ke kiri ───────────────────
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
        <section className="relative">

            {/* Top Gradient Line */}
            <div ref={topLineRef} className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />

            <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* Left Side */}
                        <div className="flex items-center gap-6">
                            <div
                                ref={iconRef}
                                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-xl shadow-amber-500/30"
                            >
                                <CiMedal className="text-white w-12 h-12" />
                            </div>
                            <div ref={leftTextRef}>
                                <p className="text-gray-400 text-sm">Powered by</p>
                                <h3 className="text-white text-2xl font-semibold">Depo Pelita</h3>
                            </div>
                        </div>

                        {/* Divider */}
                        <div ref={dividerRef} className="hidden md:block w-px h-16 bg-white/20" />

                        {/* Right Side */}
                        <div ref={rightTextRef} className="text-center md:text-left max-w-2xl">
                            <h4 className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-semibold">
                                    Sistem distribusi terpercaya
                                </span>{" "}
                                dengan produk berkualitas tinggi untuk setiap proyek
                            </h4>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div ref={bottomLineRef} className="h-1 w-full bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600" />

        </section>
    );
};

export default PoweredSection;