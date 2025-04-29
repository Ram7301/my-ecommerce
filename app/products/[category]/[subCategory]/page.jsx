import ProductCard from '@/components/ProductCard';


const products = [
  { id: 1, type:"phones", category: "Electronics", name: "iPhone 15 Pro", price: 999.99, image: "/images/electronics/iphone15pro.jpg" },
  { id: 2, type:"laptops", category: "Electronics", name: "MacBook Air M3", price: 1299.99, image: "/images/electronics/macbookairm3.jpg" },
  { id: 3, type:"phones", category: "Electronics", name: "Samsung Galaxy S24", price: 899.99, image: "/images/electronics/galaxy-s24.jpg" },
  { id: 4, type:"accessories", category: "Electronics", name: "Sony WH-1000XM5 Headphones", price: 349.99, image: "/images/electronics/sony-headphones.jpg" },
  { id: 5, type:"laptops", category: "Electronics", name: "Dell XPS 15 Laptop", price: 1799.99, image: "/images/electronics/dell-xps15.jpg" },
  { id: 6, type:"accessories", category: "Electronics", name: "Apple Watch Ultra", price: 799.99, image: "/images/electronics/apple-watch-ultra.jpg" },
  { id: 7, type:"accessories", category: "Electronics", name: "GoPro HERO11", price: 499.99, image: "/images/electronics/gopro-hero11.jpg" },
  { id: 8, type:"phones", category: "Electronics", name: "Google Pixel 8", price: 799.99, image: "/images/electronics/pixel8.jpg" },
  { id: 9, type:"accessories", category: "Electronics", name: "DJI Mini 3 Drone", price: 599.99, image: "/images/electronics/dji-mini3.jpg" },
  { id: 10, type:"accessories", category: "Electronics", name: "Amazon Echo Show 10", price: 249.99, image: "/images/electronics/echo-show10.jpg" },

  { id: 11, type:"men", category: "Clothing", name: "Men's Leather Jacket", price: 199.99, image: "/images/clothings/mens-leather-jacket.jpg" },
  { id: 12, type:"women", category: "Clothing", name: "Women's Summer Dress", price: 79.99, image: "/images/clothings/womens-summer-dress.jpg" },
  { id: 13, type:"kids", category: "Clothing", name: "Kids Hoodie", price: 39.99, image: "/images/clothings/kids-hoodie.jpg" },
  { id: 14, type:"men", category: "Clothing", name: "Men's Running Shoes", price: 129.99, image: "/images/clothings/mens-running-shoes.jpg" },
  { id: 15, type:"women", category: "Clothing", name: "Women's Handbag", price: 149.99, image: "/images/clothings/womens-handbag.jpg" },
  { id: 17, type:"men", category: "Clothing", name: "Denim Jeans", price: 59.99, image: "/images/clothings/denim-jeans.jpg" },
  { id: 18, type:"men", category: "Clothing", name: "Formal Blazer", price: 199.99, image: "/images/clothings/formal-blazer.jpg" },
  { id: 19, type:"women", category: "Clothing", name: "Women's Sneakers", price: 89.99, image: "/images/clothings/womens-sneakers.jpg" },
  { id: 20, type:"men", category: "Clothing", name: "Graphic T-Shirt", price: 29.99, image: "/images/clothings/graphic-tshirt.jpg" },

  { id: 21, type:"", category: "Books", name: "The Great Gatsby", price: 14.99, image: "/images/great-gatsby.jpg" },
  { id: 22, type:"", category: "Books", name: "Atomic Habits", price: 18.99, image: "/images/atomic-habits.jpg" },
  { id: 23, type:"", category: "Books", name: "Harry Potter Box Set", price: 99.99, image: "/images/harry-potter-boxset.jpg" },
  { id: 24, type:"", category: "Books", name: "Rich Dad Poor Dad", price: 17.99, image: "/images/rich-dad-poor-dad.jpg" },
  { id: 25, type:"", category: "Books", name: "The Alchemist", price: 16.99, image: "/images/the-alchemist.jpg" },
  { id: 26, type:"", category: "Books", name: "Start With Why", price: 20.99, image: "/images/start-with-why.jpg" },
  { id: 27, type:"", category: "Books", name: "Dune", price: 24.99, image: "/images/dune.jpg" },
  { id: 28, type:"", category: "Books", name: "The Hobbit", price: 19.99, image: "/images/the-hobbit.jpg" },
  { id: 29, type:"", category: "Books", name: "1984 by George Orwell", price: 15.99, image: "/images/1984.jpg" },
  { id: 30, type:"", category: "Books", name: "The Psychology of Money", price: 21.99, image: "/images/psychology-of-money.jpg" },

];



export default async function CategoryPage({ params }) {
  const { category, subCategory } = await  params;
  const  filterdProduct = subCategory == "all" ? products : products.filter(f => f.type == subCategory)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 capitalize">{subCategory} Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {filterdProduct.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
