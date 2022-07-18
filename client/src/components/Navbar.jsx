import React, { useState, useEffect } from 'react';
import logo from '../assets/profile.jpg';
import { RWebShare } from 'react-web-share';
import share from '../assets/share.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const controlNavbar = () => {
    if(window.scrollY > 50) {
      setToggle(true); 
    }
    else {
      setToggle(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',controlNavbar);
    return () => {
      window.removeEventListener('scroll',controlNavbar);
    }
  },[])
   
  return (
    <>
      <div className ="fixed top-0 w-[100%]">
        <nav class="bg-gray">
          {toggle && (
            <div className="fixed top-0 w-[100%] backdrop-blur-lg md:hidden">
              <a href="/" class="flex items-center">
                <img src={logo} className="rounded-full w-14" alt="logo" /> 
              </a>
              <div className='text-center justify-center'>
                <span class="absolute inset-x-4 top-4 text-xl font-semibold whitespace-nowrap text-white">@suryansh</span>
              </div>
            </div>
          )}
          <div className="justify-between items-center space-x-5 w-screen">
            <RWebShare
              data = {{
                text: "Sury Social Links",
                url: "https://sury.netlify.app",
                title:"Sury Social Links",
              }}   
            > 
              <button type="button" className="text-sm bg-white absolute top-3 right-4 h-10 w-10 aspect-w-1 aspect-h-1 rounded-xl hover:shadow-lg"> 
                <img src={share} className="m-1" alt="logo" /> 
              </button>
            </RWebShare>
          </div>
        </nav>
      </div>
    </>
  )     
}

export default Navbar;