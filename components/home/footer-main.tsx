import { Mail, Instagram, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 py-12 border-t border-emerald-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <Image
              src="/final-logo-kehati.png"
              alt="PLN Logo"
              width={48} // set ukuran biar ga error
              height={48}
              className="h-64 w-auto object-contain"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">
              PT PLN NP UP KALTIM TELUK
            </h4>
            <p className="text-slate-800">
              Jl. PLTU No. 1 KM. 13, TELUK WARU,
              <br />
              Kawasan Industri Kariangau, Kelurahan Kariangau, Kecamatan
              Balikpapan Barat, 76134
            </p>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-slate-600 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>upkt@plnnusantarapower.co.id</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 hover:text-emerald-400 transition-colors">
                <Instagram className="h-4 w-4" />
                <span>@plnnp_upkaltimteluk</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>0542 8530818</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
