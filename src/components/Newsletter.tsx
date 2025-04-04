'use client';

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-amber-50 rounded-lg p-6">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-bold text-amber-900 mb-2">Stay Updated</h3>
        <p className="text-amber-800 mb-6">
          Subscribe to our newsletter for the latest fashion trends and exclusive offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="h-5 w-5 text-amber-500" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-10 pr-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
              status === 'loading'
                ? 'bg-amber-400 cursor-not-allowed'
                : 'bg-amber-600 hover:bg-amber-700'
            } text-white`}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-emerald-600">Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
} 