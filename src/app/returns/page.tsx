export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Returns & Exchanges</h1>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">30-Day Return Window</h3>
              <p className="text-gray-600">
                We offer a 30-day return window for all unworn items in their original condition with tags attached.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Free Returns</h3>
              <p className="text-gray-600">
                Returns are free for all US orders. Simply use the prepaid shipping label provided in your return portal.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Return Process</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Initiate your return through our online portal</li>
                <li>Print the prepaid shipping label</li>
                <li>Pack your items securely</li>
                <li>Drop off at any authorized shipping location</li>
                <li>Refund will be processed within 5-7 business days of receipt</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Exchanges</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Size & Color Exchanges</h3>
              <p className="text-gray-600">
                Exchanges for different sizes or colors are free and easy. Simply select 'Exchange' when initiating your return.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Exchange Process</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Start an exchange through our online portal</li>
                <li>Select your new size or color</li>
                <li>Print the prepaid shipping label</li>
                <li>Send back your original item</li>
                <li>New item will ship once original is received</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Non-Returnable Items</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600">
              <li>Items marked as final sale</li>
              <li>Worn or damaged items</li>
              <li>Items without original tags</li>
              <li>Intimate apparel</li>
              <li>Accessories (unless defective)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 