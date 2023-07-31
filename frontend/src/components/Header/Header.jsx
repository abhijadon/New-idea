import React, { useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../../assets/images/sode.png"
import { IoMdArrowDropdown } from 'react-icons/io'
const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className='py-3 md:py-0 md:h-[80px] leading-[80px] flex items-center sticky top-0 z-10 bg-[#fff]'>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ===========logo start=========== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] md:py bg-primaryColor text-white text-[15px] font-[500] rounded-full flex items-center justify-center" >
            </span>
            <div className="w-36 md:w-56">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          {/* =============logo end============= */}

          {/* =============menu start============= */}

          <div className="menu hidden lg:block md:pr-6">
            <ul className='flex items-center gap-9'>

              <li onMouseOver={() => {
                setDropdown(true)
              }} onMouseLeave={() => { setDropdown(false) }}><Link className='font-[600] text-[15px] flex items-center gap-0 ' to="/apply">Apply <span className='text-[20px]'><IoMdArrowDropdown /></span></Link></li>


              {/* =======================dropset================ */}
              {dropdown && (
                <div
                  onMouseOver={() => {
                    setDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setDropdown(false);
                  }}
                  s
                  className="absolute top-14 py-3 rounded-md shadow-2xl  px-5 w-48 bg-[#ffffff] text-[14px] leading-5 z-10"
                >
                  <ul>
                    <Link to="/online">
                      <li className="text-gray-600 py-1 hover:text-[#0970b8]">Online/Distance Degree</li>
                    </Link>
                    <Link to="/migration">
                      <li className="text-gray-600 py-1 hover:text-[#0970b8]">Migration Certificate</li>
                    </Link>
                    <Link to="/others">
                      <li className="text-gray-600 py-1 hover:text-[#0970b8]">Other</li>
                    </Link>
                  </ul>
                </div>
              )}
              {/* =======================dropset================ */}
              <div className="border border-r-0 border-gray-400 h-5"></div>
              <li><Link className='font-[600] text-[15px]' to="/">Home</Link></li>
              <div className="border border-r-0 border-gray-400 h-5"></div>
              <li><Link className='font-[600] text-[15px]' to="/support">Support</Link></li>
            </ul>
          </div>
          {/* =============mobile menu============= */}
          <span className='text-2xl text-gray-500 lg:hidden cursor-pointer pr-2 lg:pr-20'><i class="ri-menu-line"></i></span>
        </div>
      </div>
    </header >
  )
}

export default Header
