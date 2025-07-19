import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard.jsx'

function ProductGrid() {

  const products = useSelector((state)=> state.product.filteredItems)
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24'>
      {products.map((product)=>{
        return<ProductCard key={product.id} product={product}/>

      }
       )}
    
    </div>
  )
}

export default ProductGrid
