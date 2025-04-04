'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-white">
      <Newsletter />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Shop
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/products" className="text-base text-gray-500 hover:text-gray-900">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/category/men" className="text-base text-gray-500 hover:text-gray-900">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="/category/women" className="text-base text-gray-500 hover:text-gray-900">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="/category/accessories" className="text-base text-gray-500 hover:text-gray-900">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Customer Service
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-base text-gray-500 hover:text-gray-900">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-base text-gray-500 hover:text-gray-900">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-base text-gray-500 hover:text-gray-900">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-base text-gray-500 hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-base text-gray-500 hover:text-gray-900">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Connect With Us
              </h3>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2025 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 