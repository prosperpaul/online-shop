import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return( 
//   <Link to={`/product/${product.id}`}>
//   <div className='shadow-lg rounded-md cursor-pointer  max-w-sm mx-auto'>
//     <img src={product.image} className='w-full h- object-cover rounded-t-md' />
//     <div className='bg-gray-50 p-4'>
//       <h2 className='text-base md:text-lg font-semibold my-2'>{product.title.substring(0,15)+ "..."}</h2>
//       <p className='text-sm text-zinc-500 border-b-2 pb-2'>{product.description.substring(0,25)+ "..."}</p>
//       <div className='flex justify-between items-center mt-4'>
//         <p className='text-lg font-semibold'>${product.price}</p>
//         <p className='text-blue-600 hover:underline text-sm'>View Details</p>
//       </div>

//     </div>
//   </div>
// </Link>



    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer w-full sm:max-w-xs md:max-w-sm mx-auto transition-transform hover:scale-105">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 sm:h-48 md:h-64 object-contain rounded-t-md"
        />
        <div className="bg-gray-50 p-3 sm:p-4">
          <h2 className="text-base md:text-lg font-semibold my-2 truncate">
            {product.title.length > 15 ? product.title.substring(0, 15) + "..." : product.title}
          </h2>
          <p className="text-sm text-zinc-500 border-t pb-2 truncate">
            {product.description.length > 25 ? product.description.substring(0, 25) + "..." : product.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">${product.price}</p>
            <p className="text-blue-600 hover:underline text-sm">View Details</p>
          </div>
        </div>
      </div>
    </Link>
  )
  
}

export default ProductCard
