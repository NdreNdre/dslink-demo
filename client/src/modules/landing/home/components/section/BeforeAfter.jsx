import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../ImageWithFallback";
import { Award, CheckCircle, Clock, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Renovasi Dapur Modern",
        category: "Kitchen Upgrade",
        duration: "14 Hari",
        budget: "Rp 12 Juta",
        before: "https://images.unsplash.com/photo-1579618217299-92460380cf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBraXRjaGVuJTIwYmVmb3JlJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NzIwMTYzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        after: "https://images.unsplash.com/photo-1769739132671-ac41c439d51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZW5vdmF0ZWQlMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBicmlnaHR8ZW58MXx8fHwxNzcyMDgzMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        improvements: ["Kabinet baru premium", "Countertop granite", "Lighting modern", "Lantai keramik"],
    },
    {
        id: 2,
        title: "Renovasi Kamar Mandi",
        category: "Bathroom Upgrade",
        duration: "10 Hari",
        budget: "Rp 8 Juta",
        before: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbm92YXRpb24lMjBtb2Rlcm4lMjBjbGVhbnxlbnwxfHx8fDE3NzIwODMxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        after: "https://images.unsplash.com/photo-1651442897558-47cff0f64bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0ZWQlMjBtb2Rlcm4lMjBiYXRocm9vbSUyMGFmdGVyfGVufDF8fHx8MTc3MjA4MzE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        improvements: ["Shower modern", "Wastafel premium", "Keramik dinding", "Ventilasi upgrade"],
    },
];

const trustBadges = [
    { icon: Award,       label: "Sertifikasi Resmi", colorFrom: "#D4A03C", colorTo: "#E8C76A" },
    { icon: CheckCircle, label: "100% Garansi",      colorFrom: "#0D1B6B", colorTo: "#1A3A8F" },
    { icon: Clock,       label: "On-Time Delivery",  colorFrom: "#1A3A8F", colorTo: "#0033CC" },
    { icon: Users,       label: "Tim Profesional",   colorFrom: "#D4A03C", colorTo: "#0D1B6B" },
];

const BeforeAfterSection = () => {
    const headingRef = useRef(null);
    const subheadRef = useRef(null);
    const badgeRefs = useRef([]);
    const projectRefs = useRef([]);

    useEffect(() => {
        const scroller = document.querySelector("main");

        const timer = setTimeout(() => {

            gsap.set([headingRef.current, subheadRef.current], { y: 40, opacity: 0 });
            ScrollTrigger.create({
                trigger: headingRef.current,
                scroller, start: "top 88%", once: true,
                onEnter: () => {
                    gsap.to(headingRef.current, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" });
                    gsap.to(subheadRef.current, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.15 });
                },
            });

            badgeRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.set(el, { y: 40, opacity: 0, scale: 0.92 });
                ScrollTrigger.create({
                    trigger: el, scroller, start: "top 90%", once: true,
                    onEnter: () => {
                        gsap.to(el, { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.5)", delay: i * 0.1 });
                    },
                });
            });

            projectRefs.current.forEach((project, i) => {
                if (!project) return;
                const isEven = i % 2 === 0;

                const header = project.querySelector(".project-header");
                if (header) {
                    gsap.set(header, { x: isEven ? -50 : 50, opacity: 0 });
                    ScrollTrigger.create({
                        trigger: header, scroller, start: "top 88%", once: true,
                        onEnter: () => gsap.to(header, { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }),
                    });
                }

                const beforeImg = project.querySelector(".img-before");
                if (beforeImg) {
                    gsap.set(beforeImg, { x: -60, opacity: 0 });
                    ScrollTrigger.create({
                        trigger: beforeImg, scroller, start: "top 88%", once: true,
                        onEnter: () => gsap.to(beforeImg, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }),
                    });
                }

                const afterImg = project.querySelector(".img-after");
                if (afterImg) {
                    gsap.set(afterImg, { x: 60, opacity: 0 });
                    ScrollTrigger.create({
                        trigger: afterImg, scroller, start: "top 88%", once: true,
                        onEnter: () => gsap.to(afterImg, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.15 }),
                    });
                }

                const pills = project.querySelectorAll(".improvement-pill");
                pills.forEach((pill, j) => {
                    gsap.set(pill, { scale: 0.7, opacity: 0 });
                    ScrollTrigger.create({
                        trigger: pill, scroller, start: "top 92%", once: true,
                        onEnter: () => gsap.to(pill, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.8)", delay: j * 0.08 }),
                    });
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
        <section
            className="py-24 relative overflow-hidden bg-gradient-to-t from-gray-100 to-white"
            
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 ref={headingRef} className="text-4xl lg:text-6xl font-black mt-6" style={{ color: "#0D1B6B" }}>
                        Ini Cara Kami{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(to right, #D4A03C, #E8C76A)" }}
                        >
                            Bekerja
                        </span>
                    </h2>
                    <p ref={subheadRef} className="text-xl max-w-2xl mx-auto mt-4" style={{ color: "#1A3A8F" }}>
                        Hasil nyata dari proyek-proyek yang telah kami selesaikan dengan standar kualitas tinggi
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {trustBadges.map((badge, i) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={i}
                                ref={(el) => (badgeRefs.current[i] = el)}
                                className="rounded-2xl p-6 shadow-sm border"
                                style={{
                                    backgroundColor: "white",
                                    borderColor: "rgba(13,27,107,0.1)",
                                }}
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(to bottom right, ${badge.colorFrom}, ${badge.colorTo})`,
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="font-bold text-sm" style={{ color: "#0D1B6B" }}>
                                        {badge.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Projects */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div key={project.id} ref={(el) => (projectRefs.current[index] = el)}>

                            {/* Project Header */}
                            <div className="project-header mb-6">
                                <span
                                    className="px-4 py-1 rounded-full text-xs font-bold text-white"
                                    style={{ backgroundColor: "#D4A03C" }}
                                >
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold mt-3" style={{ color: "#0D1B6B" }}>
                                    {project.title}
                                </h3>
                                {/* <div className="flex gap-6 mt-2 text-sm" style={{ color: "#1A3A8F" }}>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />{project.duration}
                                    </span>
                                    <span>💰 {project.budget}</span>
                                </div> */}
                            </div>

                            {/* Before After Card */}
                            <div className="rounded-3xl shadow-lg overflow-hidden" style={{ backgroundColor: "white" }}>
                                <div className="grid grid-cols-1 lg:grid-cols-2">

                                    <div className="img-before relative">
                                        <span className="absolute top-4 left-4 z-10 text-white text-xs px-3 py-1 rounded-full"
                                            style={{ backgroundColor: "#0D1B6B" }}>
                                            SEBELUM
                                        </span>
                                        <ImageWithFallback src={project.before} alt="Before" className="w-full h-80 object-cover" />
                                    </div>

                                    <div className="img-after relative">
                                        <span className="absolute top-4 left-4 z-10 text-white text-xs px-3 py-1 rounded-full"
                                            style={{ backgroundColor: "#D4A03C" }}>
                                            SESUDAH ✨
                                        </span>
                                        <ImageWithFallback src={project.after} alt="After" className="w-full h-80 object-cover" />
                                    </div>

                                </div>

                                {/* Improvements */}
                                <div className="p-8" style={{ backgroundColor: "#F0EDE8" }}>
                                    <h4 className="font-semibold mb-4 flex items-center gap-2" style={{ color: "#0D1B6B" }}>
                                        <CheckCircle className="w-5 h-5" style={{ color: "#D4A03C" }} />
                                        Yang Kami Kerjakan:
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                        {project.improvements.map((item, i) => (
                                            <div
                                                key={i}
                                                className="improvement-pill flex justify-center items-center gap-2 p-2 rounded-full border"
                                                style={{
                                                    borderColor: "rgba(13,27,107,0.25)",
                                                    backgroundColor: "rgba(13,27,107,0.05)",
                                                    color: "#0D1B6B",
                                                }}
                                            >
                                                <span className="font-semibold">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BeforeAfterSection;