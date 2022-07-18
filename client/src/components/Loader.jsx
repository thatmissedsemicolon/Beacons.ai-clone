import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Loader = () => {
  return (
    <div className='py-40 text-center'>
      <BiLoaderAlt size={40} className="spinner-border animate-spin inline-block rounded-full" />
    </div>
  )
}

export default Loader;