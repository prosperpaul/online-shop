import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return( <Link to={`/product/${product.id}`}>
  <div className='shadow-lg rounded-md cursor-pointer  max-w-sm mx-auto'>
    <img src={product.image} className='w-full h-48 object-cover rounded-t-md' />
    <div className='bg-gray-50 p-4'>
      <h2 className='text-base md:text-lg font-semibold my-2'>{product.title.substring(0,15)+ "..."}</h2>
      <p className='text-sm text-zinc-500 border-b-2 pb-2'>{product.description.substring(0,25)+ "..."}</p>
      <div className='flex justify-between items-center mt-4'>
        <p className='text-lg font-semibold'>${product.price}</p>
        <p className='text-blue-600 hover:underline text-sm'>View Details</p>
      </div>

    </div>
  </div>
</Link>
  )
  
}

export default ProductCard
