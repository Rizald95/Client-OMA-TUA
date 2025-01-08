import Image from "next/image";
import { formatRupiah } from "@/utils/formatRupiah"; 
const drinkItems = [
  {
    name: "RedVelvet",
    calories: "250 ML",
    portions: "1 gelas cup",
    price: 13000,
    image: "/menu_minuman/red_velvet.jpg"
  },
  {
    name: "Matcha",
    calories: "250 ML",
    portions: "1 gelas cup",
    price: 13000,
    image: "/menu_minuman/matcha.jpg"
  },
  {
    name: "Hazelnut Coffee",
    calories: "250 ML",
    portions: "1 gelas cup",
    price: 13000,
    image: "/menu_minuman/hazelnut_coffe.jpg"
  },
  {
    name: "Coffee Gula Aren",
    calories: "250 ML",
    portions: "1 gelas cup",
    price: 13000,
    image: "/menu_minuman/coffe_gula_aren.jpg"
  }
];

export const MenuDrink = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif mb-6">Menu Minuman</h2>
      <div className="relative">
        <div className="overflow-x-auto snap-x snap-mandatory pb-6">
          <div className="flex space-x-4 px-4 pb-4 w-max">
            {drinkItems.map((item) => (
              <div 
                key={item.name} 
                className={`flex-shrink-0 w-64 md:w-72 snap-start rounded-2xl p-6 ${item.featured ? "bg-[#C62300]" : "bg-white"}`}
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
                <div className="text-left"> {/* Updated line */}
                  <span className="font-medium">{formatRupiah(item.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-[#faf7f2] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};
