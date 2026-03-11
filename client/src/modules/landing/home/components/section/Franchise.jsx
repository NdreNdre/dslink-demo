import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { BsStars } from "react-icons/bs";
import { LuCrown } from "react-icons/lu";
import { FaBoxOpen, FaClipboardList, FaBullseye, FaMobileAlt, FaStore, FaPaintBrush, FaTools, FaRocket } from "react-icons/fa";
import { FaShieldAlt, FaCreditCard } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { FaHistory, FaMapMarkerAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const features = [
    { icon: FaBoxOpen,    title: "Supply Depo Pelita", desc: "Stok dari gudang distributor, harga kompetitif" },
    { icon: FaCreditCard, title: "6 Partner Cicilan",  desc: "Stok dari gudang distributor, harga kompetitif" },
    { icon: ImTruck,      title: "Gratis Ongkir 15km", desc: "Standar layanan permanen, bukan promo" },
    { icon: FaShieldAlt,  title: "Garansi 1 Bulan",   desc: "Rusak pabrik? Ganti baru. Titik." },
];

export default function FranchiseSectionPremium() {
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const statsRef = useRef(null);
    const featureRefs = useRef([]);
    const card0Ref = useRef(null);
    const card1Ref = useRef(null);
    const tableHeaderRef = useRef(null);
    const tableRowRefs = useRef([]);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            gsap.set([headingRef.current, subheadRef.current], { y: 50, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.15 });
                },
            });

            gsap.set(statsRef.current, { scaleX: 0.6, opacity: 0, transformOrigin: "center" });
            ScrollTrigger.create({
                trigger: statsRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(statsRef.current, { scaleX: 1, opacity: 1, duration: 0.7, ease: "back.out(1.4)" });
                },
            });

            featureRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 50, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el, scroller, start: "top 90%", once: true,
                    onEnter: () => gsap.to(el, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: i * 0.1 }),
                });
            });

            gsap.set(card0Ref.current, { x: -70, opacity: 0 });
            ScrollTrigger.create({
                trigger: card0Ref.current, scroller, start: "top 85%", once: true,
                onEnter: () => gsap.to(card0Ref.current, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }),
            });

            gsap.set(card1Ref.current, { x: 70, opacity: 0 });
            ScrollTrigger.create({
                trigger: card1Ref.current, scroller, start: "top 85%", once: true,
                onEnter: () => gsap.to(card1Ref.current, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.12 }),
            });

            gsap.set(tableHeaderRef.current, { y: 30, opacity: 0 });
            ScrollTrigger.create({
                trigger: tableHeaderRef.current, scroller, start: "top 88%", once: true,
                onEnter: () => gsap.to(tableHeaderRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }),
            });

            tableRowRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { x: -30, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el, scroller, start: "top 92%", once: true,
                    onEnter: () => gsap.to(el, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: i * 0.07 }),
                });
            });

            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    const tableRows = [
        ["SOP & sistem operasional", "Ya", "Ya"],
        ["Training + roleplay + scoring", "Ya", "Ya (lebih intens)"],
        ["Paket produk hero & bundling", "Ya", "Ya (lebih intens / variatif)"],
        ["Pembayaran DP & cicilan (bank/fintech)", "Ya", "Ya"],
        ["Rak & display system", "Basic (opsional)", "Termasuk"],
        ["Signage / branding fisik", "Basic (opsional)", "Termasuk"],
        ["Pembenahan gedung / renov asumsi", "Tidak", "Termasuk"],
        ["Promo awal + open house toolkit", "Standard", "Lebih besar & lengkap"],
        ["Support opening", "Standard", "Lebih intens"],
    ];

    const handleWhatsapp = () => {
        const phone = "6282119466523";
        const message = `Halo, saya tertarik dengan Franchise DS Link. Boleh saya berkonsultasi?`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section
            id="franchise"
            className="relative py-32 overflow-hidden"
            style={{ backgroundColor: "#F0EDE8" }}
        >
            {/* Subtle glow blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
                style={{ backgroundColor: "rgba(13,27,107,0.06)" }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
                style={{ backgroundColor: "rgba(212,160,60,0.08)" }} />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 ref={headingRef} className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "#0D1B6B" }}>
                        Dua Pilihan, Satu Tujuan: Bisnis yang menghasilkan dari {" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(to right, #D4A03C, #E8C76A)" }}
                        >
                            Hari Pertama
                        </span>
                    </h2>
                    <p ref={subheadRef} className="text-lg leading-relaxed" style={{ color: "#1A3A8F" }}>
                        Masing-masing paket dirancang untuk kebutuhan dan ambisi yang berbeda. Dukungan dari pusat sama kuatnya.
                    </p>
                </div>

                {/* STATS */}
                <div className="flex justify-center mb-24">
                    <div
                        ref={statsRef}
                        className="px-12 py-6 rounded-2xl flex gap-20 shadow-md"
                        style={{
                            backgroundColor: "white",
                            border: "1px solid rgba(13,27,107,0.12)",
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: "rgba(212,160,60,0.12)" }}>
                                <FaHistory style={{ color: "#D4A03C" }} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold" style={{ color: "#0D1B6B" }}>25+</div>
                                <div className="text-sm" style={{ color: "#1A3A8F" }}>Tahun Ekosistem Depo Pelita</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: "rgba(212,160,60,0.12)" }}>
                                <FaMapMarkerAlt style={{ color: "#D4A03C" }} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold" style={{ color: "#0D1B6B" }}>940+</div>
                                <div className="text-sm" style={{ color: "#1A3A8F" }}>Desa Potensial di Jawa Tengah</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FEATURE CARDS */}
                <div className="grid md:grid-cols-4 gap-6 mb-28">
                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                ref={(el) => (featureRefs.current[i] = el)}
                                className="p-6 rounded-2xl transition-all duration-200"
                                style={{
                                    backgroundColor: "white",
                                    border: "1px solid rgba(13,27,107,0.1)",
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(212,160,60,0.45)"}
                                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(13,27,107,0.1)"}
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: "rgba(212,160,60,0.12)" }}>
                                    <Icon style={{ color: "#D4A03C" }} />
                                </div>
                                <h4 className="font-semibold mb-2" style={{ color: "#0D1B6B" }}>{item.title}</h4>
                                <p className="text-sm" style={{ color: "#1A3A8F" }}>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* PACKAGE CARDS */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* DS LINK — Standar */}
                    <div
                        ref={card0Ref}
                        className="group relative p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        style={{
                            backgroundColor: "white",
                            border: "1px solid rgba(13,27,107,0.12)",
                            boxShadow: "0 4px 24px rgba(13,27,107,0.06)",
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(13,27,107,0.25)"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(13,27,107,0.12)"}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl"
                                style={{ backgroundColor: "rgba(13,27,107,0.08)" }}>
                                <BsStars size={22} style={{ color: "#0D1B6B" }} />
                            </div>
                            <h3 className="text-2xl font-semibold tracking-wide" style={{ color: "#0D1B6B" }}>
                                DS LINK (Standar)
                            </h3>
                        </div>

                        <p className="leading-relaxed mb-8" style={{ color: "#1A3A8F" }}>
                            Outlet standar dengan sistem lengkap — siap operasional dari hari pertama.
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-8">
                            {[
                                { Icon: FaBoxOpen,       label: "Stok Awal", value: "Siap Jual" },
                                { Icon: FaClipboardList, label: "SOP",        value: "Lengkap" },
                                { Icon: FaBullseye,      label: "Training",   value: "Intensif" },
                                { Icon: FaMobileAlt,     label: "Sistem",     value: "Inventory Management" },
                            ].map(({ Icon, label, value }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-colors duration-200"
                                    style={{
                                        backgroundColor: "#FAF9F6",
                                        border: "1px solid rgba(13,27,107,0.1)",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(212,160,60,0.08)"}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#FAF9F6"}
                                >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: "rgba(212,160,60,0.12)" }}>
                                        <Icon size={16} style={{ color: "#D4A03C" }} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold tracking-wide leading-none mb-1" style={{ color: "#D4A03C" }}>{label}</p>
                                        <p className="text-xs font-medium leading-none" style={{ color: "#0D1B6B" }}>{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t my-8" style={{ borderColor: "rgba(13,27,107,0.08)" }} />

                        <ul className="space-y-4 text-sm flex-1" style={{ color: "#1A3A8F" }}>
                            {[
                                "Sistem IT & inventory management",
                                "SOP operasional lengkap",
                                "Stok awal produk (elektronik, furniture, home appliances, gadget)",
                                "Training tim (sales, operasional, finance, marketing)",
                                "Marketing launch kit + panduan grand opening",
                                "Pendampingan bulan-bulan awal operasional",
                                "Akses 6 partner pembiayaan (BRI, BCA, BNI, Home Credit, Akulaku, Kredivo)",
                                "Supply produk harga distributor dari Depo Pelita",
                                "Akses 5 program inovasi (Tukang Binaan, Arisan, Academy, BUMDes, Eco Corner)",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={18} style={{ color: "#D4A03C" }} className="mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleWhatsapp}
                            className="mt-10 w-full py-3 rounded-xl font-medium transition-all duration-300"
                            style={{
                                border: "2px solid #0D1B6B",
                                color: "#0D1B6B",
                                backgroundColor: "transparent",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = "#0D1B6B";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "#0D1B6B";
                            }}
                        >
                            Tanya Detail Via WhatsApp
                        </button>
                    </div>

                    {/* DS LINK PLUS — Premium */}
                    <div
                        ref={card1Ref}
                        className="group relative p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        style={{
                            backgroundColor: "#0D1B6B",
                            border: "1px solid rgba(212,160,60,0.4)",
                            boxShadow: "0 20px 60px rgba(13,27,107,0.2)",
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(212,160,60,0.7)"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(212,160,60,0.4)"}
                    >
                        {/* Badge */}
                        <div
                            className="absolute top-6 right-6 text-xs px-4 py-1 rounded-full font-medium"
                            style={{
                                backgroundColor: "rgba(212,160,60,0.2)",
                                color: "#E8C76A",
                                border: "1px solid rgba(212,160,60,0.4)",
                            }}
                        >
                            REKOMENDASI
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl"
                                style={{ backgroundColor: "rgba(212,160,60,0.2)" }}>
                                <LuCrown size={22} style={{ color: "#D4A03C" }} />
                            </div>
                            <h3 className="text-2xl font-semibold tracking-wide text-white">
                                DS LINK PLUS (Premium)
                            </h3>
                        </div>

                        <p className="leading-relaxed mb-8 min-h-[3rem]" style={{ color: "rgba(255,255,255,0.7)" }}>
                            Premium — tampil profesional dan agresif sejak grand opening.
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-8">
                            {[
                                { Icon: FaStore,      label: "Display",  value: "Modern & Premium" },
                                { Icon: FaPaintBrush, label: "Branding", value: "Eksterior & Interior" },
                                { Icon: FaTools,      label: "Renovasi", value: "Termasuk" },
                                { Icon: FaRocket,     label: "Support",  value: "Grand Opening" },
                            ].map(({ Icon, label, value }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-colors duration-200"
                                    style={{
                                        backgroundColor: "rgba(212,160,60,0.08)",
                                        border: "1px solid rgba(212,160,60,0.25)",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(212,160,60,0.16)"}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(212,160,60,0.08)"}
                                >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: "rgba(212,160,60,0.15)" }}>
                                        <Icon size={16} style={{ color: "#E8C76A" }} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold tracking-wide leading-none mb-1" style={{ color: "#D4A03C" }}>{label}</p>
                                        <p className="text-xs font-medium leading-none" style={{ color: "rgba(255,255,255,0.85)" }}>{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t my-8" style={{ borderColor: "rgba(212,160,60,0.2)" }} />

                        <ul className="space-y-4 text-sm flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                            {[
                                "Semua fitur Paket DS Link",
                                "Renovasi gedung outlet sesuai standar DS Link",
                                "Display showcase modern & premium (Room Experience Zone)",
                                "Branding eksterior & interior (neon box, signage, POP lengkap)",
                                "Grand opening event management (termasuk lucky draw & flash deal)",
                                "Marketing budget tambahan untuk launch",
                                "Pendampingan intensif lebih lama",
                                "Prioritas area ekslusif lebih luas",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={18} style={{ color: "#E8C76A" }} className="mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleWhatsapp}
                            className="mt-10 w-full py-3 rounded-xl font-semibold transition-all duration-300"
                            style={{
                                background: "linear-gradient(to right, #D4A03C, #E8C76A)",
                                color: "#0D1B6B",
                                boxShadow: "0 8px 24px rgba(212,160,60,0.35)",
                            }}
                            onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.08)"}
                            onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                        >
                            Tanya Detail via WhatsApp
                        </button>
                    </div>

                </div>

                {/* COMPARISON TABLE */}
                <div className="mt-24 max-w-6xl mx-auto">
                    <div ref={tableHeaderRef} className="text-center mb-12">
                        <h2 className="text-3xl font-semibold" style={{ color: "#0D1B6B" }}>Perbandingan Paket</h2>
                        <p className="mt-3" style={{ color: "#1A3A8F" }}>
                            Perbandingan cepat fitur utama antara DS Link dan DS Link Plus
                        </p>
                    </div>

                    <div
                        className="rounded-3xl overflow-hidden"
                        style={{
                            backgroundColor: "white",
                            border: "1px solid rgba(13,27,107,0.1)",
                            boxShadow: "0 4px 24px rgba(13,27,107,0.06)",
                        }}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead style={{ backgroundColor: "#0D1B6B" }}>
                                    <tr>
                                        <th className="px-8 py-6 font-medium text-white uppercase tracking-wider">Komponen</th>
                                        <th className="px-8 py-6 font-medium text-white uppercase tracking-wider">DS LINK</th>
                                        <th className="px-8 py-6 font-medium uppercase tracking-wider" style={{ color: "#E8C76A" }}>DS LINK PLUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows.map((row, i) => (
                                        <tr
                                            key={i}
                                            ref={(el) => (tableRowRefs.current[i] = el)}
                                            style={{
                                                borderTop: "1px solid rgba(13,27,107,0.07)",
                                                backgroundColor: i % 2 === 0 ? "white" : "#FAF9F6",
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(212,160,60,0.05)"}
                                            onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? "white" : "#FAF9F6"}
                                        >
                                            <td className="px-8 py-5 font-medium" style={{ color: "#0D1B6B" }}>{row[0]}</td>
                                            <td className="px-8 py-5" style={{ color: "#1A3A8F" }}>{row[1]}</td>
                                            <td className="px-8 py-5 font-semibold" style={{ color: "#D4A03C" }}>{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}