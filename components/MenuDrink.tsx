// components/MenuDrink.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/utils/formatRupiah"; // Jika menggunakan helper fungsi formatRupiah

const drinkItems = [
  {
    name: "Queens Juice Oma Tua",
    calories: "250 ML",
    portions: "1 porsi",
    price: 15000,
    image: "https://i.pinimg.com/736x/9a/6d/52/9a6d527b3b4433885a337bd0977fc5f6.jpg"
  },
  {
    name: "Tropical Punch",
    calories: "300 ML",
    portions: "1 porsi",
    price: 18000,
    image: "https://i.pinimg.com/736x/c2/d1/7d/c2d17df1e6e4e2e2a19a382727a26544.jpg",
    featured: false
  },
  {
    name: "Berry Blast",
    calories: "200 ML",
    portions: "1 porsi",
    price: 16000,
    image: "https://i.pinimg.com/474x/d4/c4/d1/d4c4d189e85f949c89d5db6f8ce376d8.jpg",
    featured:true
  },
  {
    name: "Green Detox",
    calories: "250 ML",
    portions: "1 porsi",
    price: 17000,
    image: "https://i.pinimg.com/736x/d0/e4/08/d0e408f8ee6788f6ba90c2894730ab93.jpg"
  }
];

export const MenuDrink = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif mb-6">Menu Minuman</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {drinkItems.map((item) => (
          <div key={item.name} className={`rounded-2xl p-6 ${item.featured ? "bg-[#C62300]" : "bg-white"}`}>
            <div className="aspect-square relative mb-4">
              <Image src={item.image} alt={item.name} fill className="object-cover rounded-xl" />
            </div>
            <h3 className="font-medium mb-1">{item.name}</h3>
            <div className="text-sm text-gray-600 mb-4">
              <span>{item.calories}</span>
              <span className="mx-2">•</span>
              <span>{item.portions}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">{formatRupiah(item.price)}</span>
              <Button size="icon" variant="outline" className="rounded-full">
                +
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
