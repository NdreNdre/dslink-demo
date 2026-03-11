import HeroSection from "../../../modules/landing/home/components/section/Hero";
import PoweredSection from "../../../modules/landing/home/components/section/PoweredBy";
import PackageSection from "../../../modules/landing/home/components/section/Package";
import WorkStep from "../../../modules/landing/home/components/section/WorkStep";
import BeforeAfterSection from "../../../modules/landing/home/components/section/BeforeAfter";
import TestimonialSection from "../../../modules/landing/home/components/section/Testimonial";
import FranchiseSection from "../../../modules/landing/home/components/section/Franchise";
import CTASection from "../../../modules/landing/home/components/section/CTASection";

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>

            <PoweredSection></PoweredSection>

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