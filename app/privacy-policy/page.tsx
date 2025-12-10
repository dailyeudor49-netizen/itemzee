import { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "Itemzee privacy policy - how we handle your data." };

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray">
          <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
          <p className="text-gray-600 mb-6">Itemzee Trading Ltd (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy explains how we handle your personal data.</p>

          <h2 className="text-xl font-bold mb-3">2. Data We Collect</h2>
          <p className="text-gray-600 mb-2">We collect: contact details, company information, order history, communications, and website usage data.</p>

          <h2 className="text-xl font-bold mb-3">3. How We Use Data</h2>
          <p className="text-gray-600 mb-6">To process orders, provide support, improve services, and comply with legal obligations.</p>

          <h2 className="text-xl font-bold mb-3">4. Data Sharing</h2>
          <p className="text-gray-600 mb-6">We don&apos;t sell data. We share with logistics and payment partners only as needed for order fulfilment.</p>

          <h2 className="text-xl font-bold mb-3">5. Your Rights</h2>
          <p className="text-gray-600 mb-6">You can access, correct, or delete your data. Contact info@itemzee.com for requests.</p>

          <h2 className="text-xl font-bold mb-3">6. Contact</h2>
          <p className="text-gray-600">Itemzee Trading Ltd, 88 Innovation Drive, Dublin D02 XY84, Ireland. Email: info@itemzee.com</p>
        </div>
      </section>
    </div>
  );
}
