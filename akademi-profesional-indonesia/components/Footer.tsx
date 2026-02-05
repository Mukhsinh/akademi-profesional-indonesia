import Link from 'next/link'
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-sm opacity-30"></div>
                  <div className="relative bg-emerald-600 p-2.5 rounded-xl shadow-lg">
                    <Building2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight text-white">PT. Akademi</h3>
                  <h3 className="font-semibold text-[13px] leading-tight text-gray-300">Profesional Indonesia</h3>
                </div>
              </div>
              <p className="text-gray-300 text-[15px] leading-relaxed">
                Mitra strategis terpercaya dalam pengembangan ekosistem kesehatan digital dan peningkatan kapasitas SDM medis di Indonesia.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-5">
              <h4 className="font-bold text-white text-base uppercase tracking-wider mb-5">Perusahaan</h4>
              <div className="flex flex-col gap-3">
                <Link href="/tentang" className="text-gray-300 hover:text-emerald-400 transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Tentang Kami
                </Link>
                <Link href="/layanan" className="text-gray-300 hover:text-emerald-400 transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Aplikasi
                </Link>
                <Link href="/pelatihan" className="text-gray-300 hover:text-emerald-400 transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Program Pelatihan
                </Link>
                <Link href="/artikel" className="text-gray-300 hover:text-emerald-400 transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Berita & Artikel
                </Link>
              </div>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-5">
              <h4 className="font-bold text-white text-base uppercase tracking-wider mb-5">Dukungan</h4>
              <div className="flex flex-col gap-3">
                <Link href="/kontak" className="text-gray-300 hover:text-emerald-400 transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Hubungi Kami
                </Link>
                <Link href="/bantuan" className="text-gray-300 hover:text-emerald-400 transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Pusat Bantuan
                </Link>
                <Link href="/privasi" className="text-gray-300 hover:text-emerald-400 transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Kebijakan Privasi
                </Link>
                <Link href="/syarat" className="text-gray-300 hover:text-emerald-400 transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Syarat & Ketentuan
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <h4 className="font-bold text-white text-base uppercase tracking-wider mb-5">Kontak</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-300 text-base">info@akademiprofesional.co.id</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-300 text-base">+62 857-2611-2001</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-300 text-base leading-relaxed">Jl. Truntum Perumahan Saphire Townhouse Blok C-3 Pekalongan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-700"></div>

        {/* Bottom */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-base font-medium">
            © 2020 PT. Akademi Profesional Indonesia. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-11 h-11 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" strokeWidth={2.5} />
            </a>
            <a 
              href="#" 
              className="w-11 h-11 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={2.5} />
            </a>
            <a 
              href="#" 
              className="w-11 h-11 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" strokeWidth={2.5} />
            </a>
            <a 
              href="#" 
              className="w-11 h-11 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all shadow-sm"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
