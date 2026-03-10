import { useEffect, useRef, useState } from "react";  // tambah useState
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroVideo from "../../../../../assets/Example_Hero_Video.mp4";
import HeroThumbnail from "../../../../../assets/interior_1.jpg"; // 👈 tambah ini
import { ImDiamonds } from "react-icons/im";

gsap.registerPlugin(ScrollTrigger);

const handleScrollPaket = () => {
    const element = document.getElementById("paket");
    element?.scrollIntoView({ behavior: "smooth" });
};

const handleScrollFranchise = () => {
    const element = document.getElementById("franchise");
    element?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const overlayRef = useRef(null);
    const headingRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonsRef = useRef(null);
    const badgeRef = useRef(null);
    const placeholderRef = useRef(null); // 👈 tambah ini
    const [videoReady, setVideoReady] = useState(false); // 👈 tambah ini

    useEffect(() => {
        const video = videoRef.current;
        const placeholder = placeholderRef.current;

        // Ketika video sudah cukup di-buffer untuk diplay
        const handleCanPlay = () => {
            setVideoReady(true);

            // Fade in video, fade out placeholder secara smooth
            gsap.to(video, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
            gsap.to(placeholder, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    // Hapus dari DOM setelah transisi selesai
                    if (placeholder) placeholder.style.display = "none";
                },
            });
        };

        video.addEventListener("canplay", handleCanPlay);
        return () => video.removeEventListener("canplay", handleCanPlay);
    }, []);

    useEffect(() => {
        const scroller = document.querySelector("main");
        ScrollTrigger.defaults({ scroller });

        const ctx = gsap.context(() => {

            // ── 1. ENTRANCE ANIMATION ─────────────────────────────────────────
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                videoRef.current,
                { scale: 1.15, opacity: 0 },  // opacity 0 by default, gsap yang handle
                { scale: 1, opacity: videoReady ? 1 : 0, duration: 1.8 }
                //                              👆 kalau belum ready, tetap 0 dulu
            )
            .fromTo(
                overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1 },
                "-=1.2"
            )
            .fromTo(
                badgeRef.current,
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.4"
            )
            .fromTo(
                headingRef.current,
                { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" },
                { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.9 },
                "-=0.2"
            )
            .fromTo(
                subtextRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                "-=0.4"
            )
            .fromTo(
                buttonsRef.current.children,
                { y: 25, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.15 },
                "-=0.3"
            );

            // ── 2. SCROLL PARALLAX ────────────────────────────────────────────
            gsap.to(videoRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // ── 3. OVERLAY DARKENS ────────────────────────────────────────────
            gsap.to(overlayRef.current, {
                backgroundColor: "rgba(0,0,0,0.85)",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.defaults({ scroller: window });
        };
    }, []);

    const handleWhatsapp = () => {
        const phone = "628139120388";
        // const phone = "6281391200388";
        const message = `Halo DS Link, saya [nama] dari [lokasi]. [pesan]. No HP: [telepon]`
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section ref={sectionRef} id="hero" className="relative h-screen overflow-hidden">

            {/* 👇 PLACEHOLDER IMAGE — tampil duluan sebelum video ready */}
            <img
                ref={placeholderRef}
                src={HeroThumbnail}
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
            />

            {/* Video — opacity 0 dulu, baru fade in setelah canplay */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0, zIndex: 1 }} // 👈 mulai dari opacity 0
            >
                <source src={HeroVideo} type="video/mp4" />
            </video>

            <div ref={overlayRef} className="absolute inset-0 bg-black/70" style={{ zIndex: 2 }}></div>

            <div className="relative flex px-10 items-center h-full bg-black/20" style={{ zIndex: 3 }}>
                <div className="px-6">

                    <div
                        ref={badgeRef}
                        className="italic inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-sm font-medium backdrop-blur-sm"
                    >
                        {/* <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" /> */}
                        <ImDiamonds className="w-4 h-4 text-amber-400 italic"></ImDiamonds>
                        Didukung penuh oleh Depo Pelita
                    </div>
                    

                    <h1
                        ref={headingRef}
                        className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl py-6"
                    >
                        Punya Ruko Nganggur di Desa?{" "}
                        <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                            Sulap Jadi Bisnis yang Langsung Jalan.
                        </span>
                    </h1>

                    <p
                        ref={subtextRef}
                        className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl"
                    >
                        Franchise DS Link — toko elektronik, furniture & kebutuhan rumah dengan sistem siap pakai. Supply chain dari Depo Pelita, 6 partner cicilan, dan 5 program inovasi yang bikin outlet Anda bukan sekadar toko — tapi pusat solusi rumah di desa.
                    </p>

                    <div
                        ref={buttonsRef}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={handleScrollPaket}
                            className="bg-gradient-to-r from-amber-500 to-[#FF7A00] hover:brightness-110 active:scale-95 transition-all px-6 py-3 rounded-xl font-semibold text-white shadow-lg shadow-orange-500/30" onClickCapture={handleWhatsapp}
                        >
                            Tanya Info Kemitraan →
                        </button>

                        <button
                            onClick={handleScrollFranchise}
                            className="border-2 border-white text-white hover:bg-white/20 active:scale-95 transition-all px-6 py-3 rounded-xl font-semibold"
                        >
                            Lihat Paket Franchise
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HeroSection;