import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Itemzee for wholesale electronics enquiries, quotes, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">We respond to all enquiries within 4 business hours</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                    <option>Request a Quote</option>
                    <option>Product Enquiry</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-400 transition">
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium text-gray-900">info@itemzee.com</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500">Office</div>
                    <div className="font-medium text-gray-900">88 Innovation Drive<br/>Dublin D02 XY84, Ireland</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500">Hours</div>
                    <div className="font-medium text-gray-900">Mon-Fri: 9:00-18:00 GMT</div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-amber-50 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 4-hour response time</li>
                  <li>• No minimum order for new partners</li>
                  <li>• 48-hour delivery to 15 countries</li>
                  <li>• Flexible payment terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
