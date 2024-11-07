import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-base-300 p-10 mt-9 rounded-t-2xl rounded-l-2x">
      <div className='py-12'>
      <h6 className="text-base-content text-center Cutting_Edge_text">Gadget Heaven</h6>
      <p className="text-sm text-center">
      Leading the way in cutting-edge technology and innovation. &copy; 2023 Gadget Heaven. All rights reserved.
      </p>
    </div>
 <div className="divider"></div>
  <div className='w-[50%] mx-auto footer text-center text-base-content '>
  <nav className=' text-center'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support
</a>
    <a className="link link-hover">Order Tracking
</a>
    <a className="link link-hover">Shipping & Delivery
    </a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Service
</a>
    <a className="link link-hover">Privacy Policy
   </a>
    <a className="link link-hover"> Cookie Policy</a>
  </nav>
  </div>
  
  
</footer>
  )
}

export default Footer