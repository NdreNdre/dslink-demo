import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../ImageWithFallback";
import { CheckCircle } from "lucide-react";
import { FaBoxOpen, FaCreditCard, FaShieldAlt } from "react-icons/fa";
import { ImTruck } from "react-icons/im";

gsap.registerPlugin(ScrollTrigger);

const partners = [
    { name: "BRI",         color: "#003d99", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/BRI_2020.svg" },
    { name: "BCA",         color: "#005baa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" },
    { name: "BNI",         color: "#f36f21", logo: "https://wwf.id/sites/default/files/inline-images/BNI_logo.svg__1.png" },
    { name: "Home Credit", color: "#e4002b", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Home_Credit_logo.svg/1280px-Home_Credit_logo.svg.png" },
    { name: "Akulaku",     color: "#1a73e8", logo: "https://ec-cstatic.akulaku.net/web-site/_nuxt/img/m_akulaku_logo.35cf85f.png" },
    { name: "Kredivo",     color: "#00b14f", logo: "https://image.cermati.com/v1582185705/upcaqimam6jtf9hoy6mz.png" },
];

const trustBadges = [
    { icon: FaBoxOpen,    label: "Supply Depo Pelita", desc: "Harga distributor langsung", colorFrom: "#D4A03C", colorTo: "#E8C76A" },
    { icon: FaCreditCard, label: "6 Partner Cicilan",  desc: "Bunga 0% tanpa kartu kredit", colorFrom: "#0D1B6B", colorTo: "#1A3A8F" },
    { icon: ImTruck,      label: "Gratis Ongkir 15km", desc: "Layanan permanen, bukan promo", colorFrom: "#1A3A8F", colorTo: "#0033CC" },
    { icon: FaShieldAlt,  label: "Garansi 1 Bulan",   desc: "Rusak pabrik? Ganti baru.", colorFrom: "#D4A03C", colorTo: "#0D1B6B" },
];

const projects = [
    {
        id: 1,
        title: "Renovasi Dapur Modern",
        category: "Kitchen Upgrade",
        before: "https://images.unsplash.com/photo-1579618217299-92460380cf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBraXRjaGVuJTIwYmVmb3JlJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NzIwMTYzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        after: "https://images.unsplash.com/photo-1769739132671-ac41c439d51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZW5vdmF0ZWQlMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBicmlnaHR8ZW58MXx8fHwxNzcyMDgzMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        improvements: ["Kabinet baru premium", "Countertop granite", "Lighting modern", "Lantai keramik"],
    },
    {
        id: 2,
        title: "Renovasi Kamar Mandi",
        category: "Bathroom Upgrade",
        before: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbm92YXRpb24lMjBtb2Rlcm4lMjBjbGVhbnxlbnwxfHx8fDE3NzIwODMxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        after: "https://images.unsplash.com/photo-1651442897558-47cff0f64bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0ZWQlMjBtb2Rlcm4lMjBiYXRocm9vbSUyMGFmdGVyfGVufDF8fHx8MTc3MjA4MzE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        improvements: ["Shower modern", "Wastafel premium", "Keramik dinding", "Ventilasi upgrade"],
    },
];

const BeforeAfterSection = () => {
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const partnerLabelRef = useRef(null);
    const partnerRefs = useRef([]);
    const badgeRefs = useRef([]);
    const projectRefs = useRef([]);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // ── 1. HEADING ────────────────────────────────────────────────────
            gsap.set([headingRef.current, subheadRef.current], { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.15 });
                },
            });

            // ── 2. PARTNER LABEL & LOGOS ──────────────────────────────────────
            gsap.set(partnerLabelRef.current, { y: 20, opacity: 0 });
            ScrollTrigger.create({
                trigger: partnerLabelRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => gsap.to(partnerLabelRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }),
            });

            partnerRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 20, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el, scroller, start: "top 92%", once: true,
                    onEnter: () => gsap.to(el, {
                        y: 0, opacity: 1,
                        duration: 0.45, ease: "power3.out",
                        delay: i * 0.08,
                    }),
                });
            });

            // ── 3. TRUST BADGES ───────────────────────────────────────────────
            badgeRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 40, opacity: 0, scale: 0.92 });
                ScrollTrigger.create({
                    trigger: el, scroller, start: "top 90%", once: true,
                    onEnter: () => gsap.to(el, {
                        y: 0, opacity: 1, scale: 1,
                        duration: 0.55, ease: "back.out(1.5)",
                        delay: i * 0.1,
                    }),
                });
            });

            // ── 4. PROJECT CARDS ──────────────────────────────────────────────
            projectRefs.current.forEach((project, i) => {
                if (!project) return;
                const isEven = i % 2 === 0;

                const header = project.querySelector(".project-header");
                if (header) {
                    gsap.set(header, { x: isEven ? -50 : 50, opacity: 0 });
                    ScrollTrigger.create({
                        trigger: header, scroller, start: "top 88%", once: true,
                        onEnter: () => gsap.to(header, { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }),
                    });
                }

                const beforeImg = project.querySelector(".img-before");
                if (beforeImg) {
                    gsap.set(beforeImg, { x: -60, opacity: 0 });
                    ScrollTrigger.create({
                        trigger: beforeImg, scroller, start: "top 88%", once: true,
                        onEnter: () => gsap.to(beforeImg, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }),
                    });
                }

                const afterImg = project.querySelector(".img-after");
                if (afterImg) {
                    gsap.set(afterImg, { x: 60, opacity: 0 });
                    ScrollTrigger.create({
                        trigger: afterImg, scroller, start: "top 88%", once: true,
                        onEnter: () => gsap.to(afterImg, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.15 }),
                    });
                }

                const pills = project.querySelectorAll(".improvement-pill");
                pills.forEach((pill, j) => {
                    gsap.set(pill, { scale: 0.7, opacity: 0 });
                    ScrollTrigger.create({
                        trigger: pill, scroller, start: "top 92%", once: true,
                        onEnter: () => gsap.to(pill, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.8)", delay: j * 0.08 }),
                    });
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
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── HEADER ── */}
                <div className="text-center mb-14">
                    <h2 ref={headingRef} className="font-serif text-4xl lg:text-6xl font-black text-[#0D1B6B] mt-6">
                        Keunggulan {" "}
                        <span className="bg-gradient-to-r from-[#D4A03C] to-[#E8C76A] bg-clip-text text-transparent">
                            DS Link
                        </span>
                    </h2>
                    <p ref={subheadRef} className="text-xl text-[#1A3A8F] max-w-2xl mx-auto mt-4">
                        Didukung ekosistem terpercaya, partner pembiayaan resmi, dan layanan yang benar-benar berpihak pada Anda.
                    </p>
                </div>

                {/* ── TRUST BAR — Partner Pembiayaan ── */}
                <div className="mb-14">
                    <p
                        ref={partnerLabelRef}
                        className="text-xs font-semibold tracking-widest uppercase text-[#1A3A8F]/40 text-center mb-6"
                    >
                        Partner Pembiayaan Resmi
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
    {partners.map((partner, i) => (
        <div
            key={i}
            ref={(el) => (partnerRefs.current[i] = el)}
            className="group relative cursor-default transition-all duration-300 hover:scale-110"
        >
            {/* Grayscale logo — default */}
            <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-auto object-contain grayscale opacity-30 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            />
        </div>
    ))}
</div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4A03C]/40 to-transparent mb-14" />

                {/* ── TRUST BADGES — 4 Keunggulan ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {trustBadges.map((badge, i) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={i}
                                ref={(el) => (badgeRefs.current[i] = el)}
                                className="rounded-2xl p-6 shadow-sm border border-[#0D1B6B]/10 bg-white hover:shadow-md hover:-translate-y-1 transition duration-300"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                        style={{ background: `linear-gradient(to bottom right, ${badge.colorFrom}, ${badge.colorTo})` }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="font-bold text-sm text-[#0D1B6B]">{badge.label}</span>
                                    <span className="text-xs text-[#1A3A8F]/60">{badge.desc}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── BEFORE AFTER PROJECTS ── */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div key={project.id} ref={(el) => (projectRefs.current[index] = el)}>

                            <div className="project-header mb-6">
                                <span className="px-4 py-1 rounded-full text-xs font-bold text-white bg-[#D4A03C]">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold mt-3 text-[#0D1B6B] font-serif">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="rounded-3xl shadow-lg overflow-hidden bg-white">
                                <div className="grid grid-cols-1 lg:grid-cols-2">

                                    <div className="img-before relative">
                                        <span className="absolute top-4 left-4 z-10 text-white text-xs px-3 py-1 rounded-full bg-[#0D1B6B]">
                                            SEBELUM
                                        </span>
                                        <ImageWithFallback src={project.before} alt="Before" className="w-full h-80 object-cover" />
                                    </div>

                                    <div className="img-after relative">
                                        <span className="absolute top-4 left-4 z-10 text-white text-xs px-3 py-1 rounded-full bg-[#D4A03C]">
                                            SESUDAH ✨
                                        </span>
                                        <ImageWithFallback src={project.after} alt="After" className="w-full h-80 object-cover" />
                                    </div>

                                </div>

                                <div className="p-8 bg-white">
                                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-[#0D1B6B]">
                                        <CheckCircle className="w-5 h-5 text-[#D4A03C]" />
                                        Yang Kami Kerjakan:
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                        {project.improvements.map((item, i) => (
                                            <div
                                                key={i}
                                                className="improvement-pill flex justify-center items-center gap-2 p-2 rounded-full border border-[#0D1B6B]/25 bg-[#0D1B6B]/5 text-[#0D1B6B]"
                                            >
                                                <span className="font-semibold">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BeforeAfterSection;