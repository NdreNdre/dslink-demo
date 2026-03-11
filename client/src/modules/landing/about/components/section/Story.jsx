import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamImage2 from "../../../../../assets/team_2.jpg";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
    const headerLineRef = useRef(null);
    const headerTextRef = useRef(null);
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const imageRef = useRef(null);
    const challengeRef = useRef(null);
    const solutionRef = useRef(null);
    const statRefs = useRef([]);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            gsap.set(headerLineRef.current, { scaleY: 0, transformOrigin: "top center" });
            gsap.set(headerTextRef.current, { x: -20, opacity: 0 });
            ScrollTrigger.create({
                trigger: headerLineRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(headerLineRef.current, { scaleY: 1, duration: 0.4, ease: "power2.out" });
                    gsap.to(headerTextRef.current, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 });
                },
            });

            gsap.set([headingRef.current, subheadRef.current], { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.15 });
                },
            });

            gsap.set(imageRef.current, { x: -70, opacity: 0 });
            ScrollTrigger.create({
                trigger: imageRef.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(imageRef.current, { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" });
                },
            });

            gsap.set(challengeRef.current, { x: 70, opacity: 0 });
            ScrollTrigger.create({
                trigger: challengeRef.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(challengeRef.current, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                },
            });

            gsap.set(solutionRef.current, { x: 70, opacity: 0 });
            ScrollTrigger.create({
                trigger: solutionRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(solutionRef.current, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 });
                },
            });

            statRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 50, opacity: 0, scale: 0.95 });
                ScrollTrigger.create({
                    trigger: el,
                    scroller, start: "top 90%", once: true,
                    onEnter: () => {
                        gsap.to(el, {
                            y: 0, opacity: 1, scale: 1,
                            duration: 0.6, ease: "back.out(1.4)",
                            delay: i * 0.12,
                        });
                    },
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
        <section className="bg-gradient-to-b from-[#FAF9F6] to-[#FAF9F6] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="mb-14 max-w-3xl">
                    <div className="flex items-center space-x-2">
                        <div ref={headerLineRef} className="w-0.5 bg-[#D4A03C] h-10" />
                        <span ref={headerTextRef} className="text-sm font-semibold text-[#D4A03C] tracking-wider">
                            Cerita Kami
                        </span>
                    </div>

                    <h2 ref={headingRef} className="font-serif mt-3 text-4xl md:text-5xl font-bold text-[#0D1B6B] leading-tight">
                        Dari bingung menjadi{" "}
                        <span className="bg-gradient-to-r from-[#D4A03C] to-[#E8C76A] bg-clip-text text-transparent">
                            Jelas
                        </span>
                    </h2>

                    <p ref={subheadRef} className="mt-4 text-lg text-[#1A3A8F]">
                        Kami melihat masalah yang sering dihadapi pemilik rumah, lalu menghadirkan solusi yang benar-benar berpihak pada mereka.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                    {/* Left — Image */}
                    <div ref={imageRef} className="relative rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={TeamImage2}
                            alt="Professional Installation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <p className="text-[#D4A03C] text-sm font-semibold uppercase tracking-wider">
                                Quality Craftsmanship
                            </p>
                            <h3 className="text-white text-2xl font-semibold mt-2">
                                Professional Installation, Every Time
                            </h3>
                        </div>
                    </div>

                    {/* Right — Challenge & Solution */}
                    <div className="flex flex-col gap-6">

                        {/* Tantangan */}
                        <div ref={challengeRef} className="bg-white rounded-xl p-8 shadow-sm border border-[#0D1B6B]/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-lg font-bold">
                                    !
                                </div>
                                <h4 className="text-xl font-semibold text-[#0D1B6B]">Tantangan</h4>
                            </div>
                            <p className="text-[#1A3A8F] leading-relaxed">
                                Banyak pemilik rumah kebingungan menghadapi terlalu banyak pilihan, pemasang yang kurang terpercaya, dan harga yang tidak transparan. Akibatnya, mereka sering membayar lebih atau mendapatkan hasil yang tidak sesuai harapan.
                            </p>
                        </div>

                        {/* Solusi */}
                        <div ref={solutionRef} className="bg-[#0D1B6B] text-white rounded-xl p-8 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#D4A03C] text-[#0D1B6B] flex items-center justify-center rounded-lg font-bold">
                                    ✓
                                </div>
                                <h4 className="text-xl font-semibold text-white">Solusi Kami</h4>
                            </div>
                            <p className="text-white/70 leading-relaxed mb-6">
                                DS Link menyederhanakan semuanya melalui paket terkurasi, instalasi profesional, dan sistem pembayaran fleksibel dengan cicilan ringan.
                            </p>
                            <ul className="space-y-3">
                                {["Paket Lengkap", "Instalasi Profesional", "Pembayaran Mudah"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-[#D4A03C] font-bold">✓</span>
                                        <span className="text-white/85">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mt-14">

                    {/* Stat 1 — Gold */}
                    <div ref={(el) => (statRefs.current[0] = el)} className="bg-[#D4A03C] p-8 rounded-xl">
                        <h3 className="text-4xl font-bold text-[#0D1B6B]">500+</h3>
                        <p className="mt-2 font-semibold text-[#0D1B6B]">Pelanggan</p>
                        <p className="text-sm mt-1 text-[#0D1B6B]/75">Mempercayakan rumah mereka kepada DS Link</p>
                    </div>

                    {/* Stat 2 — Navy */}
                    <div ref={(el) => (statRefs.current[1] = el)} className="bg-[#0D1B6B] p-8 rounded-xl">
                        <h3 className="text-4xl font-bold text-[#E8C76A]">98%</h3>
                        <p className="mt-2 font-semibold text-white">Kepuasan</p>
                        <p className="text-sm mt-1 text-white/55">Jaminan kualitas pengerjaan</p>
                    </div>

                    {/* Stat 3 — White / Cream */}
                    <div ref={(el) => (statRefs.current[2] = el)} className="bg-white border border-[#0D1B6B]/15 p-8 rounded-xl">
                        <h3 className="text-4xl font-bold text-[#0D1B6B]">5+</h3>
                        <p className="mt-2 font-semibold text-[#0D1B6B]">Tahun</p>
                        <p className="text-sm mt-1 text-[#1A3A8F]/60">Terpercaya dan berpengalaman</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Story;