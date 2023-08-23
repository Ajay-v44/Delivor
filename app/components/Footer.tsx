import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='py-8 lg:py-16 xl:py-24 bg-red-500'>
      <div className='container mx-auto px-6 lg:px-20 xl:px-40 flex flex-col lg:flex-row items-center justify-between'>
        <div className='text-center lg:text-left mb-6 lg:mb-0'>
          <a className='font-bold text-xl text-white transition-transform transform hover:scale-105'>
            Delivor
          </a>
          <p className='text-xs mt-1 text-gray-300 animate-pulse'>©️ ALL RIGHTS RESERVED</p>
        </div>
        <div className='text-center lg:text-right'>
          <p className='text-sm text-gray-300'>Made with</p>
          <p className='font-bold text-lg text-white'>❤️</p>
          <p className='text-sm'>by Ajay</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
