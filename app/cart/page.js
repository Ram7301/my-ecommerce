// app/cart/page.tsx
"use client";

import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow">
              <Image 
            //   src={item.image} 
              src={"https://via.placeholder.com/80"} // Placeholder image
              width={80} height={80} alt={item.name} className="rounded-lg" />
              <div className="ml-4 flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">Variant: {item.variant || "Default"}</p>
              </div>
              <div className="flex items-center space-x-2">
                {/* Delete Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
                {/* Quantity Selector */}
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="border rounded px-2 py-1"
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option key={qty} value={qty}>{qty}</option>
                  ))}
                </select>
              </div>
              <div className="ml-4 text-right">
                <p className="text-sm">${item.price.toFixed(2)}</p>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
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
