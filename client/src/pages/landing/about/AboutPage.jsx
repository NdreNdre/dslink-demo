import { useEffect, useState } from "react";
import WhyChooseSection from "../../../modules/landing/about/components/section/WhyChoose";
import CTASection from "../../../modules/landing/about/components/section/CTASection";
import Hero from "../../../modules/landing/about/components/section/Hero";
import Culture from "../../../modules/landing/about/components/section/Culture";
import Story from "../../../modules/landing/about/components/section/Story";
import PoweredBy from "../../../modules/landing/about/components/section/PoweredBy";

const AboutPage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-black text-white overflow-hidden">

            <Hero></Hero>

            <Story></Story>

            <WhyChooseSection></WhyChooseSection>

            <Culture></Culture>

            <PoweredBy></PoweredBy>

            <CTASection></CTASection>

        </div>
    );
};

export default AboutPage;