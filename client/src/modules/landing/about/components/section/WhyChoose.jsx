import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        border: "border-blue-500",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        btnColor: "text-blue-600",
        icon: "📦",
        title: "Paket Terbundel",
        subtitle: "Hemat • Praktis • Lengkap",
        desc: "Pilih paket terbaik untuk Kamar Mandi, Dapur, dan Kamar Tidur yang sesuai dengan kebutuhan dan anggaran Anda.",
        from: { x: -70, opacity: 0 }, // slide dari kiri
    },
    {
        border: "border-emerald-500",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        btnColor: "text-emerald-600",
        icon: "🛡️",
        title: "Profesional & Rapi",
        subtitle: "Tim Bersertifikat",
        desc: "Instalasi rapi dan terjamin dengan dokumentasi sebelum-sesudah, dikerjakan oleh tenaga profesional berpengalaman.",
        from: { y: 70, opacity: 0 }, // slide dari bawah
    },
    {
        border: "border-purple-500",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        btnColor: "text-purple-600",
        icon: "💳",
        title: "Cicilan Mudah",
        subtitle: "Pembayaran Fleksibel",
        desc: "Skema pembayaran sederhana bekerja sama dengan bank dan fintech terpercaya agar rumah impian lebih terjangkau.",
        from: { x: 70, opacity: 0 }, // slide dari kanan
    },
];

const WhyChooseSection = () => {
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // ── 1. HEADING & SUBTEXT ──────────────────────────────────────────
            gsap.set([headingRef.current, subheadRef.current], { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.15 });
                },
            });

            // ── 2. CARDS — kiri dari kiri, tengah dari bawah, kanan dari kanan
            cardRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, cards[i].from);
                ScrollTrigger.create({
                    trigger: el,
                    scroller, start: "top 88%", once: true,
                    onEnter: () => {
                        gsap.to(el, {
                            x: 0, y: 0, opacity: 1,
                            duration: 0.75, ease: "power3.out",
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
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

                <h2 ref={headingRef} className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
                    Mengapa Memilih DS LINK?
                </h2>

                <p ref={subheadRef} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Solusi lengkap, pengerjaan berkualitas, dan pembiayaan yang mudah diakses.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardRefs.current[i] = el)}
                            className={`bg-white rounded-xl shadow-md p-8 border-t-4 ${card.border} hover:shadow-lg hover:-translate-y-1 transition duration-300`}
                        >
                            <div className={`w-12 h-12 ${card.iconBg} ${card.iconColor} flex items-center justify-center rounded-lg mb-6`}>
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                            <p className="text-sm text-slate-500 mt-1">{card.subtitle}</p>
                            <p className="mt-4 text-slate-600 leading-relaxed">{card.desc}</p>
                            <button className={`mt-6 ${card.btnColor} font-medium flex items-center gap-2 hover:gap-3 transition-all`}>
                                Pelajari lebih lanjut →
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseSection;