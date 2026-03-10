import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackground from "../../../../../assets/interior_2.jpg";
import { LuHammer, LuBriefcase } from "react-icons/lu";
import { IoTrendingUp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa";

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

            // Set initial state semua elemen
            gsap.set(imgRef.current, { scale: 1.12, opacity: 0 });
            gsap.set(badgeRef.current, { y: -30, opacity: 0 });
            gsap.set(headingRef.current, { y: 70, opacity: 0, clipPath: "inset(0 0 100% 0)" });
            gsap.set(subheadRef.current, { y: 30, opacity: 0 });
            gsap.set(statsRef.current, { y: 40, opacity: 0, scale: 0.95 });
            gsap.set(statItemRefs.current, { y: 20, opacity: 0 });
            gsap.set(visiRef.current, { x: -80, opacity: 0 });
            gsap.set(misiRef.current, { x: 80, opacity: 0 });

            // Satu timeline dari atas ke bawah — tidak ada ScrollTrigger
            // karena semua elemen ini berada dalam satu layar / hero section
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl
            // BG image
            .to(imgRef.current, { scale: 1, opacity: 0.4, duration: 2 }, 0)

            // Badge
            .to(badgeRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.4)

            // Heading
            .to(headingRef.current, {
                y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1,
            }, 0.65)

            // Subtext
            .to(subheadRef.current, { y: 0, opacity: 1, duration: 0.7 }, 0.95)

            // Stats box
            .to(statsRef.current, {
                y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.4)",
            }, 1.15)

            // Stat items stagger
            .to(statItemRefs.current, {
                y: 0, opacity: 1, duration: 0.5, stagger: 0.15,
            }, 1.35)

            // Visi dari kiri
            .to(visiRef.current, { x: 0, opacity: 1, duration: 0.8 }, 1.6)

            // Misi dari kanan, sedikit setelah visi
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
            <div className="absolute inset-0">
                <img
                    ref={imgRef}
                    src={HeroBackground}
                    alt="About Background"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-white" />
            </div>

            <div className="relative z-10">

                <span ref={badgeRef} className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur">
                    TENTANG DS LINK
                </span>

                <h1 ref={headingRef} className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                    Solusi Kebutuhan <br />Rumah,{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        Jadi Mudah
                    </span>
                </h1>

                <p ref={subheadRef} className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                    DS Link hadir untuk membantu Anda mewujudkan rumah yang lebih nyaman,
                    modern, dan siap digunakan dengan paket upgrade yang transparan dan profesional.
                </p>

                <div className="flex flex-col justify-center items-center space-y-20 mt-14">

                    {/* Stats */}
                    <div
                        ref={statsRef}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 px-6 bg-gradient-to-br from-blue-200/30 to-white/10 rounded-xl border border-white/50 w-full md:w-3/4 shadow-lg shadow-white/20"
                    >
                        {[
                            { icon: <FaHistory className="w-10 h-10 md:w-12 md:h-12" />, value: "25+", label: "Tahun Ekosistem Depo Pelita" },
                            { icon: <FaMapMarkerAlt className="w-10 h-10 md:w-12 md:h-12" />, value: "940+", label: "Desa Potensial" },
                            { icon: <FaCreditCard className="w-10 h-10 md:w-12 md:h-12" />, value: "6", label: "Partner Pembiayaan Resmi" },
                            // { icon: <IoTrendingUp className="w-10 h-10 md:w-12 md:h-12" />, value: "6", label: "Partner Pembiayaan Resmi" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => (statItemRefs.current[i] = el)}
                                className="flex items-center justify-center gap-3 text-center sm:text-left"
                            >
                                {item.icon}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold">{item.value}</h3>
                                    <p className="text-white/80 text-sm mt-1">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Visi & Misi */}
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                        <div ref={visiRef} className="bg-gray-50 rounded-2xl p-10 border-2 border-gray-200 hover:shadow-md hover:border-blue-300 transition duration-300 hover:-translate-y-2">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-200 mb-8">
                                <MdOutlineRemoveRedEye className="text-blue-500 text-xl" />
                            </div>
                            <h3 className="text-2xl font-extrabold italic text-gray-900 mb-6">Visi Kami</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Menjadi solusi terpercaya untuk kebutuhan upgrade rumah,
                                menghadirkan kenyamanan dan kualitas hidup yang lebih baik
                                bagi setiap keluarga.
                            </p>
                        </div>

                        <div ref={misiRef} className="bg-gray-50 rounded-2xl p-10 border-2 border-gray-200 hover:shadow-md hover:border-blue-300 transition duration-300 hover:-translate-y-2">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-200 mb-8">
                                <FaBullseye className="text-orange-500 text-xl" />
                            </div>
                            <h3 className="text-2xl font-extrabold italic text-gray-900 mb-6">Misi Kami</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
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