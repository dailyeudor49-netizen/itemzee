import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero - Split design con immagine placeholder */}
      <section className="min-h-[80vh] flex items-center bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                Trusted by 600+ retailers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Electronics Wholesale, <span className="text-amber-600">Simplified</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Source premium gadgets and accessories at unbeatable prices.
                Direct from manufacturers, delivered across Europe in 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-full text-center transition shadow-lg shadow-amber-500/25">
                  Browse Products
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full text-center transition">
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center text-amber-700">
                  <div className="text-6xl mb-4">📦</div>
                  <p className="font-medium">Your Logo Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-8 border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { value: "4,100+", label: "Products" },
              { value: "600+", label: "Partners" },
              { value: "15", label: "Countries" },
              { value: "99.2%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Minimal cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Supply</h2>
            <p className="text-gray-600">Carefully selected electronics across popular categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🎧", name: "Audio & Sound" },
              { icon: "⚡", name: "Power & Charging" },
              { icon: "⌚", name: "Wearable Tech" },
              { icon: "📱", name: "Phone Accessories" },
              { icon: "🖥️", name: "Computer Peripherals" },
              { icon: "🏠", name: "Home Electronics" },
              { icon: "🎮", name: "Gaming" },
              { icon: "💡", name: "Lighting" },
            ].map((cat, i) => (
              <Link key={i} href={`/products#${cat.name.toLowerCase().replace(/ /g, '-')}`} className="group p-6 bg-gray-50 rounded-2xl hover:bg-amber-50 transition-all text-center">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-medium text-gray-900 group-hover:text-amber-700">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us - Alternating layout */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Retailers Choose Itemzee</h2>
            <p className="text-gray-400">Built for businesses that value quality and reliability</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Direct Sourcing", desc: "We work directly with manufacturers, cutting out middlemen to offer you the best prices in the market." },
              { title: "48-Hour Delivery", desc: "Express shipping to 15 European countries. Track your orders in real-time from warehouse to door." },
              { title: "Quality First", desc: "Every batch is inspected before shipping. Defective items replaced within 14 days, no questions asked." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-800 rounded-2xl">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-xl font-bold mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Browse", desc: "Explore our catalogue of 4,100+ products" },
              { step: "02", title: "Request", desc: "Send us your requirements for a custom quote" },
              { step: "03", title: "Order", desc: "Confirm your order with flexible payment options" },
              { step: "04", title: "Receive", desc: "Get your products delivered within 48 hours" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-amber-200 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
          <p className="text-amber-100 text-lg mb-10">Join 600+ retailers who trust Itemzee for their inventory needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition shadow-lg">
              Start Partnership
            </Link>
            <a href="mailto:info@itemzee.com" className="px-10 py-4 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transition">
              info@itemzee.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
