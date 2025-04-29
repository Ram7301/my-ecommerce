"use client";

import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Cart Items */}
        <div className="flex-1 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow gap-4"
            >
              <Image
                src={item.image}
                width={80}
                height={80}
                alt={item.name}
                className="rounded-lg"
              />
              <div className="flex-1 w-full sm:w-auto">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  Variant: {item.variant || "Default"}
                </p>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-2 mt-2 sm:mt-0">
                {/* Quantity Controls */}
                <div className="flex items-center border rounded px-2 py-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                    className="px-2 text-gray-600 hover:text-black disabled:opacity-30"
                  >
                    −
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 text-gray-600 hover:text-black"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="text-right min-w-[80px]">
                  <p className="text-sm">${item.price.toFixed(2)}</p>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Delete */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="w-full md:w-80 bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold">Summary</h2>
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Taxes</span>
            <span>$0.00</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-black text-white py-3 rounded hover:bg-gray-800">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
