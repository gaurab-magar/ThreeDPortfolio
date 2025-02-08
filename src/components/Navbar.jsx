import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../Style'
import {navLinks} from '../constants'
import { logo, menu, close } from '../assets'
const Navbar = () => {
  const [ active, setActive ]= useState("");
  const [ toggle , setToggle ] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' 
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0)
          }}>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
            <p className='text-white font-bold cursor-pointer text-[18px]'>Gaurab magar</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} onClick={()=>setActive(link.title)} className={`${active === link.title ? "text-white":"text-[#aaa6c3]"}
               hover:text-neutral-400 text-[18px] font-medium cursor-pointer transition-colors`}>
                <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu}  alt='menu' 
              className='h-[28px] w-[28px] object-contain cursor-pointer' 
              onClick={()=>setToggle(!toggle)} />

            <div className={`${!toggle ? 'hidden': 'flex'} p-4 px-2 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[160px] h-32 z-10 rounded-xl`}>
              <ul className='list-none flex flex-col gap-2'>
                {navLinks.map((link) => (
                  <li key={link.id} onClick={()=>{
                      setActive(link.title);
                      setToggle(!toggle);
                    }} className={`${active === link.title ? "text-white":"text-[#aaa6c3]"}
                    font-poppins font-medium text-[16px] cursor-pointer transition-colors`}>
                      <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar