'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';
import { CartItem } from '@/types/cart';
import { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import ImageModal from './ImageModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, cart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
      rating: product.rating,
      sizes: product.sizes,
      colors: product.colors,
      quantity: 1,
    });
    setIsAdded(true);
  };

  // Check if the product is already in the cart
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div 
        className="aspect-[3/4] w-full overflow-hidden rounded-t-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={667}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">AED {product.price}</span>
          <button
            onClick={handleAddToCart}
            disabled={isInCart || isAdded}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium transition-colors duration-200 ${
              isInCart || isAdded
                ? 'bg-emerald-600 cursor-not-allowed'
                : 'bg-amber-600 hover:bg-amber-700'
            }`}
          >
            {isInCart || isAdded ? (
              <>
                <FaCheck className="text-lg" />
                <span>Added</span>
              </>
            ) : (
              <>
                <FaShoppingCart className="text-lg" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ImageModal
          imageUrl={product.image}
          alt={product.name}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
} 