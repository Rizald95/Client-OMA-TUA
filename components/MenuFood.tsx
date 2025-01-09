import Image from "next/image";
import { formatRupiah } from "@/utils/formatRupiah";

const foodItems = [
  {
    name: "Nasi Goreng",
    calories: "300 kalori",
    portions: "1 porsi",
    price: 13000,
    image: "/menu_makanan/makanan_1.png"
  },
  {
    name: "Pangsit Chili Oil",
    calories: "250 kalori",
    portions: "1 porsi",
    price: 13000,
    image: "/menu_makanan/makanan_2.png"
  },
  {
    name: "Seblak",
    calories: "280 kalori",
    portions: "1 porsi",
    price: 13000,
    image: "/menu_makanan/makanan_3.png"
  },
  {
    name: "Pisang Oma Tua",
    calories: "200 kalori",
    portions: "1 porsi",
    price: 10000,
    image: "/menu_makanan/makanan_4.png"
  },
  {
    name: "Nugget",
    calories: "220 kalori",
    portions: "1 porsi",
    price: 10000,
    image: "/menu_makanan/makanan_5.png"
  },
  {
    name: "Sosis Bakar",
    calories: "180 kalori",
    portions: "1 porsi",
    price: 10000,
    image: "/menu_makanan/makanan_6.png",
    featured: true
  },
  {
    name: "French Fries",
    calories: "240 kalori",
    portions: "1 porsi",
    price: 10000,
    image: "/menu_makanan/makanan_7.png"
  }
];

export const MenuFood = () => {
  const handleOrder = (item: typeof foodItems[number]) => {
    const message = `Saya memesan 1 porsi ${item.name} dengan harga ${formatRupiah(item.price)}`;
    const whatsappNumber = "6289688384475";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif mb-6">Menu Makanan</h2>
      <div className="relative">
        <div className="overflow-x-auto snap-x snap-mandatory pb-6">
          <div className="flex space-x-4 px-4 pb-4 w-max">
            {foodItems.map((item) => (
              <div 
                key={item.name} 
                className={`relative flex-shrink-0 w-64 md:w-72 snap-start rounded-2xl p-6 ${item.featured ? "bg-[#C62300]" : "bg-white"}`}
              >
                <div className="aspect-square relative mb-4">
                  <Image src={item.image} alt={item.name} fill className="object-cover rounded-xl" />
                </div>
                <h3 className="font-medium mb-1">{item.name}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  <span>{item.calories}</span>
                  <span className="mx-2">•</span>
                  <span>{item.portions}</span>
                </div>
                <div className="text-left">
                  <span className="font-medium">{formatRupiah(item.price)}</span>
                </div>
                <button
                  onClick={() => handleOrder(item)}
                  className="absolute bottom-6 right-6 text-lg bg-transparent border border-gray-400 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-[#faf7f2] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};
