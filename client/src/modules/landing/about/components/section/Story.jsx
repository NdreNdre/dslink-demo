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

            // ── 1. HEADER — garis biru tumbuh lalu teks fade in ──────────────
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

            // ── 2. HEADING & SUBTEXT ──────────────────────────────────────────
            gsap.set([headingRef.current, subheadRef.current], { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.15 });
                },
            });

            // ── 3. IMAGE — slide dari kiri ────────────────────────────────────
            gsap.set(imageRef.current, { x: -70, opacity: 0 });
            ScrollTrigger.create({
                trigger: imageRef.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(imageRef.current, { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" });
                },
            });

            // ── 4. CHALLENGE — slide dari kanan ──────────────────────────────
            gsap.set(challengeRef.current, { x: 70, opacity: 0 });
            ScrollTrigger.create({
                trigger: challengeRef.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(challengeRef.current, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                },
            });

            // ── 5. SOLUTION — slide dari kanan, setelah challenge ─────────────
            gsap.set(solutionRef.current, { x: 70, opacity: 0 });
            ScrollTrigger.create({
                trigger: solutionRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(solutionRef.current, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 });
                },
            });

            // ── 6. STATS — stagger pop in dari bawah ─────────────────────────
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
        <section className="bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="mb-14 max-w-3xl">
                    <div className="flex items-center space-x-2">
                        <div ref={headerLineRef} className="w-0.5 bg-blue-500 h-10" />
                        <span ref={headerTextRef} className="text-sm font-semibold text-blue-500 tracking-wider">
                            Cerita Kami
                        </span>
                    </div>

                    <h2 ref={headingRef} className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Dari bingung menjadi{" "}
                        <span className="text-blue-500">Jelas</span>
                    </h2>

                    <p ref={subheadRef} className="mt-4 text-lg text-slate-600">
                        Kami melihat masalah yang sering dihadapi pemilik rumah, lalu menghadirkan solusi yang benar-benar berpihak pada mereka.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                    {/* Left Image — slide dari kiri */}
                    <div ref={imageRef} className="relative rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={TeamImage2}
                            alt="Professional Installation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
                                Quality Craftsmanship
                            </p>
                            <h3 className="text-white text-2xl font-semibold mt-2">
                                Professional Installation, Every Time
                            </h3>
                        </div>
                    </div>

                    {/* Right Content — slide dari kanan */}
                    <div className="flex flex-col gap-6">

                        <div ref={challengeRef} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-lg font-bold">
                                    !
                                </div>
                                <h4 className="text-xl font-semibold text-slate-900">Tantangan</h4>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Banyak pemilik rumah kebingungan menghadapi terlalu banyak pilihan, pemasang yang kurang terpercaya, dan harga yang tidak transparan. Akibatnya, mereka sering membayar lebih atau mendapatkan hasil yang tidak sesuai harapan.
                            </p>
                        </div>

                        <div ref={solutionRef} className="bg-slate-900 text-white rounded-xl p-8 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-amber-400 text-slate-900 flex items-center justify-center rounded-lg font-bold">
                                    ✓
                                </div>
                                <h4 className="text-xl font-semibold">Solusi Kami</h4>
                            </div>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                DS Link menyederhanakan semuanya melalui paket terkurasi, instalasi profesional, dan sistem pembayaran fleksibel dengan cicilan ringan.
                            </p>
                            <ul className="space-y-3">
                                {["Paket Lengkap", "Instalasi Profesional", "Pembayaran Mudah"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-amber-400">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mt-14">
                    {[
                        {
                            bg: "bg-amber-400",
                            valueClass: "text-slate-900",
                            labelClass: "text-slate-900 font-semibold",
                            descClass: "text-slate-800",
                            value: "500+", label: "Pelanggan", desc: "Mempercayakan rumah mereka kepada DS Link",
                        },
                        {
                            bg: "bg-slate-900",
                            valueClass: "text-amber-400",
                            labelClass: "text-white font-semibold",
                            descClass: "text-slate-400",
                            value: "98%", label: "Kepuasan", desc: "Jaminan kualitas pengerjaan",
                        },
                        {
                            bg: "bg-white border border-slate-300",
                            valueClass: "text-slate-900",
                            labelClass: "text-slate-900 font-semibold",
                            descClass: "text-slate-500",
                            value: "5+", label: "Tahun", desc: "Terpercaya dan berpengalaman",
                        },
                    ].map((stat, i) => (
                        <div key={i} ref={(el) => (statRefs.current[i] = el)} className={`${stat.bg} p-8 rounded-xl`}>
                            <h3 className={`text-4xl font-bold ${stat.valueClass}`}>{stat.value}</h3>
                            <p className={`mt-2 ${stat.labelClass}`}>{stat.label}</p>
                            <p className={`text-sm mt-1 ${stat.descClass}`}>{stat.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Story;