import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import HeroSection from "../../../modules/landing/home/components/section/Hero";
import PoweredSection from "../../../modules/landing/home/components/section/PoweredBy";
import PackageSection from "../../../modules/landing/home/components/section/Package";
import WorkStep from "../../../modules/landing/home/components/section/WorkStep";
import BeforeAfterSection from "../../../modules/landing/home/components/section/BeforeAfter";
import TestimonialSection from "../../../modules/landing/home/components/section/Testimonial";
import FranchiseSection from "../../../modules/landing/home/components/section/Franchise";
import CTASection from "../../../modules/landing/home/components/section/CTASection";
import CounterSection from "../../../modules/landing/home/components/section/Counter";
import TrustHighlightSection from "../../../modules/landing/home/components/section/TrustHighlight";

const HomePage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            setTimeout(() => {
                element?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    }, [location.state]);

    return (
        <div>
            <HeroSection></HeroSection>

            {/* <CounterSection></CounterSection> */}

            <PoweredSection></PoweredSection>

            {/* <TrustHighlightSection></TrustHighlightSection> */}

            {/* <PackageSection></PackageSection> */}

            {/* <WorkStep></WorkStep> */}

            <BeforeAfterSection></BeforeAfterSection>

            <TestimonialSection></TestimonialSection>

            <FranchiseSection></FranchiseSection>

            <CTASection></CTASection>
            
        </div>
    );
};

export default HomePage;