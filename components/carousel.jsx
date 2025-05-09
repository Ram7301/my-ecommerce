"use client";

// import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Carousel = ({ products }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);
  
  const currentProduct = products[current];
  const price = currentProduct?.default_price;

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
      {currentProduct?.image && currentProduct.image && (
        <div className="relative h-200 w-full">
          <Image
            src={currentProduct.image}
            alt={currentProduct.name}
       fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            
            className="object-contain h-full w-full transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {currentProduct?.name}
        </CardTitle>
        {price  && (
          <p className="text-xl text-white">
            ${(price).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
