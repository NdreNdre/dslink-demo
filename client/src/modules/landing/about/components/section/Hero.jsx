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
                <h1 ref={headingRef} className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-6 text-white">
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
    className="px-6 md:px-12 py-6 rounded-2xl flex flex-col sm:flex-row gap-6 sm:gap-0 shadow-lg w-full max-w-xl sm:max-w-none sm:w-auto bg-gradient-to-br from-[#0D1B6B]/45 to-[#000066]/30 border border-[#D4A03C]/30 backdrop-blur-md"
>
    {[
        { icon: FaHistory,      value: "25+",  label: "Tahun Ekosistem Depo Pelita" },
        { icon: FaMapMarkerAlt, value: "940+", label: "Desa Potensial di Jawa Tengah" },
        { icon: FaCreditCard,   value: "8",    label: "Partner Pembiayaan Resmi" },
    ].map((item, i) => {
        const Icon = item.icon;
        return (
            <div key={i} className="flex items-center sm:px-10">

                {/* Divider kiri — muncul mulai item ke-2 */}
                {i > 0 && (
                    <div className="">
                        {/* Vertical divider desktop */}
                        <div className="hidden sm:block w-px h-12 bg-[#D4A03C]/25 mr-10 flex-shrink-0" />
                        {/* Horizontal divider mobile */}
                        <div className="block sm:hidden h-px w-full bg-[#D4A03C]/25 absolute left-0 -top-3" />
                    </div>
                )}

                <div
                    key={i}
                    ref={(el) => (statItemRefs.current[i] = el)}
                    className="flex items-center  gap-4 w-full"
                >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#D4A03C]/15 border border-[#D4A03C]/25 flex-shrink-0">
                        <Icon className="text-[#D4A03C] w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white text-left md:text-center">{item.value}</div>
                        <div className="text-xs text-white/60 leading-snug md:max-w-[120px]">{item.label}</div>
                    </div>
                </div>

            </div>
        );
    })}
</div>

                    {/* Visi & Misi */}
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 w-full">

                        {/* Visi */}
                        <div
                            ref={visiRef}
                            className="rounded-2xl p-10 border-2 transition duration-300 hover:-translate-y-2 "
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
                            <div className="w-full flex items-center justify-center">
                                <div
                                    className="w-14 h-14 flex items-center justify-center rounded-full mb-8 bg-black"
                                    style={{ backgroundColor: "rgba(13,27,107,0.08)" }}
                                >
                                    <MdOutlineRemoveRedEye className="text-xl" style={{ color: "#0D1B6B" }} />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-extrabold italic mb-6" style={{ color: "#0D1B6B" }}>
                                Visi Kami
                            </h3>
                            <p className="leading-relaxed text-lg" style={{ color: "#1A3A8F" }}>
                                Menjadi jaringan toko solusi kebutuhan rumah paling dipercaya di desa-desa sekitar Depo Pelita, yang membuat upgrade rumah terasa mudah, rapi, aman, dan terjangkau (cash maupun cicilan).
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
                            <div className="flex justify-center items-center">
                                <div
                                    className="w-14 h-14 flex items-center justify-center rounded-full mb-8"
                                    style={{ backgroundColor: "rgba(212,160,60,0.12)" }}
                                >
                                    <FaBullseye className="text-xl" style={{ color: "#D4A03C" }} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-extrabold italic mb-6" style={{ color: "#0D1B6B" }}>
                                Misi Kami
                            </h3>
                            <p className="leading-relaxed text-lg" style={{ color: "#1A3A8F" }}>
                                Mengembangkan ekosistem mitra lokal sebagai sumber referral sekaligus membangun sistem franchise yang sederhana, terstandar, dan mudah dijalankan sehingga dapat berkembang dan direplikasi di berbagai daerah.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;