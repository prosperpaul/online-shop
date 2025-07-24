// import React from 'react'
// import ProudctGrid from '../components/ProductGrid'
// import Footer from '../components/Footer'
// import { useDispatch } from 'react-redux'
// import { setSelectedCategory } from '../features/products/ProductSlice'

// const categories = [
//   'All',
//   'Game Accessories',
//   'Computer Accessories',
//   'Monitors',
//   'Gaming Laptops',
// ]


// function Home() {

//   const dispatch =useDispatch()
//   return (
//     <div>
//      <div className='bg'></div>
//      <div className='container mx-auto my-10 px-4'>
//      <div className='flex gap-4'>
//      {categories.map((cate)=>{
//       return(
//          <button className='bg-gray-300 py-2 px-4 rounded-md text-black active:sclae-105 hover:bg-zinc-400 transition-all ease-in' key={cate} onClick={()=> dispatch(setSelectedCategory(cate))}>
//           {cate}
//          </button>
//       )
//      })}
//      </div>
//      <ProudctGrid/>
//      </div>
//      <Footer/>
//     </div>
//   )
// }

// export default Home



import React from 'react'
import ProudctGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { setSelectedCategory } from '../features/products/ProductSlice'

const categories = [
  'All',
  'Game Accessories',
  'Computer Accessories',
  'Monitors',
  'Gaming Laptops',
]

function Home() {
  const dispatch = useDispatch()
  return (
    <div>
      <div className='bg '>
        <div className=' text-black max-w-2xl '>   
           <h1 className='text-2xl sm:text-3xl md:text-6xl font-bold mb-4 uppercase'>Upgrade your setup with top-quality gear!</h1>
<p className='text-sm sm:text-base md:text-lg'>From gaming headsets and controllers to keyboards, mice, and monitors  everything you need for power, precision, and performance.</p></div>
    </div>
      <div className='container mx-auto my-10 px-4'>
        <div className='flex flex-wrap gap-2 md:gap-4 mb-6'>
          {categories.map((cate) => (
            <button
              className='bg-gray-300 py-2 px-3 md:px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in mb-2'
              key={cate}
              onClick={() => dispatch(setSelectedCategory(cate))}
            >
              {cate}
            </button>
          ))}
        </div>
        <ProudctGrid />
      </div>
      <Footer />
    </div>
  )
}

export default Home