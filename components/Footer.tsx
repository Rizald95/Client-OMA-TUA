import React from "react";
import { FaInstagram, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF2C2] mt-16 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-[#C62300] mb-6">Kedai Kopi Oma Tua</h2>
        <div className="text-center text-[#7C444F] space-y-4">
          <p>Oma Tua. Kedai Kopi Berkonsepkan Vintage.</p>
          <p>📍 Jl. Diponegoro Jl. Melati No.3, Kebonsari, Kec. Panggungrejo, Kota Pasuruan, Jawa Timur 67116</p>
          <p>Buka Pukul 10.00 - 22.00</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.instagram.com/kedaikopiomatua?igsh=aGRpcmtlNnpha2Ju" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-[#C62300]" />
            </a>
            <a href="https://www.tiktok.com/@kedaiomatua?_t=8sfNaReFWtE&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl text-[#C62300]" />
            </a>
            <a href="https://maps.app.goo.gl/4qYkfAyJbJL4qakQ6?g_st=iw" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt className="text-2xl text-[#C62300]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
