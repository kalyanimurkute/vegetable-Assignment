
import React, { useState, useEffect } from 'react';
import { Salad as SaladIcon, ShoppingCart as ShoppingCartIcon } from 'lucide-react'
import { Link } from "react-router"

function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    function updateCart() {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(existingCart);
    }

    updateCart();

    window.addEventListener("cartUpdated", updateCart);

    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="sticky top-4 max-w-7/12 bg-[#F39F9F] mx-auto px-6 py-3 rounded-full flex items-center shadow-md z-50">
      <Link to="/" className='flex items-center gap-2'>
        <SaladIcon className="mr-2 w-8 h-8 " />

        <h4 className="text-lg font-semibold text-gray-800">
          NatureCart
        </h4>
      </Link>
      <Link to="/mycart" className="ml-auto relative">
        {totalItems > 0 && (
          <span className="absolute -top-3 right-2 text-black font-bold bg-red-500 rounded-full px-2 text-sm">
            {totalItems}
          </span>
        )}
        <ShoppingCartIcon className="w-7 h-7 text-black ml-auto cursor-pointer" />
      </Link>

    </div>
  )
}

export default Navbar