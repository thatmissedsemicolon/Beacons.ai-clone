import React from 'react';
import { motion } from "framer-motion";
import logo from '../assets/profile.jpg';
import { BiMap } from 'react-icons/bi';
import Icon from './Icon';
import Payment from './Payment';

const Links = () => {

  document.title = "Suryansh";

  return (
    <div className='bg-hero flex flex-col justify-center items-center h-screen'>
      <div>
        <motion.h1
          initial = {{ y: 1000}}
          animate = {{ y: 0}}
          transition = {{ type: "spring", duration: 0.5}}
        >
          <img src={logo} className="w-28 rounded-full pointer-events-none" alt="logo" /> 
        </motion.h1>
      </div>
      <div>
        <motion.h1
          initial = {{ y: 1000}}
          animate = {{ y: 0}}
          transition = {{ type: "spring", duration: 0.5}}
        >
          <p className="px-6 pt-2 pb-2.5 font-large text-xl text-center text-white">@suryansh</p>
          <div className='flex flex-row justify-between text-white'>
            <div className="px-1 pt-1 pb-1 font-small text-lg leading-normal justify-between">
              <BiMap size={26} />
            </div>
            <div className='text-2xl'>
              <p>Boca Raton, FL</p>
            </div>
          </div>
        </motion.h1>
      </div>
      <div className='py-4 text-white'>
        <a href="/" className="block p-6 max-w-sm bg-gray rounded-lg border border-gray-200 shadow-md">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 text-white">Welcome to my social page!👋</h5>
          <p className="font-bold text-black-700 selection:text-gray-400 text-xs">Check out my links below.</p>
        </a>
      </div>
      <div>
        <a href="https://suryanshanand.com" rel="noopener noreferrer" target="_blank">
          <motion.button type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-gray-300 bg-[#0a192f] hover:bg-gray/90 focus:ring-4 focus:outline-none focus:ring-[#0a192f]/50 font-medium rounded-lg text-lg w-96 px-5 pt-2.5 pb-2 flex justify-between">
            <div>
              <Icon />
            </div>
            <div className='text-[#ccd6f6]'>
              My Portfolio 
            </div>
            <div></div>
          </motion.button>
        </a>
      </div>
      <div className='py-4'>
        <a href="https://github.com/thatmissedsemicolon" rel="noopener noreferrer" target="_blank">
          <motion.button type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-gray-900 bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-lg w-96 px-6 pt-2.5 pb-2 flex justify-between">
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              Github 
            </div>
            <div></div>
          </motion.button>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/suryansh-anand20" rel="noopener noreferrer" target="_blank" >
          <motion.button type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-gray-900 bg-[#0072b1] hover:bg-[#0072b1]/90 focus:ring-4 focus:outline-none focus:ring-[#0072b1]/50 font-medium rounded-lg text-lg w-96 px-6 pt-2.5 pb-2 text-center items-center flex justify-between">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div>
              Linkedin
            </div>
            <div></div>
          </motion.button>
        </a>
      </div>
      <div className='py-4'>
        <a href="https://www.linkedin.com/in/suryansh-anand20" rel="noopener noreferrer" target="_blank" >
          <motion.button type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-gray-900 bg-[#1ED760] hover:bg-[#1ED760]/90 focus:ring-4 focus:outline-none focus:ring-[#1ED760]/50 font-medium rounded-lg text-lg w-96 px-6 pt-2.5 pb-2 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 justify-between">
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
              </svg>
            </div>
            <div>
              Spotify
            </div>
            <div></div>
          </motion.button>
        </a>
      </div>
      <div>
        <Payment />
      </div>
      <footer>
        <div className="py-6 px-4 flex flex-col items-center justify-center text-center">
          <span class="text-sm text-gray-300 sm:text-center">Desgined & developed with ❤️ by <a class="text-blue-400" href="https://www.suryanshanand.com" rel="noopener noreferrer" target="_blank">Suryansh</a></span> 
        </div>
      </footer>
    </div>
  )
}

export default Links;