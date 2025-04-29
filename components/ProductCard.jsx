'use client';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="rounded-2xl border shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      <Link href={`/products/pro/${product.id}`} className="block">
        <div className="relative h-52 w-full bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain h-full w-full p-4 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold truncate">{product.name}</h2>
          <p className="text-gray-700 mt-1">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="p-4 pt-0 mt-auto">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
