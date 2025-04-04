'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';
import ImageModal from '@/components/ImageModal';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link
            href="/"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Cart ({totalItems} items)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm mb-4"
            >
              <div 
                className="w-24 h-24 relative cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-amber-600 font-semibold mt-1">AED {item.price}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaMinus className="text-gray-600" />
                  </button>
                  <span className="px-4 py-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaPlus className="text-gray-600" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">AED {totalPrice}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-amber-600">AED {totalPrice}</span>
                </div>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-amber-600 text-white py-3 rounded-md mt-6 hover:bg-amber-700 transition-colors text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          alt="Product Image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
} 