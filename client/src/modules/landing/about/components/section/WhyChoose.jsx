import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWarehouse, FaHandshake, FaClipboardCheck, FaLightbulb, FaGraduationCap, FaShieldAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        borderTop: "border-t-[#0D1B6B]",
        iconBg: "bg-[#0D1B6B]/10",
        iconColor: "text-[#0D1B6B]",
        btnColor: "text-[#0D1B6B]",
        Icon: FaWarehouse,
        title: "Supply Chain Kuat",
        subtitle: "Langsung dari Gudang Depo Pelita",
        desc: "Produk langsung dari gudang Depo Pelita. Elektronik, furniture, home appliances, gadget — semua tersedia dengan harga distributor. Stok terjamin, margin Anda terjaga.",
        from: { x: -70, opacity: 0 },
    },
    {
        borderTop: "border-t-[#D4A03C]",
        iconBg: "bg-[#D4A03C]/10",
        iconColor: "text-[#D4A03C]",
        btnColor: "text-[#D4A03C]",
        Icon: FaHandshake,
        title: "6 Partner Pembiayaan",
        subtitle: "Cicilan 0% Tanpa Kartu Kredit",
        desc: "BRI, BCA, BNI, Home Credit, Akulaku, Kredivo. Warga desa bisa cicilan bunga 0% tanpa kartu kredit. Approval Home Credit hanya 15 menit — di tempat.",
        from: { y: 70, opacity: 0 },
    },
    {
        borderTop: "border-t-[#1A3A8F]",
        iconBg: "bg-[#1A3A8F]/10",
        iconColor: "text-[#1A3A8F]",
        btnColor: "text-[#1A3A8F]",
        Icon: FaClipboardCheck,
        title: "SOP & Sistem Teruji",
        subtitle: "Sudah Diuji di Outlet Pertama",
        desc: "Inventory management, sales script, marketing playbook, SOP operasional 18 section, after-sales system — semua sudah disiapkan dan diuji di outlet pertama DS Link Kroya.",
        from: { x: 70, opacity: 0 },
    },
    {
        
        borderTop: "border-t-[#0D1B6B]",
        iconBg: "bg-[#0D1B6B]/10",
        iconColor: "text-[#0D1B6B]",
        btnColor: "text-[#0D1B6B]",
        Icon: FaLightbulb,
        title: "5 Program Inovasi",
        subtitle: "Outlet Anda Jadi Pusat Komunitas",
        desc: "Tukang Binaan, Arisan Upgrade Rumah, DS Link Academy, Kolaborasi BUMDes, Eco Corner. Program yang bikin outlet Anda jadi pusat komunitas — bukan cuma toko.",
        from: { x: -70, opacity: 0 },
    },
    {
        borderTop: "border-t-[#D4A03C]",
        iconBg: "bg-[#D4A03C]/10",
        iconColor: "text-[#D4A03C]",
        btnColor: "text-[#D4A03C]",
        Icon: FaGraduationCap,
        title: "Training & Pendampingan",
        subtitle: "Praktik Nyata, Bukan Sekadar Teori",
        desc: "Training intensif langsung di outlet Kroya. Praktik nyata — sales, instalasi, finance, marketing. Tim pusat mendampingi di bulan-bulan awal operasional sampai outlet Anda mandiri.",
        from: { y: 70, opacity: 0 },
    },
    {
        borderTop: "border-t-[#1A3A8F]",
        iconBg: "bg-[#1A3A8F]/10",
        iconColor: "text-[#1A3A8F]",
        btnColor: "text-[#1A3A8F]",
        Icon: FaShieldAlt,
        title: "Brand & Ekosistem Depo Pelita",
        subtitle: "Dipercaya 25+ Tahun",
        desc: "Nama Depo Pelita yang sudah dipercaya 25+ tahun sebagai trust anchor. Anda bergabung dengan ekosistem yang sudah terbukti — bukan memulai sendiri dari nol.",
        from: { x: 70, opacity: 0 },
    },
];

const WhyChooseSection = () => {
    const sectionTagRef = useRef(null);
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            gsap.set([sectionTagRef.current, headingRef.current, subheadRef.current], { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(sectionTagRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.2 });
                },
            });

            cardRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, cards[i].from);
                ScrollTrigger.create({
                    trigger: el,
                    scroller, start: "top 88%", once: true,
                    onEnter: () => {
                        gsap.to(el, {
                            x: 0, y: 0, opacity: 1,
                            duration: 0.75, ease: "power3.out",
                            delay: (i % 3) * 0.12,
                        });
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

    return (
        <section className="bg-[#FAF9F6] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

                {/* Section Tag */}
                <p ref={sectionTagRef} className="text-sm font-bold tracking-widest uppercase text-[#D4A03C]">
                    Mengapa DS Link
                </p>

                {/* Headline */}
                <h2 ref={headingRef} className="font-serif mt-3 text-4xl md:text-5xl font-bold text-[#0D1B6B] max-w-3xl mx-auto leading-tight">
                    Bukan Sekadar Toko. Ini Ekosistem yang{" "}
                    <span className="bg-gradient-to-r from-[#D4A03C] to-[#E8C76A] bg-clip-text text-transparent">
                        Memberdayakan Desa.
                    </span>
                </h2>

                {/* Sub-teks */}
                <p ref={subheadRef} className="mt-4 text-lg text-[#1A3A8F] max-w-2xl mx-auto leading-relaxed">
                    DS Link menggabungkan toko elektronik & furniture, layanan instalasi profesional, dan pembiayaan cicilan dalam satu sistem — solusi lengkap yang belum pernah ada di level desa.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 text-left">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardRefs.current[i] = el)}
                            className={`bg-white rounded-xl shadow-md p-8 border-t-4 ${card.borderTop} hover:shadow-lg hover:-translate-y-1 transition duration-300`}
                        >
                            <div className={`w-12 h-12 ${card.iconBg} ${card.iconColor} flex items-center justify-center rounded-lg mb-6`}>
                                <card.Icon size={22} />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0D1B6B]">{card.title}</h3>
                            <p className="text-sm text-[#1A3A8F]/60 mt-1">{card.subtitle}</p>
                            {/* <p className="mt-4 text-[#1A3A8F]/80 leading-relaxed">{card.desc}</p>
                            <button className={`mt-6 ${card.btnColor} font-medium flex items-center gap-2 hover:gap-3 transition-all`}>
                                Pelajari lebih lanjut →
                            </button> */}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseSection;