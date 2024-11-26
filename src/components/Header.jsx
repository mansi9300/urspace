import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">UrSpayce</div>
      <nav className="flex space-x-4">
        <a href="#products" className="hover:text-blue-600">Products</a>
        <a href="#solutions" className="hover:text-blue-600">Solutions</a>
        <a href="#resources" className="hover:text-blue-600">Resources</a>
        <a href="#pricing" className="hover:text-blue-600">Pricing</a>
      </nav>
      <div className="flex space-x-2">
        <button className="px-4 py-2 border rounded">Log in</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
