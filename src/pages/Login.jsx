import React from 'react'
import Footer from '../components/Footer'
import dell from "/assets/dell.png"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="flex flex-col lg:flex-col lg:mb-6 mt-12 bg-white">

    <div className='flex '>
         <img src={dell} className='hidden lg:block lg:w-[46rem]'/>  
   
    
     

      <div className='p-6 md:ml-20 md:mb-6 lg:m-32 sm:ml-8 sm:mb-8 text-black'>
        <h1 className='mb-6 text-4xl font-semibold lg:text-3xl  md:text-6xl md:mb-6 sm:text-6xl  sm:mb-6'>Log in to Exclusive</h1>
        <p className='mb-6 text-sm md:mb-4 md:text-xl sm:text-xl sm:mb-6 lg:text-sm'>Enter your details below</p>
        <input type='text' placeholder="Email or Phone Number" className='border-b-2 w-[20rem] mb-6 md:w-[30rem] sm:w-[32rem] lg:w-[20rem]'/>
        <br/>
        <input type='text' placeholder="Password" className='border-b-2 w-[20rem] mb-6 md:w-[30rem] sm:w-[32rem] lg:w-[20rem]'/>
        <div>
        <button className='px-4 bg-gray-600 py-2 text-white rounded cursor-pointer'>Log in </button>
        <Link to='/sign in' className='text-gray-600 ml-24'>Forget Password?</Link>
        </div>
      </div>
       </div>
      <Footer />
   
    </div>
   
  )
}

export default Login

