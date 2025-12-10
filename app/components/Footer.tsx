import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-xl mb-4">Itemzee</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Your trusted partner for wholesale electronics in Europe. Quality products, competitive prices.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>info@itemzee.com</p>
              <p>88 Innovation Drive</p>
              <p>Dublin D02 XY84, Ireland</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/products#audio" className="hover:text-amber-400 transition">Audio</Link></li>
              <li><Link href="/products#power" className="hover:text-amber-400 transition">Power</Link></li>
              <li><Link href="/products#wearables" className="hover:text-amber-400 transition">Wearables</Link></li>
              <li><Link href="/products#accessories" className="hover:text-amber-400 transition">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-amber-400 transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition">Catalogue</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-amber-400 transition">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-amber-400 transition">Cookies</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-amber-400 transition">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {year} Itemzee Trading Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span>VAT: IE 3847291WH</span>
            <span>Registered in Ireland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
