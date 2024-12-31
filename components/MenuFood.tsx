// components/MenuFood.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/utils/formatRupiah"; // Jika menggunakan helper fungsi formatRupiah

const foodItems = [
  {
    name: "Queens Salad Oma Tua",
    calories: "200 ML",
    portions: "1 porsi",
    price: 13000,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    name: "Queenly Salad Oma Tua",
    calories: "300 ML",
    portions: "1 porsi",
    price: 16000,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    featured: true
  },
  {
    name: "Queenies Salad Oma Tua",
    calories: "500 ML",
    portions: "1 porsi",
    price: 26000,
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
  },
  {
    name: "Sesame Dressing Salad",
    calories: "80 kalori",
    portions: "4 porsi",
    price: 2850,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  }
];

export const MenuFood = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif mb-6">Menu Makanan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {foodItems.map((item) => (
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
