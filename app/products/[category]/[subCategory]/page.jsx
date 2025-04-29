import ProductCard from '@/components/ProductCard';


const products = [
  { id: 1, type:"phones", category: "Electronics", name: "iPhone 15 Pro", price: 999.99, image: "/images/iphone15pro.JPG" },
  { id: 2, type:"laptops", category: "Electronics", name: "MacBook Air M3", price: 1299.99, image: "/images/macbookairm3.JPG" },
  { id: 3, type:"phones", category: "Electronics", name: "Samsung Galaxy S24", price: 899.99, image: "/images/galaxy-s24.JPG" },
  { id: 4, type:"accessories", category: "Electronics", name: "Sony WH-1000XM5 Headphones", price: 349.99, image: "/images/sony-headphones.JPG" },
  { id: 5, type:"laptops", category: "Electronics", name: "Dell XPS 15 Laptop", price: 1799.99, image: "/images/dell-xps15.JPG" },
  { id: 6, type:"accessories", category: "Electronics", name: "Apple Watch Ultra", price: 799.99, image: "/images/apple-watch-ultra.JPG" },
  { id: 7, type:"accessories", category: "Electronics", name: "GoPro HERO11", price: 499.99, image: "/images/gopro-hero11.JPG" },
  { id: 8, type:"phones", category: "Electronics", name: "Google Pixel 8", price: 799.99, image: "/images/pixel8.JPG" },
  { id: 9, type:"accessories", category: "Electronics", name: "DJI Mini 3 Drone", price: 599.99, image: "/images/dji-mini3.JPG" },
  { id: 10, type:"accessories", category: "Electronics", name: "Amazon Echo Show 10", price: 249.99, image: "/images/echo-show10.JPG" },

  { id: 11, type:"men", category: "Clothing", name: "Men's Leather Jacket", price: 199.99, image: "/images/mens-leather-jacket.JPG" },
  { id: 12, type:"women", category: "Clothing", name: "Women's Summer Dress", price: 79.99, image: "/images/womens-summer-dress.JPG" },
  { id: 13, type:"kids", category: "Clothing", name: "Kids Hoodie", price: 39.99, image: "/images/kids-hoodie.JPG" },
  { id: 14, type:"men", category: "Clothing", name: "Men's Running Shoes", price: 129.99, image: "/images/mens-running-shoes.JPG" },
  { id: 15, type:"women", category: "Clothing", name: "Women's Handbag", price: 149.99, image: "/images/womens-handbag.JPG" },
  { id: 17, type:"men", category: "Clothing", name: "Denim Jeans", price: 59.99, image: "/images/denim-jeans.JPG" },
  { id: 18, type:"men", category: "Clothing", name: "Formal Blazer", price: 199.99, image: "/images/formal-blazer.JPG" },
  { id: 19, type:"women", category: "Clothing", name: "Women's Sneakers", price: 89.99, image: "/images/womens-sneakers.JPG" },
  { id: 20, type:"men", category: "Clothing", name: "Graphic T-Shirt", price: 29.99, image: "/images/graphic-tshirt.JPG" },

  { id: 21, type:"", category: "Books", name: "The Great Gatsby", price: 14.99, image: "/images/great-gatsby.JPG" },
  { id: 22, type:"", category: "Books", name: "Atomic Habits", price: 18.99, image: "/images/atomic-habits.JPG" },
  { id: 23, type:"", category: "Books", name: "Harry Potter Box Set", price: 99.99, image: "/images/harry-potter-boxset.JPG" },
  { id: 24, type:"", category: "Books", name: "Rich Dad Poor Dad", price: 17.99, image: "/images/rich-dad-poor-dad.JPG" },
  { id: 25, type:"", category: "Books", name: "The Alchemist", price: 16.99, image: "/images/the-alchemist.JPG" },
  { id: 26, type:"", category: "Books", name: "Start With Why", price: 20.99, image: "/images/start-with-why.JPG" },
  { id: 27, type:"", category: "Books", name: "Dune", price: 24.99, image: "/images/dune.JPG" },
  { id: 28, type:"", category: "Books", name: "The Hobbit", price: 19.99, image: "/images/the-hobbit.JPG" },
  { id: 29, type:"", category: "Books", name: "1984 by George Orwell", price: 15.99, image: "/images/1984.JPG" },
  { id: 30, type:"", category: "Books", name: "The Psychology of Money", price: 21.99, image: "/images/psychology-of-money.JPG" },

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
