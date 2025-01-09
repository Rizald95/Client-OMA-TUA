"use client";

import React from "react";

const Maps: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="relative">
        {/* Embed Google Maps menggunakan iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.057943293204!2d112.9055567!3d-7.6459431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7c7006d77c5d3%3A0xf37e35b198fd03c3!2sOMA%20TUA.!5e0!3m2!1sid!2sid!4v1689863474535!5m2!1sid!2sid"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="rounded-lg"
        ></iframe>

        {/* Bingkai dekoratif di atas peta */}
        <div className="absolute inset-0 pointer-events-none border-4 border-[#C62300] rounded-lg"></div>
      </div>
    </div>
  );
};

export default Maps;
