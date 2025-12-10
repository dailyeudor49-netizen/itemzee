import { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy", description: "Itemzee cookie policy - how we use cookies." };

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray">
          <h2 className="text-xl font-bold mb-3">What Are Cookies</h2>
          <p className="text-gray-600 mb-6">Small text files stored on your device to help websites function and remember preferences.</p>

          <h2 className="text-xl font-bold mb-3">Cookies We Use</h2>
          <p className="text-gray-600 mb-2">Essential cookies for site functionality, analytics cookies to understand usage, and functional cookies for preferences.</p>

          <h2 className="text-xl font-bold mb-3">Managing Cookies</h2>
          <p className="text-gray-600 mb-6">You can control cookies through your browser settings. Disabling may affect functionality.</p>

          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-gray-600">Questions? Email info@itemzee.com</p>
        </div>
      </section>
    </div>
  );
}
