import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useListPackageStore } from "../../stores/listPackage.store";

const Hero = () => {
    const activeCategory = useListPackageStore((state) => state.activeCategory);
    const categories = useListPackageStore((state) => state.categories);

    const activeData = categories.find((cat) => cat.name === activeCategory);

    const imgRef = useRef(null);
    const overlayRef = useRef(null);
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const taglineRef = useRef(null);

    // Jalankan entrance setiap kali activeCategory berubah
    useEffect(() => {
        const ctx = gsap.context(() => {

            // Reset dulu ke state awal
            gsap.set(imgRef.current, { scale: 1.1, opacity: 0 });
            gsap.set([headingRef.current, subheadRef.current, taglineRef.current], { y: 0, opacity: 0 });

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // BG image zoom out
            tl.to(imgRef.current, { scale: 1, opacity: 1, duration: 0.9 }, 0)

            // Overlay fade in
            .to(overlayRef.current, { opacity: 1, duration: 0.6 }, 0)

            // Heading reveal
            .fromTo(headingRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.65 },
                0.3
            )

            // Subhead
            .fromTo(subheadRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.55 },
                0.5
            )

            // Tagline
            .fromTo(taglineRef.current,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                0.65
            );
        });

        return () => ctx.revert();
    }, [activeCategory]); // re-animate saat kategori berubah

    return (
        <section className="relative h-[420px] flex items-center justify-center text-center">

            <img
                ref={imgRef}
                src={activeData.imgSrc}
                alt={activeData.heading}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0 }}
            />

            <div ref={overlayRef} className="absolute inset-0 bg-black/60" style={{ opacity: 0 }} />

            <div className="relative z-10 px-6">
                <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold text-white">
                    {activeData.heading}
                </h1>

                <p ref={subheadRef} className="text-slate-200 mt-4 text-lg">
                    {activeData.subHeading}
                </p>

                <p ref={taglineRef} className="text-amber-400 mt-6 font-medium">
                    Solusi Kebutuhan Rumah Jadi Mudah
                </p>
            </div>

        </section>
    );
};

export default Hero;