import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export const SocialIcons = () => {
  return (
    <div className="text-center my-16">
    <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#C62300]">Our Social Media</h2>
    <div className="flex justify-center space-x-6">
      <a href="https://www.instagram.com/kedaikopiomatua?igsh=aGRpcmtlNnpha2Ju" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-3xl text-[#C62300] hover:text-[#E67E22] transition-colors" />
      </a>
      <a href="https://www.tiktok.com/@kedaiomatua?_t=8sfNaReFWtE&_r=1" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="text-3xl text-[#C62300] hover:text-[#E67E22] transition-colors" />
      </a>
      <a href="https://maps.app.goo.gl/4qYkfAyJbJL4qakQ6?g_st=iw" target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt className="text-3xl text-[#C62300] hover:text-[#E67E22] transition-colors" />
      </a>
      <a href="https://wa.me/6289688384475" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-3xl text-[#C62300] hover:text-[#E67E22] transition-colors" />
      </a>
    </div>
  </div>
  );
};