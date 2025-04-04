import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const menProducts = products.filter(product => product.category === 'men').slice(0, 4);
  const womenProducts = products.filter(product => product.category === 'women').slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg"
          alt="Fashion Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Welcome to Fashion House
              </h1>
              <p className="mt-6 text-xl text-white/90 max-w-3xl">
                Discover the latest trends in men's and women's fashion. Shop our curated collection of high-quality clothing and accessories.
              </p>
              <div className="mt-8">
                <Link
                  href="/category/men"
                  className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link href="/category/men" className="group relative">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg"
                alt="Men's Collection"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 flex items-end justify-center pb-8">
                <h2 className="text-3xl font-bold text-white">Men's Collection</h2>
              </div>
            </div>
          </Link>
          <Link href="/category/women" className="group relative">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
                alt="Women's Collection"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 flex items-end justify-center pb-8">
                <h2 className="text-3xl font-bold text-white">Women's Collection</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Men's Collection Preview */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Men's Collection</h2>
            <Link
              href="/category/men"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Women's Collection Preview */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Women's Collection</h2>
            <Link
              href="/category/women"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
