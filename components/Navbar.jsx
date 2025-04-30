'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

const categories = [
  {
    name: "Electronics",
    href: "",
    subcategories: [
      { name: "Phones", href: "/products/electronics/phones" },
      { name: "Laptops", href: "/products/electronics/laptops" },
      { name: "Accessories", href: "/products/electronics/accessories" },
    ],
  },
  {
    name: "Clothing",
    href: "",
    subcategories: [
      { name: "Men", href: "/products/clothing/men" },
      { name: "Women", href: "/products/clothing/women" },
      { name: "Kids", href: "/products/clothing/kids" },
    ],
  },
  {
    name: "Books",
    href: "",
    subcategories: [
      { name: "Fiction", href: "/products/books/fiction" },
      { name: "Non-fiction", href: "/products/books/non-fiction" },
    ],
  },
];

const Navbar = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [productsHover, setProductsHover] = useState(false);

  return (
    <nav className="bg-white border-b shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-primary">
              ShopZone
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-lg font-medium hover:text-primary">
                Home
              </Link>

              {/* Products - with manual hover control */}
              <div
                className="relative"
                onMouseEnter={() => setProductsHover(true)}
                // onMouseLeave={() => setProductsHover(false)}
              >
                <button className="text-lg font-medium flex items-center hover:text-primary">
                  Products ▾
                </button>

                {/* Mega Menu */}
                {productsHover && (
                  <div onMouseLeave={() => setProductsHover(false)} className="absolute left-0 top-full mt-2 grid grid-cols-3 w-[800px] bg-white p-6 rounded-lg shadow-lg gap-8 z-50 transition-all">
                    {categories.map((category) => (
                      <div key={category.name}>
                        <Link href={category.href} className="font-bold text-md mb-3 block hover:text-primary">
                          {category.name}
                        </Link>
                        <div className="flex flex-col space-y-2">
                          {category.subcategories.map((sub) => (
                            <Link key={sub.name} href={sub.href} className="text-gray-600 text-sm hover:text-primary">
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-2xl relative hidden md:block">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl focus:outline-none">
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 py-4 bg-white space-y-4">
          <Link href="/" className="text-lg font-medium hover:text-primary">
            Home
          </Link>

          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="text-lg font-medium w-full text-left flex justify-between items-center hover:text-primary"
            >
              Products {productsOpen ? "▲" : "▼"}
            </button>

            {productsOpen && (
              <div className="flex flex-col space-y-2 mt-2 pl-4">
                {categories.map((category) => (
                  <div key={category.name}>
                    <Link
                      href={category.href}
                      className="font-bold text-md block hover:text-primary"
                    >
                      {category.name}
                    </Link>
                    <div className="flex flex-col pl-4 space-y-1">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-gray-600 text-sm hover:text-primary"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/cart" className="text-lg font-medium hover:text-primary">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
