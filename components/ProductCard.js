'use client';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow flex flex-col">
      <Link href={`/products/pro/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p>${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
