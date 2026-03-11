import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHistory, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const counters = [
    {
        icon: FaHistory,
        value: 25,
        suffix: "+",
        label: "Tahun Ekosistem Depo Pelita",
    },
    {
        icon: FaMapMarkerAlt,
        value: 940,
        suffix: "+",
        label: "Desa Potensial di Jawa Tengah",
    },
    {
        icon: FaCreditCard,
        value: 6,
        suffix: "",
        label: "Partner Pembiayaan Resmi",
    },
    {
        icon: BsStars,
        value: 5,
        suffix: "",
        label: "Program Inovasi Terintegrasi",
    },
];

const CounterSection = () => {
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);
    const [counts, setCounts] = useState(counters.map(() => 0));
    const hasAnimated = useRef(false);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            // Section masuk dari bawah
            gsap.set(sectionRef.current, { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                scroller,
                start: "top 90%",
                once: true,
                onEnter: () => {
                    // 1. Card container masuk
                    gsap.to(sectionRef.current, {
                        y: 0, opacity: 1,
                        duration: 0.7, ease: "power3.out",
                    });

                    // 2. Individual items stagger
                    gsap.fromTo(
                        itemRefs.current,
                        { y: 30, opacity: 0, scale: 0.95 },
                        {
                            y: 0, opacity: 1, scale: 1,
                            duration: 0.55, ease: "back.out(1.5)",
                            stagger: 0.12,
                        }
                    );

                    // 3. Counting-up animation
                    if (!hasAnimated.current) {
                        hasAnimated.current = true;
                        counters.forEach((counter, i) => {
                            const obj = { val: 0 };
                            gsap.to(obj, {
                                val: counter.value,
                                duration: 2,
                                ease: "power2.out",
                                delay: i * 0.15,
                                onUpdate: () => {
                                    setCounts((prev) => {
                                        const next = [...prev];
                                        next[i] = Math.floor(obj.val);
                                        return next;
                                    });
                                },
                                onComplete: () => {
                                    setCounts((prev) => {
                                        const next = [...prev];
                                        next[i] = counter.value;
                                        return next;
                                    });
                                },
                            });
                        });
                    }
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
        // -mt-10 supaya sedikit overlap ke Hero di atas
        <div className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8 pb-2">
            <div
                ref={sectionRef}
                className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-[#0D1B6B]/10 px-6 py-8"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[#0D1B6B]/10">
                    {counters.map((counter, i) => {
                        const Icon = counter.icon;
                        return (
                            <div
                                key={i}
                                ref={(el) => (itemRefs.current[i] = el)}
                                className="flex flex-col items-center text-center px-4"
                            >
                                {/* Icon */}
                                <div className="w-11 h-11 rounded-xl bg-[#D4A03C]/10 flex items-center justify-center mb-3">
                                    <Icon className="w-5 h-5 text-[#D4A03C]" />
                                </div>

                                {/* Counter number */}
                                <div className="text-3xl md:text-4xl font-bold text-[#0D1B6B] leading-none">
                                    {counts[i]}
                                    <span className="text-[#D4A03C]">{counter.suffix}</span>
                                </div>

                                {/* Label */}
                                <p className="mt-2 text-xs md:text-sm text-[#1A3A8F]/70 leading-snug">
                                    {counter.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CounterSection;