import { create } from 'zustand';
import { LuShowerHead } from "react-icons/lu";
import { TbToolsKitchen3 } from "react-icons/tb";
import { RiSofaLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { LuHammer } from "react-icons/lu";

import {
    FaShower,
    FaTools,
    FaCouch,
    FaBed,
    FaFan,
    FaTruck
} from "react-icons/fa";

import {
    MdTv,
    MdBuild,
    MdKitchen
} from "react-icons/md";

import {
    GiWaterTank
} from "react-icons/gi";

import { MdWaterDrop } from 'react-icons/md';

import { FaMattressPillow } from "react-icons/fa6";



import PaketRumah from "../../../../../assets/paket_rumah.jpg";
import PaketDapur from "../../../../../assets/paket_dapur.jpg";
import PaketKamarTidur from "../../../../../assets/paket_kamar.jpg";
import PaketKamarMandi from "../../../../../assets/paket_kamar_mandi.jpg";
import PaketRuangTamu from "../../../../../assets/paket_ruang_tamu.jpg";



export const useListPackageStore = create((set, get) => ({

    activeCategory:'Dapur',

    iconMap: {
        shower: FaShower,
    },

    categories: [
        { 
            name: 'Dapur', 
            heading: 'Paket Solusi Dapur', 
            subHeading: 'Desain dapur yang rapi & siap masak', 
            icon:TbToolsKitchen3,
            imgSrc:PaketDapur
        },
        { 
            name: 'Ruang Keluarga', 
            heading: 'Paket Solusi Ruang Keluarga', 
            subHeading: 'Desain ruang keluarga yang nyaman buat kumpul', 
            icon:RiSofaLine,
            imgSrc:PaketRuangTamu
        },
        { 
            name: 'Kamar Mandi', 
            heading: 'Paket Solusi Kamar Mandi', 
            subHeading: 'Upgrade kamar mandi berasa hotel', 
            icon:LuShowerHead,
            imgSrc:PaketKamarMandi 
        },
        { 
            name: 'Kamar Tidur', 
            heading: 'Paket Solusi Kamar Tidur', 
            subHeading: 'Desain kamar tidur yang membuat tidur menjadi pules', 
            icon:IoBedOutline,
            imgSrc:PaketKamarTidur
        },
        { 
            name: 'Renovasi Ringan', 
            heading: 'Paket Solusi Renovasi Ringan', 
            subHeading: 'Upgrade Rumah Cepat', 
            icon:LuHammer,
            imgSrc:PaketRumah
        },
    ],

    packagesByCategory: {
        'Kamar Mandi': [
            {
                name: "Hemat",
                subtitle: "Si Paling Nyaman — Solusi essential kamar mandi bersih & fungsional",
                highlight: false,
                images: [PaketKamarMandi, PaketDapur, PaketRuangTamu],
                features: [
                    "Shower set basic (hand shower + holder)",
                    "Kran / mixer basic",
                    "Floor drain + aksesoris kecil",
                    "Bonus: konsultasi kebutuhan pemasangan (5 menit)",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                tagline:'Si Paling Nyaman',
                imgHero:PaketKamarMandi,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ]
            },
            {
                name: "Pas",
                subtitle: "Si Paling Hotel — Pilihan paling populer & seimbang",
                highlight: true,
                images: [PaketKamarMandi, PaketDapur, PaketRuangTamu],
                features: [
                    "Shower set upgrade (lebih kuat / lebih elegan)",
                    "Water heater kapasitas menengah",
                    "Pipa & fitting instalasi standar (1 titik)",
                    "Termasuk: instalasi standar (kondisi normal)",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Si Paling Hotel',
                imgHero:PaketKamarMandi,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Komplit",
                subtitle: "Si Paling Sultan — Solusi premium siap pakai",
                highlight: false,
                images: [PaketKamarMandi, PaketDapur, PaketRuangTamu],
                features: [
                    "Shower set premium (rain shower / full set)",
                    "Water heater premium (hemat listrik + safety)",
                    "Pipa & fitting lengkap + stop kran + safety valve",
                    "Instalasi + pengecekan tekanan air + finishing rapi",
                    "Bonus: garansi jasa instalasi 14–30 hari",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Si Paling Sultan',
                imgHero:PaketKamarMandi,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
        ],
        'Dapur': [
            {
                name: "Hemat",
                subtitle: "Dapur Praktis — Solusi dapur esensial & rapi",
                highlight: false,
                images: [PaketDapur, PaketKamarMandi, PaketRuangTamu],
                features: [
                    "Rak piring / storage basic",
                    "Small appliance esensial (rice cooker / blender / dispenser basic)",
                    "Organizer dapur (hook / holder / box)",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Dapur Praktis',
                imgHero:PaketDapur,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Pas",
                subtitle: "Dapur Aesthetic — Pilihan paling populer & fungsional",
                highlight: true,
                images: [PaketDapur, PaketKamarMandi, PaketRuangTamu],
                features: [
                    "Kompor (gas/induksi) + regulator/selang (jika gas)",
                    "Rice cooker / air fryer basic (pilih 1)",
                    "Rak / storage upgrade",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Dapur Aesthetic',
                imgHero:PaketDapur,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Komplit",
                subtitle: "Dapur Master Chef — Lengkap & siap masak apa saja",
                highlight: false,
                images: [PaketDapur, PaketKamarMandi, PaketRuangTamu],
                features: [
                    "Microwave / oven listrik (pilih sesuai kebutuhan)",
                    "Air fryer / cooker premium (pilih 1)",
                    "Set storage & organizer premium",
                    "Bonus: free setting layout & rekomendasi penempatan",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Dapur Master Chef',
                imgHero:PaketDapur,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
        ],
        'Ruang Keluarga': [
            {
                name: "Hemat",
                subtitle: "Ruang Tamu Rapi — Esensial & nyaman",
                highlight: false,
                images: [PaketRuangTamu, PaketDapur, PaketKamarMandi],
                features: [
                    "Meja tamu + karpet kecil / runner",
                    "Kipas / standing fan",
                    "Lampu / pencahayaan basic (opsional)",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Ruang Tamu Rapi',
                imgHero:PaketRuangTamu,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Pas",
                subtitle: "Nyaman & Fungsional — Pilihan paling populer",
                highlight: true,
                images: [PaketRuangTamu, PaketDapur, PaketKamarMandi],
                features: [
                    "Sofa 2-seater / sofa bed ekonomis",
                    "Meja tamu + karpet",
                    "Rak TV / bracket TV (opsional)",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Nyaman & Fungsional',
                imgHero:PaketRuangTamu,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Komplit",
                subtitle: "Keluarga Betah — Ruang keluarga lengkap & betah nongkrong",
                highlight: false,
                images: [PaketRuangTamu, PaketDapur, PaketKamarMandi],
                features: [
                    "Sofa lebih besar / L-sofa ekonomis",
                    "Meja tamu + karpet premium",
                    "Smart TV / TV (opsional)",
                    "Termasuk: pengantaran + setting barang",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Keluarga Betah',
                imgHero:PaketRuangTamu,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
        ],
        'Kamar Tidur': [
            {
                name: "Hemat",
                subtitle: "Tidur Enak — Solusi istirahat berkualitas",
                highlight: false,
                images: [PaketKamarTidur, PaketKamarMandi, PaketDapur],
                features: [
                    "Kasur foam / spring ekonomis (size pilihan)",
                    "Bantal + sprei set basic",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Tidur Enak',
                imgHero:PaketKamarTidur,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Pas",
                subtitle: "Tidur Mantap — Pilihan paling populer & nyaman",
                highlight: true,
                images: [PaketKamarTidur, PaketKamarMandi, PaketDapur],
                features: [
                    "Kasur upgrade (lebih tebal / lebih nyaman)",
                    "Lemari / storage simple (atau nakas)",
                    "Sprei set upgrade",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Tidur Mantap',
                imgHero:PaketKamarTidur,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Komplit",
                subtitle: "Kamar Tidur Hotel — Mewah & lengkap seperti kamar hotel",
                highlight: false,
                images: [PaketKamarTidur, PaketKamarMandi, PaketDapur],
                features: [
                    "Kasur premium + topper",
                    "Lemari / wardrobe lebih solid",
                    "Meja rias kecil / nakas + lampu tidur",
                    "Bonus: free ongkir + setting & rapihin packaging",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Kamar Tidur Hotel',
                imgHero:PaketKamarTidur,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
        ],
        'Renovasi Ringan': [
            {
                name: "Hemat",
                subtitle: "Listrik Siap — Solusi esensial kelistrikan rumah",
                highlight: false,
                images: [PaketRumah, PaketDapur, PaketKamarMandi],
                features: [
                    "Kabel roll / terminal berkualitas",
                    "Paket lampu LED hemat (beberapa titik)",
                    "Stop kontak set / MCB (opsional)",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Listrik Siap',
                imgHero:PaketRumah,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Pas",
                subtitle: "Perlengkapan Alat Lengkap — Pilihan paling populer",
                highlight: true,
                images: [PaketRumah, PaketDapur, PaketKamarMandi],
                features: [
                    "Paket lampu + stop kontak + kabel (lebih lengkap)",
                    "Bor kecil / tool kit basic",
                    "Tangga lipat kecil (opsional)",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Perlengkapan Alat Lengkap',
                imgHero:PaketRumah,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
            {
                name: "Komplit",
                subtitle: "Renov Ringan Komplet — Semua yang dibutuhkan untuk upgrade rumah",
                highlight: false,
                images: [PaketRumah, PaketDapur, PaketKamarMandi],
                features: [
                    "Tool set upgrade (bor + mata bor + toolbox)",
                    "Paket listrik lengkap (lampu, kabel, stop kontak)",
                    "Cat + kuas/roller (opsional)",
                    "Bonus: pengantaran + konsultasi kebutuhan renov",
                ],
                feature:[
                    { 
                        title:'Shower Set Basic',
                        desc:'Shower sederhana yang tetap nyaman digunakan untuk mandi sehari-hari',
                        icon:"shower",
                    },
                    { 
                        title:'Kran / Mixer Basic',
                        desc:'Kran air standar dengan desain simpel dan mudah digunakan',
                        icon:"shower",
                    },
                    { 
                        title:'Floor Drain & Aksesoris',
                        desc:'Floor drain lengkap dengan aksesoris kecil agar instalasi lebih rapi',
                        icon:"shower",
                    },
                    { 
                        title:'Konsultasi Pemasangan',
                        desc:'Gratis konsultasi singkat untuk memastikan kebutuhan instalasi sesuai',
                        icon:"shower",
                    }
                ],
                addOn:[
                    {
                        img:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                        title:   'Pompa Booster',
                        desc:    'Tingkatkan tekanan air hingga 2x lipat untuk pengalaman mandi yang lebih nyaman',
                        benefit: 'Shower makin deras & nyaman',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                        title:   'Tandon Air',
                        desc:    'Cadangan air bersih 500–1000 liter, tak perlu khawatir saat air PAM mati',
                        benefit: 'Tak perlu khawatir air mati',
                    },
                    {
                        img:     'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&q=80',
                        title:   'Cermin & Kabinet',
                        desc:    'Cermin modern dengan kabinet penyimpanan built-in untuk tampilan lebih bersih',
                        benefit: 'Tampilan kamar mandi makin premium',
                    },
                ],
                tagline:'Renov Ringan Komplet',
                imgHero:PaketRumah,
                imgBefore : PaketKamarMandi,
                imgAfter : PaketKamarTidur,
            },
        ],
    },

    setActiveCategory: (category) => set({ activeCategory: category }),

}))