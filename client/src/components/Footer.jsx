export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Mchana</h3>
        <p className="mb-4 text-gray-400">
          Where luxury meets competition — dine, play, and celebrate in style.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-yellow-500 transition">Facebook</a>
          <a href="#" className="hover:text-yellow-500 transition">Instagram</a>
          <a href="#" className="hover:text-yellow-500 transition">Twitter</a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Mchana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
