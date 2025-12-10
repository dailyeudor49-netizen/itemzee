import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our extensive catalogue of wholesale electronics - 4,100+ products across all categories.",
};

export default function ProductsPage() {
  const categories = [
    { id: "audio", name: "Audio & Sound", items: ["Bluetooth Speakers", "TWS Earbuds", "Over-ear Headphones", "Soundbars", "Portable Radios", "Microphones"] },
    { id: "power", name: "Power & Charging", items: ["Power Banks 10K", "Power Banks 20K", "Wireless Chargers", "Wall Adapters", "Car Chargers", "Charging Stations"] },
    { id: "wearables", name: "Wearable Tech", items: ["Smart Watches", "Fitness Trackers", "Kids Watches", "Health Bands", "GPS Trackers", "Smart Rings"] },
    { id: "accessories", name: "Phone Accessories", items: ["Phone Cases", "Screen Protectors", "Pop Sockets", "Phone Stands", "Car Mounts", "Selfie Sticks"] },
    { id: "computer", name: "Computer Peripherals", items: ["Wireless Mice", "Keyboards", "USB Hubs", "Webcams", "Laptop Stands", "Cable Organizers"] },
    { id: "home", name: "Home Electronics", items: ["Smart Plugs", "LED Strips", "Desk Lamps", "Fans", "Humidifiers", "Air Purifiers"] },
  ];

  return (
    <div className="bg-white">
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Catalogue</h1>
          <p className="text-gray-600 max-w-xl mx-auto">4,100+ SKUs across 8 categories. All products available for immediate dispatch.</p>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-2">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="px-4 py-2 text-sm font-medium bg-amber-50 text-amber-700 rounded-full hover:bg-amber-100 whitespace-nowrap transition">
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b">{cat.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="p-5 bg-gray-50 rounded-xl hover:bg-amber-50 transition text-center">
                    <p className="text-sm font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-500 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Looking for Something Specific?</h2>
          <p className="text-amber-100 mb-8">Send us your requirements and we&apos;ll source it for you.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
