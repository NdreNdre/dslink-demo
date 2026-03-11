import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LogoNavbarBlue from "../../../assets/DSLink_logo_text_3.png";
import LogoNavbarWhite from "../../../assets/DSLink_logo_white_text_2.png";
import { useNavigate } from "react-router-dom";

const NavbarLanding = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/" && location.pathname !== "/about-us") {
            setScrolled(true);
            return;
        }

        const heroSection = document.getElementById("hero");

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (heroSection) {
            observer.observe(heroSection);
        }

        return () => {
            if (heroSection) observer.unobserve(heroSection);
        };
    }, [location.pathname]);

    // Kunci scroll body saat menu terbuka
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const navLinks = [
        { href: "/", label: "Home" },
        // { href: "/package", label: "Paket Upgrade" },
        { href: "/about-us", label: "Tentang Kami" },
    ];

    const handleNavigate = (url) => {
        navigate(url)
    }

    const handleNavigateMobile = (url) => {
        setMenuOpen(false)
        navigate(url)
    }

    const handleWhatsapp = () => {
        const phone = "628139120388";
        const message = `Halo DS Link, saya [nama] dari [lokasi]. [pesan]. No HP: [telepon]`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
            >
                <div className="mx-auto px-10 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <img
                        src={scrolled ? LogoNavbarBlue : LogoNavbarWhite}
                        className="w-32 h-12 cursor-pointer"
                        alt="Logo Navbar"
                        onClick={() => navigate('/')}
                    />

                    {/* Menu Desktop */}
                    <div className="flex space-x-5 items-center">
                    <div
                        className={`hidden md:flex space-x-8 font-semibold transition-colors duration-300 ${
                            scrolled ? "text-gray-800" : "text-white"
                        }`}
                    >
                        {navLinks.map((link) => (
                            <button key={link.href} onClick={() => handleNavigate(link.href)} >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <button
                            onClick={handleWhatsapp}
                            className="hidden md:flex px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D4A03C] to-[#E8C76A] text-[#0D1B6B] transition-all duration-200 hover:brightness-110 active:scale-95 shadow-md shadow-[#D4A03C]/30"
                        >
                            Jadi Mitra →
                        </button>
                    </div>

                    {/* Burger Button Mobile */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Buka menu"
                    >
                        <span className={`block w-6 h-0.5 transition-colors duration-300 ${scrolled ? "bg-gray-800" : "bg-white"}`} />
                        <span className={`block w-6 h-0.5 transition-colors duration-300 ${scrolled ? "bg-gray-800" : "bg-white"}`} />
                        <span className={`block w-6 h-0.5 transition-colors duration-300 ${scrolled ? "bg-gray-800" : "bg-white"}`} />
                    </button>
                </div>
            </nav>

            {/* Overlay backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${
                    menuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu Mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-72 z-50 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header panel */}
                <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
                    <img src={LogoNavbarBlue} className="w-28 h-10" alt="Logo" />
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Tutup menu"
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
                    >
                        {/* X icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col px-6 py-8 gap-2">
                    {navLinks.map((link) => (
                        <button
                            // key={link.href}
                            // href={link.href}
                            onClick={() => handleNavigateMobile(link.href)}
                            className="text-gray-800 font-semibold text-lg py-3 border-b border-gray-100 hover:text-blue-600 transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}

                    <button
                        onClick={() => { setMenuOpen(false); handleWhatsapp(); }}
                        className="mt-4 w-full py-3 rounded-full font-semibold text-sm bg-[#D4A03C] text-[#0D1B6B] shadow-md shadow-[#D4A03C]/30 hover:brightness-110 active:scale-95 transition-all duration-200"
                    >
                        Jadi Mitra →
                    </button>
                </nav>
            </div>
        </>
    );
};

export default NavbarLanding;