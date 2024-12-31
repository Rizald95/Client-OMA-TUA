import React from "react";
import Image from "next/image";

type TestimonialProps = {
  para: string;
  name: string;
  title: string;
  img: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ para, name, title, img }) => {
  return (
    <div className="relative max-w-4xl mx-auto my-16 bg-[#FFF2C2] border border-[#7C444F] p-10 rounded-lg shadow-md">
      {/* Kutipan */}
      <span className="absolute text-[220px] leading-none text-[#C62300] -top-10 left-5 select-none">
        &quot;
      </span>
      {/* Teks Testimonial */}
      <p className="mt-10 text-lg font-serif font-semibold text-center text-[#7C444F] leading-relaxed">
        {para}
      </p>
      {/* Nama */}
      <h3 className="mt-10 text-2xl font-bold text-center text-[#C62300]">{name}</h3>
      {/* Judul */}
      <p className="mt-2 text-lg text-center text-[#7C444F]">{title}</p>
      {/* Gambar */}
      <div className="flex justify-center mt-8">
        <Image
          src={img}
          alt={`${name}'s picture`}
          className="rounded-lg shadow-lg"
          width={112}
          height={112}
        />
      </div>
    </div>
  );
};

export default Testimonial;
