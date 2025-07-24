import React from 'react'
import Footer from '../components/Footer'
import Side_Image from "/assets/Side_Image.png"
import Frame from '/assets/Frame 874.png'
import Lady from '/assets/Lady.png'
import whiteman from '/assets/whiteman.png'

import { StoreIcon } from 'lucide-react'
import { Wallet } from 'lucide-react'
import { ShoppingBag } from 'lucide-react'
import { DollarSign } from 'lucide-react'

import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Car } from 'lucide-react'

import { Headphones } from 'lucide-react'

import { ShieldCheck } from 'lucide-react'

function About() {
  return (
    <div className=''>
    
<div className='flex flex-col md:flex-row mt-20 justify-between'>
  <div className='w-full md:w-[50%] px-12 mt-10 '>
    <h2 className='font-semibold text-2xl md:text-4xl mb-4 text-center'>Our Story</h2>
    <p className='text-sm md:text-base leading-relaxed mb-3'>
      Your one-stop online shop for gaming gear and computer accessories!
    </p>
    <p className='text-sm md:text-base leading-relaxed'>
      We bring you the best in gaming consoles, headsets, keyboards, mice, monitors, and more all designed for top performance and unbeatable style. Whether you're a pro gamer or just starting out, we have the tools to level up your setup.  
      Shop with us for quality, speed, and gear that powers your play.
    </p>
  </div>

  <div className="md:w-auto mt-6 md:mt-0  bg-gray-300">
    <img src={Side_Image} alt="about image" />
  </div>
</div>


<div className='p-5 flex flex-wrap justify-evenly items-center gap-4 '>
  <div className='shadow-md p-4 flex flex-col items-center justify-center text-center h-48 w-60 hover:bg-gray-300 text-black mb-4'>
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <StoreIcon className="w-6 h-6 text-white" />
      </div>
    </div>
    <h2>10.5K</h2>
    <p>Sellers active on our site</p>
  </div>

  <div className='shadow-md p-4 flex flex-col items-center justify-center text-center h-48 w-60 hover:bg-gray-300 hover:text-black mb-4'>
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <DollarSign className="w-6 h-6 text-white" />
      </div>
    </div>
    <h2>33k</h2>
    <p>Monthly Product Sale</p>
  </div>

  <div className='shadow-md p-4 flex flex-col items-center justify-center text-center h-48 w-60 hover:bg-gray-300 hover:text-black mb-4'>
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <ShoppingBag className="w-6 h-6 text-white" />
      </div>
    </div>
    <h2>45.5K</h2>
    <p>Customers active on our site</p>
  </div>

  <div className='shadow-md p-4 flex flex-col items-center justify-center text-center h-48 w-60 hover:bg-gray-300 text-black'>
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <Wallet className="w-6 h-6 text-white" />
      </div>
    </div>
    <h2>25K</h2>
    <p>Annual gross sale on our site</p>
  </div>
</div>


<div className='flex flex-col md:flex-row justify-around items-center w-full gap-8 mt-10'>
  <div className='text-center'>
    <img src={Frame} alt="man" className='w-70 mb-4' />
    <p>Founder & Chairman</p>
    <div className='flex gap-4 mt-4 mb-4 justify-center'>
      <Twitter />
      <Instagram />
      <Linkedin />
    </div>
  </div>

  <div className='text-center'>
    <img src={Lady} alt="woman" className='w-70 mb-4' />
    <p>Managing Director</p>
    <div className='flex gap-4 mt-4 mb-4 justify-center'>
      <Twitter />
      <Instagram />
      <Linkedin />
    </div>
  </div>

  <div className='text-center'>
    <img src={whiteman} alt="man" className='w-70 mb-4' />
    <p>Product Designer</p>
    <div className='flex gap-4 mt-4 mb-4 justify-center'>
      <Twitter />
      <Instagram />
      <Linkedin />
    </div>
  </div>
</div>

<div className='flex flex-wrap justify-evenly items-center gap-4 mt-10'>
  <div className='p-4 flex flex-col items-center justify-center text-center h-48 w-60'>
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <Car className="w-6 h-6 text-white" />
      </div>
    </div>
    <h2 className='font-semibold'>FREE AND FAST DELIVERY</h2>
    <p className='text-sm'>Free delivery for all order over $140</p>
  </div>

  <div className='p-4 flex flex-col items-center justify-center text-center h-48 w-60'>
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <Headphones className="w-6 h-6 text-white" />
      </div>
    </div>
    <h2 className='font-semibold'>24/7 CUSTOMER SERVICE</h2>
    <p className='text-sm'>Friendly 24/7 customer support</p>
  </div>

  <div className='p-4 flex flex-col items-center justify-center text-center h-48 w-60'>
    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <ShieldCheck className="w-6 h-6 text-white" />
      </div>
    </div>
    <h2 className='font-semibold'>MONEY BACK GUARANTEE</h2>
    <p className='text-sm'>We return money within 30 days</p>
  </div>
</div>

        
      
      <Footer/>
    </div>
  )
}

export default About
