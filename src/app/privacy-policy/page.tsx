export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information</li>
              <li>Email communications</li>
              <li>Order history</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and website</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Payment processors</li>
              <li>Shipping carriers</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: privacy@example.com
              <br />
              Phone: +971 XX XXX XXXX
              <br />
              Address: Dubai, UAE
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 