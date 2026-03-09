import React from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

export default function FooterLanding() {
    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid md:grid-cols-4 gap-12">

                {/* LOGO & DESC */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                    DS LINK
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Solusi terpadu upgrade rumah dan peluang kemitraan bisnis
                    home improvement terpercaya di Indonesia.
                    </p>

                    <div className="flex gap-4">
                    <a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                        <Facebook size={18} />
                    </a>
                    <a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                        <Instagram size={18} />
                    </a>
                    <a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                        <Linkedin size={18} />
                    </a>
                    <a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                        <Youtube size={18} />
                    </a>
                    </div>
                </div>

                {/* MENU */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Menu</h4>
                    <ul className="space-y-3 text-sm">
                    <li>
                        <a href="#" className="hover:text-white transition">
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition">
                        Paket Produk
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition">
                        Tentang Kami
                        </a>
                    </li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>

                    <div className="space-y-4 text-sm">
                    <div className="flex gap-3 items-start">
                        <MapPin size={16} className="mt-1 text-indigo-400" />
                        <span>
                        Jl. Raya Industri No. 123  
                        Jakarta Selatan 12345
                        </span>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Phone size={16} className="text-indigo-400" />
                        <span>0800-123-4567</span>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Mail size={16} className="text-indigo-400" />
                        <span>info@dslink.co.id</span>
                    </div>
                    </div>
                </div>

                {/* JAM OPERASIONAL */}
                <div>
                    <h4 className="text-white font-semibold mb-4">
                    Jam Operasional
                    </h4>

                    <div className="text-sm space-y-2">
                    <p>Senin - Jumat: 08:00 - 17:00</p>
                    <p>Sabtu: 08:00 - 14:00</p>
                    <p>Minggu: Libur</p>
                    </div>
                </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-slate-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>© 2026 DS LINK. All rights reserved.</p>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition">
                    Kebijakan Privasi
                    </a>
                    <a href="#" className="hover:text-white transition">
                    Syarat & Ketentuan
                    </a>
                </div>
                </div>

            </div>
        </footer>
    );
}