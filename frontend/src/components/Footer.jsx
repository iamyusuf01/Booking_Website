import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_2fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left Side */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt=''/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Never tell the physician what to write, no matter how clear the clinical picture appears. Be sure to ask clear questions and always provide the physicians with multiple answer options – and always include an “out” such as “unable to be determined.” This will aid in the query being compliant. Avoid Yes/No questions. </p>
            </div>
            {/* Center side */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* Right side */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>info@example.com</li>
                </ul>
            </div>
        </div>  
        {/*  */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center '>copyright @2024</p>
        </div>
    </div>
  )
}

export default Footer