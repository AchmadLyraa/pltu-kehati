import { Mail, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700 py-12 border-t border-emerald-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo-2.png"
              alt="PLN Logo"
              width={48} // set ukuran biar ga error
              height={48}
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">
              PT PLN Nusantara Power Unit Pembangkitan Cirata
            </h4>
            <p className="text-slate-600">
              Jalan Desa Cadas Sari, Kecamatan Tegal Waru, Kabupaten Purwakarta,
              <br />
              Jawa Barat 41162
            </p>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors">
                <Mail className="h-4 w-4" />
                <span>ucrt@plnnusantarapower.co.id</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors">
                <Instagram className="h-4 w-4" />
                <span>@plnnp_upcirata</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors">
                <Youtube className="h-4 w-4" />
                <span>PT PLN Nusantara Power UP Cirata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
