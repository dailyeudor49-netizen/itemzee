import { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service", description: "Itemzee terms and conditions." };

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray">
          <h2 className="text-xl font-bold mb-3">1. Agreement</h2>
          <p className="text-gray-600 mb-6">By using Itemzee services, you agree to these terms.</p>

          <h2 className="text-xl font-bold mb-3">2. Products & Pricing</h2>
          <p className="text-gray-600 mb-6">All products subject to availability. Prices may change without notice.</p>

          <h2 className="text-xl font-bold mb-3">3. Orders & Payment</h2>
          <p className="text-gray-600 mb-6">Orders subject to acceptance. Payment on delivery available for qualifying accounts. Prices in EUR unless stated.</p>

          <h2 className="text-xl font-bold mb-3">4. Delivery</h2>
          <p className="text-gray-600 mb-6">48-hour delivery to 15 EU countries. Times are estimates. Shipping costs vary by destination.</p>

          <h2 className="text-xl font-bold mb-3">5. Returns</h2>
          <p className="text-gray-600 mb-6">Defective items returned within 14 days. Original packaging required. Refunds within 14 business days.</p>

          <h2 className="text-xl font-bold mb-3">6. Governing Law</h2>
          <p className="text-gray-600 mb-6">These terms governed by Irish law.</p>

          <h2 className="text-xl font-bold mb-3">7. Contact</h2>
          <p className="text-gray-600">Itemzee Trading Ltd<br/>88 Innovation Drive, Dublin D02 XY84, Ireland<br/>VAT: IE 3847291WH<br/>Email: info@itemzee.com</p>
        </div>
      </section>
    </div>
  );
}
