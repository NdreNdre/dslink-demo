import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Headphones, GraduationCap, Megaphone,
    BarChart3, Briefcase, TrendingUp, Check,
} from "lucide-react";
import { BsStars } from "react-icons/bs";
import { LuCrown } from "react-icons/lu";
import { FaBoxOpen, FaClipboardList, FaBullseye, FaMobileAlt, FaStore, FaPaintBrush, FaTools, FaRocket } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { PiTruckLight } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { ImTruck } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const features = [
    { icon: FaBoxOpen, title: "Supply Depo Pelita", desc: "Stok dari gudang distributor, harga kompetitif" },
    { icon: FaCreditCard, title: "6 Partner Cicilan", desc: "Stok dari gudang distributor, harga kompetitif" },
    { icon: ImTruck, title: "Gratis Ongkir 15km", desc: "Standar layanan permanen, bukan promo" },
    { icon: FaShieldAlt, title: "Garansi 1 Bulan", desc: "Rusak pabrik? Ganti baru. Titik." },
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

            // ── 1. HEADING — reveal dari bawah ───────────────────────────────
            gsap.set([headingRef.current, subheadRef.current], { y: 50, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.15 });
                },
            });

            // ── 2. STATS BAR — scale in dari tengah ──────────────────────────
            gsap.set(statsRef.current, { scaleX: 0.6, opacity: 0, transformOrigin: "center" });
            ScrollTrigger.create({
                trigger: statsRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(statsRef.current, { scaleX: 1, opacity: 1, duration: 0.7, ease: "back.out(1.4)" });
                },
            });

            // ── 3. FEATURE CARDS — stagger dari bawah ────────────────────────
            featureRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 50, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el,
                    scroller, start: "top 90%", once: true,
                    onEnter: () => {
                        gsap.to(el, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: i * 0.1 });
                    },
                });
            });

            // ── 4. PACKAGE CARDS — DS Link dari kiri, DS Link Plus dari kanan ─
            gsap.set(card0Ref.current, { x: -70, opacity: 0 });
            ScrollTrigger.create({
                trigger: card0Ref.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(card0Ref.current, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                },
            });

            gsap.set(card1Ref.current, { x: 70, opacity: 0 });
            ScrollTrigger.create({
                trigger: card1Ref.current,
                scroller, start: "top 85%", once: true,
                onEnter: () => {
                    gsap.to(card1Ref.current, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.12 });
                },
            });

            // ── 5. TABLE HEADER ───────────────────────────────────────────────
            gsap.set(tableHeaderRef.current, { y: 30, opacity: 0 });
            ScrollTrigger.create({
                trigger: tableHeaderRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(tableHeaderRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
                },
            });

            // ── 6. TABLE ROWS — masuk satu per satu dari kiri ─────────────────
            tableRowRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { x: -30, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el,
                    scroller, start: "top 92%", once: true,
                    onEnter: () => {
                        gsap.to(el, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: i * 0.07 });
                    },
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
        <section id="franchise" className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 ref={headingRef} className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                        Dua Pilihan, Satu Tujuan: Bisnis yang menghasilkan dari {" "}
                        <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                            Hari Pertama
                        </span>
                    </h2>
                    <p ref={subheadRef} className="text-slate-300 text-lg leading-relaxed">
                        Masing-masing paket dirancang untuk kebutuhan dan ambisi yang berbeda. Dukungan dari pusat sama kuatnya.
                    </p>
                </div>

                {/* STATS */}
                <div className="flex justify-center mb-24">
                    <div ref={statsRef} className="bg-slate-800 border border-slate-700 px-12 py-6 rounded-2xl flex gap-20 shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                                <FaHistory className="text-indigo-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">25+</div>
                                <div className="text-slate-400 text-sm">Tahun Ekosistem Depo Pelita</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <FaMapMarkerAlt className="text-purple-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">940+</div>
                                <div className="text-slate-400 text-sm">Desa Potensial di Jawa Tengah</div>
                            </div>
                        </div>
                        {/* <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <TrendingUp className="text-purple-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">6</div>
                                <div className="text-slate-400 text-sm">Partner Pembiayaan Resmi</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <TrendingUp className="text-purple-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">5</div>
                                <div className="text-slate-400 text-sm">Program Inovasi Terintegrasi</div>
                            </div>
                        </div> */}
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
                                className="bg-slate-800 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500/40 transition"
                            >
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <Icon className="text-indigo-400" />
                                </div>
                                <h4 className="font-semibold mb-2">{item.title}</h4>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* PACKAGE CARDS */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* DS LINK */}
                    <div ref={card0Ref} className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white">
                                <BsStars size={22} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white tracking-wide">DS LINK (Standar)</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-8">Outlet standar dengan sistem lengkap — siap operasional dari hari pertama.</p>
                        <div className="grid grid-cols-2 gap-2 mb-8">
                            {[
                                { Icon: FaBoxOpen,       label: "Stok Awal", value: "Siap Jual" },
                                { Icon: FaClipboardList, label: "SOP",        value: "Lengkap" },
                                { Icon: FaBullseye,      label: "Training",   value: "Intensif" },
                                { Icon: FaMobileAlt,     label: "Sistem",     value: "Inventory Management" },
                            ].map(({ Icon, label, value }) => (
                                <div key={label} className="flex items-center gap-2.5 bg-white/5 hover:bg-blue-500/10 border border-white/20 rounded-xl px-3 py-2.5 transition-colors duration-200">
                                    <div className="w-8 h-8 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0">
                                        <Icon size={16} className="text-blue-300" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-blue-300 tracking-wide leading-none mb-1">{label}</p>
                                        <p className="text-xs font-medium text-white/85 leading-none">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-white/10 my-8" />
                        <ul className="space-y-4 text-slate-300 text-sm flex-1">
                            {[
                                "Sistem IT & inventory management",
                                "SOP operasional lengkap", 
                                "Stok awal produk (elektronik, furniture, home appliances, gadget)", 
                                "Training tim (sales, operasional, finance, marketing)",
                                "Marketing launch kit + panduan grand opening",
                                "Pendampingan bulan-bulan awal operasional",
                                "Akses 6 partner pembiayaan (BRI, BCA, BNI, Home Credit, Akulaku, Kredivo)",
                                "Supply produk harga distributor dari Depo Pelita",
                                "Akses 5 program inovasi (Tukang Binaan, Arisan, Academy, BUMDes, Eco Corner)"

                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={18} className="text-blue-400 mt-1" /><span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-10 w-full border border-white/20 text-white py-3 rounded-xl font-medium hover:bg-white/5 transition-all duration-300" onClick={handleWhatsapp}>
                            Tanya Detail Via WhatsApp
                        </button>
                        
                    </div>

                    {/* DS LINK PLUS */}
                    <div ref={card1Ref} className="group relative bg-white/[0.06] backdrop-blur-xl border border-blue-500/30 p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 shadow-[0_20px_60px_rgba(59,130,246,0.15)] flex flex-col">
                        <div className="absolute top-6 right-6 text-xs px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium border border-blue-400/20">
                            REKOMENDASI
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                                <LuCrown size={22} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white tracking-wide">DS LINK PLUS (Premium)</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-8 min-h-[3rem]">Premium — tampil profesional dan agresif sejak grand opening.</p>
                        <div className="grid grid-cols-2 gap-2 mb-8">
                            {[
                                { Icon: FaStore,      label: "Display",   value: "Modern & Premium" },
                                { Icon: FaPaintBrush, label: "Branding",  value: "Eksterior & Interior" },
                                { Icon: FaTools,      label: "Renovasi",  value: "Termasuk" },
                                { Icon: FaRocket,     label: "Support",   value: "Grand Opening" },
                            ].map(({ Icon, label, value }) => (
                                <div key={label} className="flex items-center gap-2.5 bg-white/5 hover:bg-blue-500/10 border border-blue-700/50 rounded-xl px-3 py-2.5 transition-colors duration-200">
                                    <div className="w-8 h-8 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0">
                                        <Icon size={16} className="text-blue-300" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-blue-300 tracking-wide leading-none mb-1">{label}</p>
                                        <p className="text-xs font-medium text-white/85 leading-none">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-white/10 my-8" />
                        <ul className="space-y-4 text-slate-300 text-sm flex-1">
                            {[
                                "Semua fitur Paket DS Link", 
                                "Renovasi gedung outlet sesuai standar DS Link", 
                                "Display showcase modern & premium (Room Experience Zone)", 
                                "Branding eksterior & interior (neon box, signage, POP lengkap)", 
                                "Grand opening event management (termasuk lucky draw & flash deal)",
                                "Marketing budget tambahan untuk launch",
                                "Pendampingan intensif lebih lama",
                                "Prioritas area ekslusif lebih luas"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={18} className="text-blue-400 mt-1" /><span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-10 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:brightness-110 transition-all duration-300" onClick={handleWhatsapp}>
                            Tanya Detail via WhatsApp
                        </button>
                    </div>

                </div>

                {/* COMPARISON TABLE */}
                <div className="mt-24 max-w-6xl mx-auto">
                    <div ref={tableHeaderRef} className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-white">Perbandingan Paket</h2>
                        <p className="text-slate-400 mt-3 min-h-[3rem]">Perbandingan cepat fitur utama antara DS Link dan DS Link Plus</p>
                    </div>

                    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-slate-300">
                                <thead className="bg-white/[0.05] text-white text-sm uppercase tracking-wider">
                                    <tr>
                                        <th className="px-8 py-6 font-medium">Komponen</th>
                                        <th className="px-8 py-6 font-medium">DS LINK</th>
                                        <th className="px-8 py-6 font-medium text-blue-400">DS LINK PLUS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {tableRows.map((row, i) => (
                                        <tr
                                            key={i}
                                            ref={(el) => (tableRowRefs.current[i] = el)}
                                            className="hover:bg-white/[0.03] transition-colors"
                                        >
                                            <td className="px-8 py-6 text-slate-300">{row[0]}</td>
                                            <td className="px-8 py-6 text-slate-400">{row[1]}</td>
                                            <td className="px-8 py-6 text-blue-300 font-medium bg-blue-500/[0.03]">{row[2]}</td>
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