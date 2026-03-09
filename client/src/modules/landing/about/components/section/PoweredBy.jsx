import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiMedal } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

const PoweredBy = () => {
    const cardRef = useRef(null);
    const iconRef = useRef(null);
    const textBlockRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // ── 1. CARD WRAPPER — fade in dari bawah sebagai satu unit ────────
            gsap.set(cardRef.current, { y: 60, opacity: 0 });
            ScrollTrigger.create({
                trigger: cardRef.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(cardRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                },
            });

            // ── 2. ICON — pop in dengan bounce setelah card masuk ─────────────
            gsap.set(iconRef.current, { scale: 0, opacity: 0, rotation: -20 });
            ScrollTrigger.create({
                trigger: iconRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(iconRef.current, {
                        scale: 1, opacity: 1, rotation: 0,
                        duration: 0.65, ease: "back.out(1.8)", delay: 0.2,
                    });
                },
            });

            // ── 3. LEFT TEXT — stagger per paragraf dari kiri ─────────────────
            const textEls = textBlockRef.current?.querySelectorAll("p");
            textEls?.forEach((el, i) => {
                gsap.set(el, { x: -40, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el,
                    scroller, start: "top 90%", once: true,
                    onEnter: () => {
                        gsap.to(el, {
                            x: 0, opacity: 1,
                            duration: 0.65, ease: "power3.out",
                            delay: i * 0.15,
                        });
                    },
                });
            });

            // ── 4. IMAGE — slide dari kanan dengan scale subtle ───────────────
            gsap.set(imageRef.current, { x: 70, opacity: 0, scale: 1.05 });
            ScrollTrigger.create({
                trigger: imageRef.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(imageRef.current, {
                        x: 0, opacity: 1, scale: 1,
                        duration: 0.9, ease: "power3.out", delay: 0.1,
                    });
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
        <section className="bg-gray-100 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <div
                    ref={cardRef}
                    className="bg-white rounded-3xl border border-gray-200 overflow-hidden grid md:grid-cols-2"
                >

                    {/* LEFT CONTENT */}
                    <div className="p-10 md:p-14 flex flex-col justify-center">

                        <div className="flex items-center gap-6 mb-8">
                            <div
                                ref={iconRef}
                                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center"
                            >
                                <CiMedal className="text-white w-12 h-12" />
                            </div>
                            <div>
                                <p className="text-black text-sm">Powered by</p>
                                <h3 className="text-blue-500 text-4xl font-bold">Depo Pelita</h3>
                            </div>
                        </div>

                        <div ref={textBlockRef}>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                DS Link adalah bagian dari ekosistem Depo Pelita yang telah
                                berpengalaman puluhan tahun dalam industri material bangunan.
                                Dengan dukungan infrastruktur dan jaringan yang kuat, kami hadir
                                untuk memberikan solusi yang lebih lengkap dan terintegrasi.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Kehadiran DS Link adalah bentuk komitmen kami untuk tidak hanya
                                menjual produk, tetapi menjadi partner terpercaya dalam
                                mewujudkan rumah impian masyarakat Indonesia.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div ref={imageRef} className="h-96 md:h-auto overflow-hidden">
                        <img
                            src="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.82787-15/618877403_18009532775819662_9170569843964346952_n.webp?_nc_cat=104&ig_cache_key=MzA0NDQzOTYzODE5NTExNDI2Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=HFwJ_z-_HCQQ7kNvwHvMdIp&_nc_oc=Adnhnuqh-8ridOyaccy4dggGFNTIGrU-AekXDPazBg93BdAWD4gFyxkFo1ZbTXuQ9rLz88eqSC5i3Y6jH4bMaYTH&_nc_ad=z-m&_nc_cid=1225&_nc_zt=23&_nc_ht=instagram.fcgk9-2.fna&_nc_gid=iJqyagO99Eh-W5LqFYleTA&_nc_ss=8&oh=00_AfyN-_LxYjqBiXyId-_A1jzGY_k3mWZUNsjcORgWZQ0TJQ&oe=69ACF703"
                            alt="Depo Pelita"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PoweredBy;