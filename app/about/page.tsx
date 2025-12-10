import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Itemzee - Ireland's trusted wholesale electronics partner serving retailers across Europe.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Itemzee</h1>
          <p className="text-gray-600">Connecting European retailers with quality electronics since 2018</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Founded in Dublin in 2018, Itemzee started with a simple mission: make wholesale electronics accessible to retailers of all sizes across Europe.</p>
                <p>Today, we&apos;re proud to serve over 600 partners in 15 countries, offering a curated selection of 4,100+ products at competitive prices.</p>
                <p>Our success comes from understanding what retailers need: reliable supply, fair pricing, and fast delivery. No complex contracts, no minimum orders for new partners.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "6+", label: "Years Experience" },
                { num: "4,100+", label: "Products" },
                { num: "600+", label: "Partners" },
                { num: "15", label: "Countries" },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-amber-50 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-amber-600">{stat.num}</div>
                  <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Simplicity", desc: "No complicated processes. Browse, request a quote, order. That&apos;s it." },
              { title: "Fairness", desc: "Transparent pricing with no hidden fees. What you see is what you pay." },
              { title: "Reliability", desc: "99.2% order accuracy. When we say 48 hours, we mean it." },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-amber-600">{i + 1}</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-500 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-amber-100 mb-8">Join our growing network of successful European retailers</p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
