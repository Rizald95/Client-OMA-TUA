import Image from "next/image";
import { User } from 'lucide-react';  // Import ikon User dari lucide-react
import { Button } from "@/components/ui/button";
import { MenuFood } from "@/components/MenuFood"; // Import MenuFood
import { MenuDrink } from "@/components/MenuDrink"; // Import MenuDrink
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Maps from "@/components/Maps"




const moments = [
  {
    name: "Family Gathering",
    level: "🔥🔥🔥",
    description: "A beautiful moment spent with family.",
    image: "/Foto-1.jpg",
  },
  {
    name: "Friends Reunion",
    level: "🔥🔥",
    description: "Cherished memories with old friends.",
    image: "/Foto-2.PNG",
    featured: true,
  },
  {
    name: "Best Freinds Dinner",
    level: "🔥🔥🔥",
    description: "A special dinner with a loved one.",
    image: "/Foto-3.jpg",
    featured:true,
  },
  {
    name: "Better Place",
    level: "🔥🔥🔥",
    description: "A better place for dinning",
    image: "/Foto-4.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
              alt="IND flag"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-sm">IND</span>
          </button>
          <button className="text-sm">Menu</button>
        </div>
        
        <div className="w-24">
          <Image
            src="/logo-1.png"
            alt="OMA TUA"
            width={100}
            height={50}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm">Contact</button>
          <Button variant="default" className="bg-black text-white rounded-full flex items-center gap-2">
  <User className="w-4 h-4" />  {/* Ganti ikon ShoppingCart dengan User */}
  Profile
</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Wake Up Early,
            <br />
            Eat Fresh & Healthy
          </h1>
          <p className="text-gray-600">
            Aside from their natural good taste and great crunchy
            texture alongside wonderful colors and fragrances,
            eating a large serving of fresh.
          </p>
        </div>

     {/* Section for Moments */}
<div className="text-center max-w-8xl mx-auto mb-16"> {/* Ukuran kontainer diperbesar */}
  <h2 className="text-5xl font-serif text-[#C62300] mb-12">Captured Moments</h2> {/* Ukuran judul diperbesar */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Jarak antar kartu lebih lebar */}
    {moments.map((moment) => (
      <div
        key={moment.name}
        className={`rounded-2xl p-10 ${ // Padding lebih besar
          moment.featured ? "bg-[#C62300]" : "bg-white"
        }`}>
        <div className="aspect-square relative mb-6"> {/* Ukuran gambar lebih besar */}
          <Image
            src={moment.image}
            alt={moment.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <h3 className="font-medium mb-2 text-xl">{moment.name}</h3> {/* Ukuran font judul lebih besar */}
        <div className="text-sm text-gray-600 mb-6"> {/* Jarak antar teks lebih lebar */}
          <span>{moment.level}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{moment.description}</p>
      </div>
    ))}
  </div>
</div>
        
        {/* Profile Perusahaan Section */}
<div className="mt-40 mb-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
  {/* Teks Deskripsi */}
  <div className="w-full lg:w-2/3 text-center lg:text-left">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 lg:mb-6 text-[#C62300]">
      Our Company Profile
    </h2>
    <p className="text-sm md:text-base text-[#7C444F] leading-relaxed">
      Kedai kopi oma tua merupakan sebuah kedai kopi modern yang beroperasi di Kota Pasuruan. Kedai kopi ini merupakan usaha baru yang dirintis dari kreatifitas anak muda yang ingin memiliki usaha dibidang kuliner yang menjual berbagai menu makanan maupun minuman. Kedai kopi ini terkenal dengan harga yang relatif terjangkau untuk kalangan anak muda, yang kemudian dipromosikan melalui media sosial (Instagram, Whatsapp, Tiktok). Kedai ini dibangun untuk tempat bersantai sambil berbincang bersama teman, selain itu cocok juga untuk reuni berkumpul dengan teman lama. Tidak hanya kalangan anak muda saja yang datang melainkan juga orang tua yang ingin menghabiskan waktunya bersama keluarga. Selain itu, kedai kopi oma tua juga memiliki tanggung jawab untuk membantu memperkuat ekonomi lokal dan menjadi tempat berbagi pengalaman dan kultural lokal.
    </p>
  </div>

  {/* Gambar Logo */}
  <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
    <Image
      src="/logo-1.png"
      alt="Oma Tua Logo"
      width={320}
      height={320}
      className="max-w-full h-auto"
    />
  </div>
</div>


        <MenuFood />
        <MenuDrink />

        <h1 className="text-4xl font-serif text-center text-[#C62300] mt-16 mb-10">Our Location</h1>
        <Maps apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''} />

        <h1 className="text-4xl font-serif text-center text-[#C62300] mt-16 mb-10">Testimonials</h1>
        <Testimonial
          para="Kopi terbaik dengan suasana vintage yang menyenangkan. Saya sangat menyukainya!"
          name="Lisa"
          title="Pelanggan Setia"
          img="/lisa.jpg"
        />
        <Footer />
        
      </main>
    </div>
  );
}
