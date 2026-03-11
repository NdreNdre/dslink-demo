import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamImage2 from "../../../../../assets/team_2.jpg";
import Interior1 from "../../../../../assets/interior_1.jpg";
import Interior2 from "../../../../../assets/interior_3.jpg";

gsap.registerPlugin(ScrollTrigger);

const principles = [
    { icon: "👤", title: "ATTITUDE", desc: "Profesional, disiplin, dan berorientasi solusi dalam setiap proyek." },
    { icon: "🛡", title: "INTEGRITY", desc: "Transparansi dan kejujuran menjadi dasar hubungan dengan klien." },
    { icon: "🎯", title: "OWNERSHIP", desc: "Bertanggung jawab penuh terhadap hasil dan kualitas pekerjaan." },
    { icon: "🤝", title: "SYNERGY", desc: "Kolaborasi yang solid menghasilkan solusi terbaik untuk klien." },
];

const Culture = () => {
    const lineRef = useRef(null);
    const labelRef = useRef(null);
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const cardRefs = useRef([]);
    const imgTallRef = useRef(null);
    const imgTopRef = useRef(null);
    const imgBottomRef = useRef(null);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // ── 1. ORANGE LINE & LABEL ────────────────────────────────────────
            gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top center" });
            gsap.set(labelRef.current, { x: -20, opacity: 0 });
            ScrollTrigger.create({
                trigger: lineRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(lineRef.current, { scaleY: 1, duration: 0.4, ease: "power2.out" });
                    gsap.to(labelRef.current, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 });
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

            // ── 3. PRINCIPLE CARDS — stagger dari bawah ──────────────────────
            cardRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 50, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el,
                    scroller, start: "top 90%", once: true,
                    onEnter: () => {
                        gsap.to(el, {
                            y: 0, opacity: 1,
                            duration: 0.6, ease: "power3.out",
                            delay: i * 0.1,
                        });
                    },
                });
            });

            // ── 4. IMAGES — tall image dari kanan, dua kecil stagger dari kanan
            gsap.set(imgTallRef.current, { x: 80, opacity: 0 });
            ScrollTrigger.create({
                trigger: imgTallRef.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(imgTallRef.current, { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" });
                },
            });

            gsap.set(imgTopRef.current, { x: 60, opacity: 0 });
            ScrollTrigger.create({
                trigger: imgTopRef.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(imgTopRef.current, { x: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.15 });
                },
            });

            gsap.set(imgBottomRef.current, { x: 60, opacity: 0 });
            ScrollTrigger.create({
                trigger: imgBottomRef.current,
                scroller, start: "top 90%", once: true,
                onEnter: () => {
                    gsap.to(imgBottomRef.current, { x: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.3 });
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
        <section className="bg-gradient-to-b from-white to-gray-100 text-black py-24 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                {/* LEFT — konten */}
                <div>
                    <div className="flex items-center space-x-2">
                        <div ref={lineRef} className="w-0.5 bg-blue-500 h-10" />
                        <span ref={labelRef} className="text-sm font-semibold text-blue-500 tracking-wider">
                            Kebudayaan Kami
                        </span>
                    </div>

                    <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Prinsip Utama <span className="text-blue-500">Kami</span>
                    </h2>

                    <p ref={subheadRef} className="text-gray-500 max-w-md mb-10">
                        Nilai-nilai yang menjadi fondasi DS Link dalam bekerja,
                        melayani pelanggan, dan membangun kepercayaan jangka panjang.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {principles.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => (cardRefs.current[i] = el)}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
                            >
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT — images */}
                <div className="grid grid-cols-2 gap-6">

                    <div ref={imgTallRef} className="row-span-2 rounded-3xl overflow-hidden shadow-lg">
                        <img src={Interior2} alt="Team" className="w-full h-full object-cover" />
                    </div>

                    <div ref={imgTopRef} className="rounded-3xl overflow-hidden shadow-lg">
                        <img src={Interior1} alt="Work" className="w-full h-full object-cover" />
                    </div>

                    <div ref={imgBottomRef} className="rounded-3xl overflow-hidden shadow-lg">
                        <img src={TeamImage2} alt="Planning" className="w-full h-full object-cover" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Culture;