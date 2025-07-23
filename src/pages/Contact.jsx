import { PhoneCallIcon } from 'lucide-react'
import React from 'react'
import Footer from '../components/Footer'
import { Mail } from 'lucide-react'

function Contact() {
  return (
      <div>
      <div className="flex flex-col md:flex-row justify-evenly items-start gap-6 px-4 py-6">
 
  <div className="shadow-md w-full md:w-1/2 lg:w-[30%] p-4">
    <div className="flex gap-3 items-center mb-2">
      <PhoneCallIcon className="bg-gray-600 p-1 text-white rounded-full" />
      <p className="font-semibold text-sm">Call To Us</p>
    </div>
    <p className="text-sm">We are available 24/7, 7 days a week.</p>
    <p className="text-sm mt-2">Phone: +234 678 5657 8975</p>

    <hr className="border-t border-gray-300 my-4" />

    <div className="flex gap-3 items-center mb-2">
      <Mail className="bg-gray-600 p-1 text-white rounded-full" />
      <p className="font-semibold text-sm">Write to Us</p>
    </div>
    <p className="text-sm mb-2">
      Fill out our form and we will contact <br /> you within 24 hours
    </p>
    <p className="text-sm">Emails: customer@exclusive.com</p>
    <p className="text-sm">Emails: support@exclusive.com</p>
  </div>

  <div className="shadow-md w-full md:w-1/2 lg:w-[60%] p-4">
    <form>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <input type="text" placeholder="Your Name:" className="bg-gray-300 text-sm rounded p-2 w-full" />
        <input type="email" placeholder="Your Email:" className="bg-gray-300 text-sm rounded p-2 w-full" />
        <input type="tel" placeholder="Phone:" className="bg-gray-300 text-sm rounded p-2 w-full" />
      </div>

      <textarea
        name="message"
        id="message"
        placeholder="Message"
        rows="6"
        className="bg-gray-300 text-sm rounded mt-4 p-2 w-full"
      ></textarea>

      <div className="flex justify-end mt-4">
        <button className="cursor-pointer bg-gray-500 text-white rounded py-2 px-4 text-sm hover:bg-gray-300 hover:text-black">
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

    <Footer/>
    </div>
  )
}

export default Contact
