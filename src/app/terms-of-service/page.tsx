export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-600">
            By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-600">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">3. Purchases</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              When you make a purchase on our website, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Pay all charges incurred by your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">4. Returns and Refunds</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Our return and refund policy is as follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Items must be returned within 30 days of purchase</li>
              <li>Items must be in original condition with tags attached</li>
              <li>Refunds will be processed within 5-7 business days</li>
              <li>Shipping costs are non-refundable</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            In no event shall we be liable for any damages arising out of the use or inability to use the materials on our website, even if we have been notified of the possibility of such damages.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">6. Governing Law</h2>
          <p className="text-gray-600">
            These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </div>
  );
} 