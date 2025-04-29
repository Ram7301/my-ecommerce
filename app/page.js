import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";


export default async function Home() {
  const products = [
    { id: 2, type:"laptops", category: "Electronics", name: "MacBook Air M3", price: 1299.99, image: "/images/electronics/macbookairm3.jpg" },
    
    { id: 11, type:"men", category: "Clothing", name: "Men's Leather Jacket", price: 199.99, image: "/images/clothings/mens-leather-jacket.jpg" },
    { id: 12, type:"women", category: "Clothing", name: "Women's Summer Dress", price: 79.99, image: "/images/clothings/womens-summer-dress.jpg" },
    { id: 13, type:"kids", category: "Clothing", name: "Kids Hoodie", price: 39.99, image: "/images/clothings/kids-hoodie.jpg" },

  
  ];

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to ShopZone
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products/electronics/all"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            src={"/images/s5.jpg"} // Placeholder image
            // src={products.data[0].images[0]}
            
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products} />
      </section>
    </div>
  );
}