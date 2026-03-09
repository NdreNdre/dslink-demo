import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroVideo from "../../../../../assets/Example_Hero_Video.mp4";

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

    useEffect(() => {
        const scroller = document.querySelector("main");

        // Kasih tau ScrollTrigger bahwa scroll container bukan window
        ScrollTrigger.defaults({ scroller });

        const ctx = gsap.context(() => {

            // ── 1. ENTRANCE ANIMATION (on page load) ─────────────────────────
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                videoRef.current,
                { scale: 1.15, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.8 }
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

            // ── 3. SCROLL FADE OUT ────────────────────────────────────────────
            // gsap.to([headingRef.current, subtextRef.current, buttonsRef.current], {
            //     y: -50,
            //     opacity: 0,
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: sectionRef.current,
            //         start: "20% top",
            //         end: "60% top",
            //         scrub: true,
            //     },
            // });

            // ── 4. OVERLAY DARKENS ────────────────────────────────────────────
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
            // Reset defaults agar tidak bocor ke komponen lain
            ScrollTrigger.defaults({ scroller: window });
        };
    }, []);

    return (
        <section ref={sectionRef} id="hero" className="relative h-screen overflow-hidden">

            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={HeroVideo} type="video/mp4" />
            </video>

            <div ref={overlayRef} className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 flex px-10 items-center h-full bg-black/20">
                <div className="px-6">

                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-sm font-medium backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        Solusi Upgrade Rumah #1 Indonesia
                    </div>

                    <h1
                        ref={headingRef}
                        className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
                    >
                        Upgrade Rumah Jadi Mudah.{" "}
                        <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                            Bangun Usaha Tanpa Mulai dari Nol.
                        </span>
                    </h1>

                    <p
                        ref={subtextRef}
                        className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl"
                    >
                        Paket upgrade rumah lengkap dengan cicilan mudah, instalasi profesional,
                        dan garansi terpercaya. Dari kamar mandi hingga dapur, semua jadi lebih praktis.
                    </p>

                    <div
                        ref={buttonsRef}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={handleScrollPaket}
                            className="bg-gradient-to-r from-amber-500 to-[#FF7A00] hover:brightness-110 active:scale-95 transition-all px-6 py-3 rounded-xl font-semibold text-white shadow-lg shadow-orange-500/30"
                        >
                            Lihat Paket Upgrade →
                        </button>

                        <button
                            onClick={handleScrollFranchise}
                            className="border-2 border-white text-white hover:bg-white/20 active:scale-95 transition-all px-6 py-3 rounded-xl font-semibold"
                        >
                            Jadi Mitra DS Link
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HeroSection;