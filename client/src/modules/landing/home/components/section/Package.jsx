import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheck } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";
import { BsStars } from "react-icons/bs";
import { LuCrown } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { CiCreditCard1 } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

const PackageSection = () => {
    const navigate = useNavigate();
    const handleNavigatePaket = () => {
        navigate("/package");
        setTimeout(() => {
            document.querySelector("main")?.scrollTo({ top: 0, behavior: "instant" });
        }, 0);
    };

    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const card0Ref = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const noteRef = useRef(null);

    useEffect(() => {
        // scroll terjadi di <main> bukan window
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {
            const animItems = [
                { el: headingRef.current,  from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1, duration: 0.8 } },
                { el: subheadRef.current,  from: { y: 30, opacity: 0 }, to: { y: 0, opacity: 1, duration: 0.7 } },
                { el: card0Ref.current,    from: { x: -70, opacity: 0 }, to: { x: 0, opacity: 1, duration: 0.8 } },
                { el: card1Ref.current,    from: { y: 70, opacity: 0 }, to: { y: 0, opacity: 1, duration: 0.9, ease: "back.out(1.3)" } },
                { el: card2Ref.current,    from: { x: 70, opacity: 0 }, to: { x: 0, opacity: 1, duration: 0.8 } },
                { el: noteRef.current,     from: { y: 20, opacity: 0 }, to: { y: 0, opacity: 1, duration: 0.6 } },
            ];

            animItems.forEach(({ el, from, to }) => {
                if (!el) return;

                gsap.set(el, from);

                ScrollTrigger.create({
                    trigger: el,
                    scroller,           // ← ini kuncinya
                    start: "top 90%",
                    once: true,
                    onEnter: () => {
                        gsap.to(el, { ...to, ease: to.ease || "power3.out" });
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
        <section id="paket" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 ref={headingRef} className="text-6xl font-bold text-gray-900">
                        Pilih Paket Sesuai{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                            Kebutuhan
                        </span>
                    </h2>
                    <p ref={subheadRef} className="mt-4 text-gray-600">
                        Paket upgrade lengkap dengan harga transparan, DP ringan, dan cicilan fleksibel.
                        Semua sudah termasuk instalasi dan garansi.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid md:grid-cols-3 gap-10 items-stretch">

                    {/* HEMAT */}
                    <div ref={card0Ref} className="bg-white rounded-2xl shadow-md p-8 border-2 border-blue-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-shadow">
                        <div className="flex items-center space-x-2">
                            <FaCheck className="w-12 h-12 p-3 rounded-xl bg-blue-100 text-blue-500" />
                            <h3 className="text-xl font-bold text-gray-900">HEMAT</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Solusi hemat untuk upgrade kamar mandi atau dapur dengan kualitas terjamin
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-2">
                            {[
                                { label: "DP Ringan", value: "Mulai 25%" },
                                { label: "Cicilan", value: "12 Bulan" },
                                { label: "Garansi", value: "2 Tahun" },
                                { label: "Instalasi", value: "Premium" },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex items-center gap-2.5 bg-blue-100/70 border border-white/10 rounded-2xl px-3.5 py-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-300/15 flex items-center justify-center text-blue-800 flex-shrink-0">
                                        <CiCreditCard1 />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-blue-800 tracking-wide leading-none mb-1">{label}</p>
                                        <p className="text-xs font-medium text-blue-900 leading-none">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className="mt-6 space-y-3 text-gray-600 flex-1">
                            {["Paket produk esensial", "Instalasi standar", "Garansi 1 tahun", "Konsultasi gratis"].map((item) => (
                                <li key={item} className="flex items-center space-x-2">
                                    <FaCheck className="text-blue-600" /><span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition active:scale-95" onClick={handleNavigatePaket}>
                            Lihat Paket HEMAT
                        </button>
                    </div>

                    {/* PAS (Featured) */}
                    <div ref={card1Ref} className="relative bg-gradient-to-br from-blue-500 to-blue-900 text-white rounded-2xl shadow-2xl p-8 flex flex-col md:scale-110 hover:-translate-y-2 transition-transform">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md shadow-black/20 flex items-center space-x-2">
                            <LiaStarSolid /><span>Paling Laris</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <BsStars className="w-12 h-12 p-3 rounded-xl bg-white/20 text-white" />
                            <h3 className="text-xl font-bold text-white">PAS</h3>
                        </div>
                        <p className="mt-4 text-blue-100">
                            Paket paling populer dengan nilai terbaik untuk renovasi menyeluruh
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-2">
                            {[
                                { label: "DP Ringan", value: "Mulai 25%" },
                                { label: "Cicilan", value: "12 Bulan" },
                                { label: "Garansi", value: "2 Tahun" },
                                { label: "Instalasi", value: "Premium" },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex items-center gap-2.5 bg-white/[0.08] border border-white/10 rounded-2xl px-3.5 py-2.5 hover:bg-white/[0.14] transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-blue-300/15 flex items-center justify-center text-blue-300 flex-shrink-0">
                                        <CiCreditCard1 />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-blue-200 tracking-wide leading-none mb-1">{label}</p>
                                        <p className="text-xs font-medium text-white leading-none">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className="mt-6 space-y-3 text-blue-100 flex-1">
                            {["Semua fitur HEMAT", "Paket produk premium", "Instalasi premium + rapi", "Garansi 2 tahun", "Before-after foto", "Gratis perawatan 1x"].map((item) => (
                                <li key={item} className="flex items-center space-x-2">
                                    <FaCheck className="text-yellow-400" /><span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition active:scale-95" onClick={handleNavigatePaket}>
                            Lihat Paket PAS
                        </button>
                    </div>

                    {/* KOMPLIT */}
                    <div ref={card2Ref} className="bg-white rounded-2xl shadow-md p-8 border-2 border-blue-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-shadow">
                        <div className="flex items-center space-x-2">
                            <LuCrown className="w-12 h-12 p-3 rounded-xl bg-orange-100 text-orange-500" />
                            <h3 className="text-xl font-bold text-gray-900">KOMPLIT</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Solusi all-in untuk renovasi rumah menyeluruh dengan layanan VIP
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-2">
                            {[
                                { label: "DP Ringan", value: "Mulai 25%" },
                                { label: "Cicilan", value: "12 Bulan" },
                                { label: "Garansi", value: "2 Tahun" },
                                { label: "Instalasi", value: "Premium" },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex items-center gap-2.5 bg-blue-100/70 border border-white/10 rounded-2xl px-3.5 py-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-300/15 flex items-center justify-center text-blue-800 flex-shrink-0">
                                        <CiCreditCard1 />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-blue-800 tracking-wide leading-none mb-1">{label}</p>
                                        <p className="text-xs font-medium text-blue-900 leading-none">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className="mt-6 space-y-3 text-gray-600 flex-1">
                            {["Semua fitur PAS", "Paket produk luxury", "Project manager khusus", "Garansi 3 tahun", "Desain interior gratis", "Perawatan berkala 1 tahun"].map((item) => (
                                <li key={item} className="flex items-center space-x-2">
                                    <FaCheck className="text-blue-600" /><span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition active:scale-95" onClick={handleNavigatePaket}>
                            Lihat Paket KOMPLIT
                        </button>
                    </div>

                </div>

                {/* Bottom Note */}
                <p ref={noteRef} className="mt-16 text-center text-gray-500 text-sm">
                    Semua paket sudah termasuk{" "}
                    <span className="text-blue-600 font-medium">survey lokasi</span>,{" "}
                    <span className="text-blue-600 font-medium">konsultasi</span>, dan{" "}
                    <span className="text-blue-600 font-medium">after-sales service</span>.
                </p>

            </div>
        </section>
    );
};

export default PackageSection;