import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-yellow-400">Mchana</h3>
          <p>Experience luxury hospitality with world-class dining and entertainment.</p>
        </div>
       
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Hotel Street</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 234 567 8900</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@mchana.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="h-5 w-5 hover:text-red-600 dark:hover:text-yellow-400" /></a>
            <a href="#"><Instagram className="h-5 w-5 hover:text-red-600 dark:hover:text-yellow-400" /></a>
            <a href="#"><Twitter className="h-5 w-5 hover:text-red-600 dark:hover:text-yellow-400" /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Mchana Hotel. All rights reserved.
      </div>
    </footer>
  );
}
