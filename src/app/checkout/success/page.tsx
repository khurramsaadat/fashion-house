'use client';

import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-emerald-500 text-6xl" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You for Your Purchase!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. We'll send you an email with your order details and tracking information.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
          >
            Continue Shopping
          </Link>
          
          <p className="text-sm text-gray-500">
            Order confirmation email has been sent to your registered email address.
          </p>
        </div>
      </div>
    </div>
  );
} 