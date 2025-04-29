export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-600 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Subscribe</h3>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Email address" className="px-3 py-2 border rounded" />
              <button className="bg-black text-white py-2 rounded hover:bg-gray-800">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 py-4 border-t">
          &copy; {new Date().getFullYear()} shopZone. All rights reserved.
        </div>
      </footer>
    );
  }
  