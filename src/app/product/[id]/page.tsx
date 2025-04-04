import { products } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
} 