import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Gunawan Soewito",
        role: "Founder Smile Consulting Indonesia",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Selama bekerjasama dengan tim ini, kami sangat puas. Kualitas pekerjaan rapi, timeline jelas, dan komunikasinya sangat profesional.",
        rating: 5,
    },
    {
        name: "Anya Tamara Akbar",
        role: "Entrepreneur",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Prosesnya transparan dari awal sampai selesai. Harga masuk akal dan hasil renovasinya benar-benar memuaskan.",
        rating: 5,
    },
    {
        name: "Ary Darma",
        role: "Developer",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        text: "Instalasi cepat, hasil bersih dan sesuai ekspektasi. Tim sangat responsif dan membantu selama pengerjaan.",
        rating: 4,
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
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                        Apa Kata{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                            Pelanggan Kami
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-8">
                        Lebih dari 500+ proyek telah kami selesaikan dengan standar
                        profesional. Kepuasan pelanggan adalah prioritas utama kami.
                    </p>

                    <div ref={ratingCardRef} className="bg-white shadow-lg rounded-2xl p-6 inline-block">
                        <p className="text-gray-600 mb-2">Rating rata-rata</p>
                        <div className="flex items-center gap-2 text-orange-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" />
                            ))}
                            <span className="text-gray-800 font-semibold ml-2">4.8/5</span>
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