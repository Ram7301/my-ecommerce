import ProductCard from '@/components/ProductCard';

const dummyProducts = [
  { id: 1, name: "iPhone", price: 999, image: "https://via.placeholder.com/150" },
  { id: 2, name: "T-shirt", price: 29, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Football", price: 49, image: "https://via.placeholder.com/150" },
];

export default function CategoryPage({ params }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 capitalize">{params.category} Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
