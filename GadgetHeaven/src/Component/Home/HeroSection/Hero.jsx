import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
    <div className=' bg-purple-700 rounded-2xl pt-2 px-4'>      
      {/* navbar */}
      <Navbar/>
         <div className="hero pt-32 min-h-screen  pb-80">
          
  <div className="hero-content text-center">
    <div className="max-w-[65rem]">
      <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 text-white">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <Link to ='/dashbord'>
      <button className="btn bg-white wave text-purple-500 rounded-full w-56">Shop Now</button></Link>
    </div>
  </div>
</div>
</div>
      {/* Hero Section End */}
      <div className='hero_bttom_section max-w-[65rem] m-auto ring-2 ring-white -translate-y-64 rounded-2xl'>
        <div className='p-5 bg-transparent'>
            <img src="/assets/banner.jpg" alt=""  className='rounded-2xl'/>
        </div>

            
      </div>
   
    </div>
  )
}

export default Hero