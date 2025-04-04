export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'men' | 'women';
  image: string;
  rating: number;
  sizes: string[];
  colors: string[];
} 