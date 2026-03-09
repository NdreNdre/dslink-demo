import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiSearch } from "react-icons/ci";
import { BsClipboardCheck } from "react-icons/bs";
import { LuHammer, LuShield } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        icon: <CiSearch className="w-12 h-12" />,
        number: 1,
        title: "Konsultasi",
        desc: "Diskusi kebutuhan dan budget Anda dengan tim kami",
        gradient: "from-blue-400 via-blue-500 to-blue-700",
    },
    {
        icon: <BsClipboardCheck className="w-12 h-12" />,
        number: 2,
        title: "Survey & Penyesuaian",
        desc: "Survey lokasi dan penyesuaian paket sesuai kondisi rumah",
        gradient: "from-blue-400 via-blue-500 to-blue-700",
    },
    {
        icon: <LuHammer className="w-12 h-12" />,
        number: 3,
        title: "Instalasi",
        desc: "Proses instalasi profesional oleh teknisi berpengalaman",
        gradient: "from-blue-400 via-blue-500 to-blue-700",
    },
    {
        icon: <LuShield className="w-12 h-12" />,
        number: 4,
        title: "Dokumentasi & Garansi",
        desc: "Serah terima lengkap dengan dokumentasi dan garansi resmi",
        gradient: "from-yellow-400 via-amber-500 to-orange-600",
    },
];

const WorkStep = () => {
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const lineRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {
            // ── 1. HEADING ────────────────────────────────────────────────────
            gsap.set([headingRef.current, subheadRef.current], { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller,
                start: "top 88%",
                once: true,
                onEnter: () => {
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.15 });
                },
            });

            // ── 2. CONNECTOR LINE — tumbuh dari kiri ke kanan ─────────────────
            gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
            ScrollTrigger.create({
                trigger: lineRef.current,
                scroller,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    gsap.to(lineRef.current, { scaleX: 1, duration: 1.2, ease: "power2.inOut", delay: 0.3 });
                },
            });

            // ── 3. CARDS — stagger masuk dari bawah, satu per satu ───────────
            cardRefs.current.forEach((card, i) => {
                if (!card) return;
                gsap.set(card, { y: 60, opacity: 0 });
                ScrollTrigger.create({
                    trigger: card,
                    scroller,
                    start: "top 88%",
                    once: true,
                    onEnter: () => {
                        gsap.to(card, {
                            y: 0,
                            opacity: 1,
                            duration: 0.65,
                            ease: "power3.out",
                            delay: i * 0.12, // stagger manual
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
        <section id="cara-kerja" className="py-24 bg-gradient-to-br from-blue-300 to-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold leading-tight">
                        Proses yang Jelas & Transparan
                    </h2>
                    <p ref={subheadRef} className="mt-4 text-blue-100 text-lg">
                        4 langkah mudah menuju rumah impian Anda
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-20 grid md:grid-cols-4 gap-12 relative">

                    {/* Connector line — tumbuh saat scroll */}
                    <div
                        ref={lineRef}
                        className="hidden md:block absolute top-10 left-0 w-full h-1 bg-white/10"
                    />

                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            ref={(el) => (cardRefs.current[i] = el)}
                            className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/20 hover:-translate-y-2 transition duration-300"
                        >
                            <div className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tl ${step.gradient} flex items-center justify-center shadow-lg shadow-blue-900/40`}>
                                {step.icon}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-blue-600 shadow shadow-black/20 flex items-center justify-center text-sm font-bold">
                                    {step.number}
                                </div>
                            </div>

                            <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                            <p className="mt-3 text-blue-100 text-sm">{step.desc}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WorkStep;