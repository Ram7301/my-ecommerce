import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Ecommerce App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="p-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
