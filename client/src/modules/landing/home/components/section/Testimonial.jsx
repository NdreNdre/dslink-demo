import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Ganti data testimonials
const testimonials = [
    {
        name: "Pak Suroto",
        role: "Pelanggan DS Link",
        location: "Mujur, Kroya",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Kamar mandi saya jadi kayak hotel. Cicilannya lebih murah dari ngopi tiap hari. Dan gratis ongkir — barangnya diantar sampai depan rumah.",
        rating: 5,
    },
    {
        name: "Bu Ningsih",
        role: "Pelanggan DS Link",
        location: "Kroya, Cilacap",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Yang bikin percaya itu barangnya dari Depo Pelita, bukan abal-abal. Terus ada garansi 1 bulan ganti baru. Kalau rusak tinggal bawa, langsung dituker.",
        rating: 5,
    },
    {
        name: "Mas Dian",
        role: "Pelanggan DS Link",
        location: "Sampang, Cilacap",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        text: "Saya bandingkan harga ke mana-mana. DS Link lebih murah karena sudah termasuk pasang. AC saya dipasang teknisi mereka, rapi dan gratis.",
        rating: 5,
    },
];

export default function TestimonialSection() {
    const [current, setCurrent] = useState(0);

    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const ratingCardRef = useRef(null);
    const sliderRef = useRef(null);

    // AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);

    // SCROLL ANIMATIONS
    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // ── 1. LEFT SIDE — heading & paragraph slide dari kiri ───────────
            const leftChildren = leftRef.current?.querySelectorAll("h2, p");
            leftChildren?.forEach((el, i) => {
                gsap.set(el, { x: -50, opacity: 0 });
                ScrollTrigger.create({
                    trigger: el,
                    scroller,
                    start: "top 88%",
                    once: true,
                    onEnter: () => {
                        gsap.to(el, {
                            x: 0, opacity: 1,
                            duration: 0.7, ease: "power3.out",
                            delay: i * 0.12,
                        });
                    },
                });
            });

            // ── 2. RATING CARD — pop in dari bawah ───────────────────────────
            gsap.set(ratingCardRef.current, { y: 30, opacity: 0, scale: 0.9 });
            ScrollTrigger.create({
                trigger: ratingCardRef.current,
                scroller,
                start: "top 90%",
                once: true,
                onEnter: () => {
                    gsap.to(ratingCardRef.current, {
                        y: 0, opacity: 1, scale: 1,
                        duration: 0.6, ease: "back.out(1.6)", delay: 0.3,
                    });
                },
            });

            // ── 3. SLIDER — slide dari kanan ─────────────────────────────────
            gsap.set(sliderRef.current, { x: 80, opacity: 0 });
            ScrollTrigger.create({
                trigger: sliderRef.current,
                scroller,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    gsap.to(sliderRef.current, {
                        x: 0, opacity: 1,
                        duration: 0.85, ease: "power3.out", delay: 0.1,
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
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-100 via-sky-200 to-blue-300 lg:rounded-t-[25%]">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div ref={leftRef}>

                    <p className="text-sm font-bold tracking-widest uppercase text-amber-500 mb-2">
                        Bukti Nyata
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                        Tetangga Sudah Upgrade Rumahnya.{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                            Kapan Giliran Anda?
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-8">
                        Outlet pertama DS Link di Mujur, Kroya sudah melayani ratusan keluarga di Cilacap dan sekitarnya.
                    </p>

                    <div ref={ratingCardRef} className="bg-white shadow-lg rounded-2xl p-6 inline-block">
                        <p className="text-gray-600 mb-2">Rating rata-rata</p>
                        <div className="flex items-center gap-2 text-orange-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" />
                            ))}
                            <span className="text-gray-800 font-semibold ml-2">5/5</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE SLIDER */}
                <div ref={sliderRef} className="relative">

                    <div className="relative overflow-hidden rounded-3xl">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ${
                                    index === current
                                        ? "opacity-100 translate-x-0 relative"
                                        : "opacity-0 translate-x-10 absolute inset-0"
                                }`}
                            >
                                <div className="bg-white shadow-2xl rounded-3xl p-10 border border-blue-100">
                                    <div className="text-blue-600 text-6xl mb-6">"</div>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-8">{item.text}</p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                                            <p className="text-sm text-gray-500">{item.role}</p>
                                            <p className="text-xs text-blue-500 mt-0.5">📍 {item.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex mt-6 text-orange-400">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ARROWS */}
                    <button onClick={prevSlide} className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-blue-50 transition">
                        <ChevronLeft />
                    </button>
                    <button onClick={nextSlide} className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-blue-50 transition">
                        <ChevronRight />
                    </button>

                    {/* DOTS */}
                    <div className="flex justify-center mt-8 gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    current === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}