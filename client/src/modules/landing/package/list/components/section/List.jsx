import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useListPackageStore } from "../../stores/listPackage.store";
import { useDetailPackageStore } from "../../../detail/stores/detailPackage.store";

import { FaCheck } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { LuCrown } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const List = () => {
    const navigate = useNavigate();
    const { activeCategory, setActiveCategory, categories, packagesByCategory } = useListPackageStore();
    const setSelectedPackage = useDetailPackageStore((state) => state.setSelectedPackage);
    const [currentImage, setCurrentImage] = useState({});

    const sidebarRef = useRef(null);
    const packagesRef = useRef(null);

    const packages = packagesByCategory[activeCategory] || packagesByCategory["Dapur"];

    const nextImage = (index) => {
        setCurrentImage((prev) => ({
            ...prev,
            [index]: ((prev[index] || 0) + 1) % packages[index].images.length,
        }));
    };

    const prevImage = (index) => {
        setCurrentImage((prev) => ({
            ...prev,
            [index]: ((prev[index] || 0) - 1 + packages[index].images.length) % packages[index].images.length,
        }));
    };

    const handleNavigateDetail = (pack) => {
        navigate("/package-detail");
        setSelectedPackage(pack);
    };

    const handleWhatsapp = () => {
        const phone = "6282119466523";
        const message = `Halo, Saya membutuhkan bantuan terkait DS Link`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    const handleSelectCategory = (cat) => {
        setActiveCategory(cat.name);
        setCurrentImage({});
    };

    // ── ENTRANCE: sidebar dari kiri, semua paket dari kanan, barengan ────────
    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {
            gsap.set(sidebarRef.current, { x: -50, opacity: 0 });
            gsap.set(packagesRef.current, { x: 50, opacity: 0 });

            ScrollTrigger.create({
                trigger: sidebarRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    // Keduanya muncul bersamaan
                    gsap.to(sidebarRef.current, { x: 0, opacity: 1, duration: 0.75, ease: "power3.out" });
                    gsap.to(packagesRef.current, { x: 0, opacity: 1, duration: 0.75, ease: "power3.out" });
                },
            });

            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    // ── KATEGORI BERUBAH: semua paket fade in barengan ───────────────────────
    useEffect(() => {
        gsap.fromTo(
            packagesRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
        );
    }, [activeCategory]);

    return (
        <section className="bg-slate-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8">

                {/* ===== SIDEBAR ===== */}
                <div ref={sidebarRef} className="flex flex-col w-full lg:w-1/4">

                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 w-full p-6 h-fit">
                        <h3 className="text-blue-900 font-bold mb-6 text-lg">Pilih Kategori</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => handleSelectCategory(cat)}
                                    className={`w-full flex items-center space-x-2 text-left px-4 py-3 rounded-xl transition-all duration-200 font-normal 
                                    ${activeCategory === cat.name
                                        ? "bg-indigo-600 text-white shadow-md"
                                        : "hover:bg-slate-100 text-slate-700/80"
                                    }`}
                                >
                                    {<cat.icon />}
                                    <span>{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-5 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-blue-900 p-6 text-white shadow-lg">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full" />
                        <h3 className="text-lg font-semibold text-blue-100">Butuh Bantuan?</h3>
                        <p className="text-sm text-blue-200 mt-1">
                            Tim kami siap membantu Anda memilih paket yang paling tepat
                        </p>
                        <button
                            onClick={handleWhatsapp}
                            className="mt-4 flex items-center justify-center gap-2 w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-white hover:bg-white/20 transition"
                        >
                            <FaWhatsapp className="text-lg" />
                            Hubungi Kami
                        </button>
                    </div>

                </div>

                {/* ===== PACKAGE LIST ===== */}
                <div ref={packagesRef} className="space-y-8 w-full lg:w-3/4">
                    {packages.map((pkg, index) => {
                        const isHighlight = pkg.highlight;
                        const isPremium = pkg.name === "Komplit";

                        return (
                            <div
                                key={`${activeCategory}-${index}`}
                                className={`group transition-all duration-500 ${isHighlight ? "scale-[1.015]" : ""}`}
                            >
                                <div className={isHighlight ? "animated-border" : ""}>
                                    <div className={`
                                        ${isHighlight ? "animated-border-inner" : ""}
                                        rounded-3xl overflow-hidden border
                                        ${isHighlight
                                            ? "border-transparent shadow-2xl"
                                            : isPremium
                                            ? "border-indigo-200 shadow-md"
                                            : "border-slate-200 shadow-sm"
                                        }
                                        bg-white transition-all duration-500 hover:shadow-xl
                                    `}>
                                        <div className="grid grid-cols-1 md:grid-cols-3">

                                            {/* IMAGE */}
                                            <div className="relative overflow-hidden group/image">
                                                <img
                                                    src={pkg.images[currentImage[index] || 0]}
                                                    alt={pkg.name}
                                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />

                                                <button onClick={() => prevImage(index)} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100 transition duration-300 bg-white/70 backdrop-blur-md p-2.5 rounded-full shadow-md hover:scale-110 hover:bg-white">‹</button>
                                                <button onClick={() => nextImage(index)} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100 transition duration-300 bg-white/70 backdrop-blur-md p-2.5 rounded-full shadow-md hover:scale-110 hover:bg-white">›</button>

                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                    {pkg.images.map((_, imgIndex) => {
                                                        const isActive = (currentImage[index] || 0) === imgIndex;
                                                        return (
                                                            <button
                                                                key={imgIndex}
                                                                onClick={() => setCurrentImage((prev) => ({ ...prev, [index]: imgIndex }))}
                                                                className={`h-2.5 rounded-full transition-all duration-300 ${isActive ? "w-6 bg-white shadow-md" : "w-2.5 bg-white/50 hover:bg-white/80"}`}
                                                            />
                                                        );
                                                    })}
                                                </div>

                                                {isHighlight && (
                                                    <div className="absolute top-5 left-5 bg-amber-400 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg tracking-wide">
                                                        REKOMENDASI UTAMA
                                                    </div>
                                                )}
                                            </div>

                                            {/* CONTENT */}
                                            <div className={`
                                                md:col-span-2 p-6 md:p-10 flex flex-col justify-between
                                                ${isHighlight ? "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900" : "bg-white"}
                                            `}>
                                                <div>
                                                    <div className="flex items-start justify-between mb-4">
                                                        <h3 className={`text-2xl font-bold tracking-tight flex items-center space-x-2 ${isHighlight ? "text-white" : "text-slate-900"}`}>
                                                            {pkg.name === "Hemat" && <FaCheck className="w-8 h-8 p-2 rounded-xl bg-blue-100 text-blue-500" />}
                                                            {pkg.name === "Pas" && <BsStars className="w-8 h-8 p-2 rounded-xl bg-white/10 text-white" />}
                                                            {pkg.name === "Komplit" && <LuCrown className="w-8 h-8 p-2 rounded-xl bg-orange-100 text-orange-500" />}
                                                            <span>Paket {pkg.name}</span>
                                                        </h3>
                                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                                            isHighlight ? "bg-white/10 text-white border border-white/20"
                                                            : isPremium ? "bg-indigo-50 text-indigo-600"
                                                            : "bg-slate-100 text-slate-600"
                                                        }`}>
                                                            {isHighlight ? "Best Value" : isPremium ? "Ultimate" : "Essential"}
                                                        </span>
                                                    </div>

                                                    <p className={`mb-8 text-sm leading-relaxed ${isHighlight ? "text-slate-300" : "text-slate-500"}`}>
                                                        {pkg.subtitle}
                                                    </p>

                                                    <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm ${isHighlight ? "text-slate-200" : "text-slate-700"}`}>
                                                        {pkg.features.map((feature, i) => (
                                                            <li key={i} className="flex items-center space-x-2">
                                                                <div className={`w-6 h-6 flex flex-shrink-0 items-center justify-center rounded-md text-xs font-bold ${isHighlight ? "bg-white/10 text-white" : "bg-indigo-600 text-white"}`}>✓</div>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="flex items-center justify-between mt-10">
                                                    <div className={`text-xs leading-relaxed ${isHighlight ? "text-slate-300" : "text-slate-500"}`}>
                                                        🔒 Instalasi Profesional <br />
                                                        🛠️ Garansi Resmi
                                                    </div>
                                                    <button
                                                        onClick={() => handleNavigateDetail(pkg)}
                                                        className={`px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                                                            isHighlight
                                                                ? "bg-amber-400 hover:bg-amber-500 text-white shadow-lg hover:shadow-xl"
                                                                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg"
                                                        }`}
                                                    >
                                                        Lihat Paket
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default List;