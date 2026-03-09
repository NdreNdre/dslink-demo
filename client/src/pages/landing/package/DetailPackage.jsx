import BeforeAfterSlider from "../../../modules/landing/package/detail/components/section/BeforeAfterSlider";
import CicilanSection from "../../../modules/landing/package/detail/components/section/CicilanSection";
import HeroSection from "../../../modules/landing/package/detail/components/section/HeroSection";
import LayananSection from "../../../modules/landing/package/detail/components/section/LayananSection";
import ProdukSection from "../../../modules/landing/package/detail/components/section/ProdukSection";
import TestiSection from "../../../modules/landing/package/detail/components/section/TestiSection";
import WhatYouGet from "../../../modules/landing/package/detail/components/section/WhatYouGet";
import CTASection from "../../../modules/landing/package/detail/components/section/CTASection";


const DetailPackage = () => {
    return(
        <div>
            <HeroSection />
            <WhatYouGet />
            <LayananSection />
            <CicilanSection />
            <ProdukSection />
            <TestiSection />
            <CTASection />
        </div>
    )
}

export default DetailPackage;