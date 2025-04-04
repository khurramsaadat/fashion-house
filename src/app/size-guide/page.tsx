export default function SizeGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Size Guide</h1>
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Men's Sizing</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest (inches)</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist (inches)</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hip (inches)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { size: 'S', chest: '36-38', waist: '30-32', hip: '36-38' },
                  { size: 'M', chest: '39-41', waist: '33-35', hip: '39-41' },
                  { size: 'L', chest: '42-44', waist: '36-38', hip: '42-44' },
                  { size: 'XL', chest: '45-47', waist: '39-41', hip: '45-47' },
                  { size: 'XXL', chest: '48-50', waist: '42-44', hip: '48-50' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.size}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.chest}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.waist}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Women's Sizing</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bust (inches)</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist (inches)</th>
                  <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hip (inches)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { size: 'XS', bust: '31-32', waist: '24-25', hip: '34-35' },
                  { size: 'S', bust: '33-34', waist: '26-27', hip: '36-37' },
                  { size: 'M', bust: '35-36', waist: '28-29', hip: '38-39' },
                  { size: 'L', bust: '37-39', waist: '30-32', hip: '40-42' },
                  { size: 'XL', bust: '40-42', waist: '33-35', hip: '43-45' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.size}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.bust}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.waist}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">How to Measure</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Chest/Bust</h3>
              <p className="text-gray-600">
                Measure around the fullest part of your chest/bust, keeping the measuring tape horizontal.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Waist</h3>
              <p className="text-gray-600">
                Measure around your natural waistline, keeping the tape comfortably loose.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Hip</h3>
              <p className="text-gray-600">
                Measure around the fullest part of your hips, keeping the tape horizontal.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 