'use client';
import { useCart } from '@/contexts/CartContext';

const dummyProducts = [
  { id: 1, name: "iPhone", price: 999, image: "https://via.placeholder.com/150" },
  { id: 2, name: "T-shirt", price: 29, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Football", price: 49, image: "https://via.placeholder.com/150" },
];

export default function ProductDetailPage({ params }) {
  const { addToCart } = useCart();
  const product = dummyProducts.find(p => p.id == params.id);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="flex flex-col items-center">
      <img src={product.image} alt={product.name} className="h-60 mb-4" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl my-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
