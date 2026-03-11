import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroVideo from "../../../../../assets/Example_Hero_Video.mp4";
import HeroThumbnail from "../../../../../assets/interior_1.jpg";
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
    const placeholderRef = useRef(null);
    const [videoReady, setVideoReady] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        const placeholder = placeholderRef.current;

        const handleCanPlay = () => {
            setVideoReady(true);
            gsap.to(video, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
            gsap.to(placeholder, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
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
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                videoRef.current,
                { scale: 1.15, opacity: 0 },
                { scale: 1, opacity: videoReady ? 1 : 0, duration: 1.8 }
            )
            .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.2")
            .fromTo(badgeRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
            .fromTo(
                headingRef.current,
                { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" },
                { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.9 },
                "-=0.2"
            )
            .fromTo(subtextRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
            .fromTo(
                buttonsRef.current.children,
                { y: 25, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.15 },
                "-=0.3"
            );

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
        const message = `Halo DS Link, saya [nama] dari [lokasi]. [pesan]. No HP: [telepon]`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section ref={sectionRef} id="hero" className="relative h-screen overflow-hidden">

            {/* Placeholder image */}
            <img
                ref={placeholderRef}
                src={HeroThumbnail}
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
            />

            {/* Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0, zIndex: 1 }}
            >
                <source src={HeroVideo} type="video/mp4" />
            </video>

            {/* Overlay — Navy gradient dari bawah untuk kedalaman */}
            <div
                ref={overlayRef}
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to bottom, rgba(13,27,107,0.55) 0%, rgba(0,0,0,0.70) 60%, rgba(0,0,102,0.80) 100%)",
                    zIndex: 2
                }}
            />

            <div className="relative flex px-10 items-center h-full" style={{ zIndex: 3 }}>
                <div className="px-6">

                    {/* Badge — Gold accent */}
                    <div
                        ref={badgeRef}
                        className="italic inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border text-sm font-medium backdrop-blur-sm"
                        style={{
                            borderColor: "rgba(212,160,60,0.45)",
                            backgroundColor: "rgba(212,160,60,0.12)",
                            color: "#E8C76A",
                        }}
                    >
                        <ImDiamonds className="w-4 h-4" style={{ color: "#D4A03C" }} />
                        Didukung penuh oleh Depo Pelita
                    </div>

                    {/* Heading — Gold gradient */}
                    <h1
                        ref={headingRef}
                        className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl py-6"
                    >
                        Punya Ruko Nganggur di Desa?{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(to right, #D4A03C, #E8C76A, #D4A03C)",
                            }}
                        >
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
                        {/* Primary CTA — Gold button */}
                        <button
                            onClick={handleWhatsapp}
                            className="active:scale-95 transition-all px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
                            style={{
                                background: "linear-gradient(to right, #D4A03C, #E8C76A)",
                                color: "#0D1B6B",
                                boxShadow: "0 8px 24px rgba(212,160,60,0.35)",
                            }}
                            onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.1)"}
                            onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                        >
                            Tanya Info Kemitraan →
                        </button>

                        {/* Secondary CTA — Navy border */}
                        <button
                            onClick={handleScrollFranchise}
                            className="active:scale-95 transition-all px-6 py-3 rounded-xl font-semibold border-2 text-white"
                            style={{
                                borderColor: "rgba(232,199,106,0.6)",
                                color: "#E8C76A",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = "rgba(232,199,106,0.12)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = "transparent";
                            }}
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