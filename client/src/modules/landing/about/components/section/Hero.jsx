import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackground from "../../../../../assets/interior_2.jpg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaBullseye, FaHistory, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const badgeRef = useRef(null);
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const statsRef = useRef(null);
    const statItemRefs = useRef([]);
    const visiRef = useRef(null);
    const misiRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const scroller = document.querySelector("main");
        ScrollTrigger.defaults({ scroller });

        const ctx = gsap.context(() => {

            gsap.set(imgRef.current, { scale: 1.12, opacity: 0 });
            gsap.set(badgeRef.current, { y: -30, opacity: 0 });
            gsap.set(headingRef.current, { y: 70, opacity: 0, clipPath: "inset(0 0 100% 0)" });
            gsap.set(subheadRef.current, { y: 30, opacity: 0 });
            gsap.set(statsRef.current, { y: 40, opacity: 0, scale: 0.95 });
            gsap.set(statItemRefs.current, { y: 20, opacity: 0 });
            gsap.set(visiRef.current, { x: -80, opacity: 0 });
            gsap.set(misiRef.current, { x: 80, opacity: 0 });

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl
            .to(imgRef.current, { scale: 1, opacity: 0.4, duration: 2 }, 0)
            .to(badgeRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.4)
            .to(headingRef.current, { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1 }, 0.65)
            .to(subheadRef.current, { y: 0, opacity: 1, duration: 0.7 }, 0.95)
            .to(statsRef.current, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.4)" }, 1.15)
            .to(statItemRefs.current, { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 }, 1.35)
            .to(visiRef.current, { x: 0, opacity: 1, duration: 0.8 }, 1.6)
            .to(misiRef.current, { x: 0, opacity: 1, duration: 0.8 }, 1.75);

        });

        return () => {
            ctx.revert();
            ScrollTrigger.defaults({ scroller: window });
        };
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-start justify-center text-center py-24 px-6"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    ref={imgRef}
                    src={HeroBackground}
                    alt="About Background"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0 }}
                />
                {/* Overlay: Navy gradient dari atas, fade ke Cream di bawah */}
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(13,27,107,0.00) 0%, rgba(5,13,53,0.5) 40%, #FAF9F6 100%)" }}
                />
            </div>

            <div className="relative z-10 w-full">

                {/* Badge */}
                <span
                    ref={badgeRef}
                    className="inline-block mb-6 px-4 py-1 text-sm rounded-full backdrop-blur"
                    style={{
                        backgroundColor: "rgba(212,160,60,0.15)",
                        border: "1px solid rgba(212,160,60,0.4)",
                        color: "#E8C76A",
                    }}
                >
                    TENTANG DS LINK
                </span>

                {/* Heading */}
                <h1 ref={headingRef} className="text-6xl md:text-8xl font-bold leading-tight mb-6 text-white">
                    Solusi Kebutuhan <br />Rumah,{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(to right, #D4A03C, #E8C76A)" }}
                    >
                        Jadi Mudah
                    </span>
                </h1>

                {/* Subheading */}
                <p ref={subheadRef} className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
                    DS Link hadir untuk membantu Anda mewujudkan rumah yang lebih nyaman,
                    modern, dan siap digunakan dengan paket upgrade yang transparan dan profesional.
                </p>

                <div className="flex flex-col justify-center items-center space-y-20 mt-14">

                    {/* Stats */}
                    <div
                        ref={statsRef}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 px-6 rounded-xl w-full md:w-2/4 shadow-lg"
                        style={{
                            background: "linear-gradient(to bottom right, rgba(13,27,107,0.45), rgba(0,0,102,0.3))",
                            border: "1px solid rgba(212,160,60,0.3)",
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        {[
                            { icon: <FaHistory className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#D4A03C" }} />, value: "25+", label: "Tahun Ekosistem Depo Pelita" },
                            { icon: <FaMapMarkerAlt className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#D4A03C" }} />, value: "940+", label: "Desa Potensial" },
                            { icon: <FaCreditCard className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#D4A03C" }} />, value: "6", label: "Partner Pembiayaan Resmi" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => (statItemRefs.current[i] = el)}
                                className="flex items-center justify-center gap-3 text-center sm:text-left"
                            >
                                {item.icon}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{item.value}</h3>
                                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Visi & Misi */}
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 w-full">

                        {/* Visi */}
                        <div
                            ref={visiRef}
                            className="rounded-2xl p-10 border-2 transition duration-300 hover:-translate-y-2"
                            style={{
                                backgroundColor: "white",
                                borderColor: "rgba(13,27,107,0.12)",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = "#D4A03C";
                                e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,160,60,0.15)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = "rgba(13,27,107,0.12)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-full mb-8"
                                style={{ backgroundColor: "rgba(13,27,107,0.08)" }}
                            >
                                <MdOutlineRemoveRedEye className="text-xl" style={{ color: "#0D1B6B" }} />
                            </div>
                            <h3 className="text-2xl font-extrabold italic mb-6" style={{ color: "#0D1B6B" }}>
                                Visi Kami
                            </h3>
                            <p className="leading-relaxed text-lg" style={{ color: "#1A3A8F" }}>
                                Menjadi solusi terpercaya untuk kebutuhan upgrade rumah,
                                menghadirkan kenyamanan dan kualitas hidup yang lebih baik
                                bagi setiap keluarga.
                            </p>
                        </div>

                        {/* Misi */}
                        <div
                            ref={misiRef}
                            className="rounded-2xl p-10 border-2 transition duration-300 hover:-translate-y-2"
                            style={{
                                backgroundColor: "white",
                                borderColor: "rgba(13,27,107,0.12)",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = "#D4A03C";
                                e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,160,60,0.15)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = "rgba(13,27,107,0.12)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-full mb-8"
                                style={{ backgroundColor: "rgba(212,160,60,0.12)" }}
                            >
                                <FaBullseye className="text-xl" style={{ color: "#D4A03C" }} />
                            </div>
                            <h3 className="text-2xl font-extrabold italic mb-6" style={{ color: "#0D1B6B" }}>
                                Misi Kami
                            </h3>
                            <p className="leading-relaxed text-lg" style={{ color: "#1A3A8F" }}>
                                Menyediakan paket renovasi dan instalasi yang transparan,
                                efisien, dan profesional, sehingga pelanggan dapat menikmati
                                hasil maksimal tanpa proses yang rumit.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;