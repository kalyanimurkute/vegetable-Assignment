import React from 'react'
import { Salad as SaladIcon } from 'lucide-react'

function Navbar() {
  return (
    <div className="sticky top-4 max-w-7/12 bg-[#F39F9F] mx-auto px-6 py-3 rounded-full flex items-center shadow-md">

      <SaladIcon className="mr-2 w-7 h-7 text-green-700" />

      <h4 className="text-lg font-semibold text-gray-800">
        NatureCart
      </h4>

    </div>
  )
}

export default Navbar