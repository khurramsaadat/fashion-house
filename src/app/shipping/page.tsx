export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Standard Shipping</h3>
              <p className="text-gray-600">
                3-5 business days
                <br />
                Free for orders over AED 50
                <br />
                AED 4.99 for orders under AED 50
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Express Shipping</h3>
              <p className="text-gray-600">
                1-2 business days
                <br />
                AED 9.99 for all orders
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Next Day Delivery</h3>
              <p className="text-gray-600">
                Next business day
                <br />
                AED 14.99 for all orders
                <br />
                Order by 2 PM EST for same-day processing
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Policies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Delivery Areas</h3>
              <p className="text-gray-600">
                We currently ship to all 50 US states and territories. International shipping coming soon!
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Order Tracking</h3>
              <p className="text-gray-600">
                A tracking number will be provided via email once your order ships.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Shipping Restrictions</h3>
              <p className="text-gray-600">
                Some restrictions may apply to certain locations. Please contact customer service for details.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 