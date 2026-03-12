import useReveal from '../../../../../shared/hooks/useReveal';
import { useListPackageStore } from '../../../package/list/stores/listPackage.store';
import { useNavigate } from 'react-router-dom';

const trustItems = [
    'Supply Depo Pelita',
    '8 Partner Cicilan',
    'Gratis Ongkir 15km',
    'Garansi 1 Bulan',
];

const WaIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.528 5.858L.057 23.5l5.788-1.517A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.497-5.11-1.367l-.366-.217-3.436.9.917-3.347-.238-.386A9.947 9.947 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
);

export default function CTASection() {

    const navigate = useNavigate();
    const activeCategory = useListPackageStore((s) => s.activeCategory);
    const ref = useReveal();

    const handleWhatsapp = () => {
        const phone = "628139120388";
        const message = `Halo DS Link, saya [nama] dari [lokasi]. [pesan]. No HP: [telepon]`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    const handleScrollFranchise = () => {
        navigate('/', { state: { scrollTo: 'franchise' } });
    };

    return (
        <section
            className="relative py-20 px-5 md:px-10 lg:px-16 text-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0D1B6B 0%, #050D35 100%)" }}
        >
            {/* Gold glow di tengah */}
            <div
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(212,160,60,0.13), transparent 65%)" }}
            />
            {/* Navy glow bawah */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(26,58,143,0.3), transparent 70%)" }}
            />

            <div ref={ref} className="reveal relative z-10">

                {/* Label */}
                <p
                    className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[2px] uppercase mb-4"
                    style={{ color: "#D4A03C" }}
                >
                    MULAI SEKARANG
                </p>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug max-w-2xl mx-auto">
                    Pasar Desa Belum Ada yang Garap Serius.{" "}
                    <em
                        className="not-italic bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(to right, #D4A03C, #E8C76A)" }}
                    >
                        Sampai Sekarang.
                    </em>
                </h2>

                {/* Subtext */}
                <p className="text-sm font-light leading-relaxed max-w-md mx-auto mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                    940+ desa di Jawa Tengah menunggu solusi kebutuhan rumah yang terjangkau. Anda bisa jadi yang pertama di wilayah Anda. Konsultasi gratis, tanpa komitmen.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3.5 justify-center mt-10">

                    {/* WhatsApp — tetap #25D366 sesuai spec */}
                    <button
                        onClick={handleWhatsapp}
                        className="flex items-center justify-center gap-2.5 text-white px-7 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                            backgroundColor: "#25D366",
                            boxShadow: "0 8px 28px rgba(37,211,102,0.3)",
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#1aa854"}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#25D366"}
                    >
                        <WaIcon />
                        Tanya Info Franchise
                    </button>

                    {/* Secondary — Gold border */}
                    <button
                        onClick={handleScrollFranchise}
                        className="bg-transparent px-7 py-4 rounded-full text-sm font-normal transition-all duration-200"
                        style={{
                            border: "1px solid rgba(212,160,60,0.4)",
                            color: "rgba(255,255,255,0.75)",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = "#D4A03C";
                            e.currentTarget.style.color = "#E8C76A";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = "rgba(212,160,60,0.4)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                        }}
                    >
                        Lihat Paket Franchise
                    </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-10">
                    {trustItems.map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-1.5 text-xs font-light"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                            <span style={{ color: "#D4A03C" }} className="font-bold">✓</span>
                            {item}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}