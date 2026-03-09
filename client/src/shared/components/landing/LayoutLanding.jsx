import { Outlet } from "react-router-dom"
import NavbarLanding from "./NavbarLanding";
import FooterLanding from "./FooterLanding"; 

import { FaWhatsapp } from "react-icons/fa";

const LayoutLanding = () => {

    const handleWhatsapp = () => {
        const phone = "6282119466523";
        const message = `Halo, saya tertarik dengan Paket DS Link. Boleh saya melihat digital katalognya?`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 transition-colors duration-200 ease-in-out">

            <NavbarLanding></NavbarLanding>

            <div className="flex-1 flex flex-col overflow-hidden relative">
                <main className="flex-1 overflow-y-auto h-full">
                    <Outlet></Outlet>

                    <FooterLanding></FooterLanding>

                    
                </main>

                
                <FaWhatsapp onClick={handleWhatsapp} className="rounded-full z-50 p-4 w-16 h-16 fixed bottom-8 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] hover:bg-[#1aa854] text-white cursor-pointer shadow-lg shadow-black/50"></FaWhatsapp>
                
            </div>
            
        </div>
    )

}

export default LayoutLanding;