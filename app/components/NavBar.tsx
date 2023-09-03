import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image';

const NavBar = () => {
  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex  items-center justify-between border-b-2 border-b-red-500 uppercase md-24 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-4 flex-1 '>
        <Link href='/'>HomePage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/" className='font-bold text-black'>Delivor</Link>
      </div>
      {/*MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* Right links */}
      <div className='hidden md:flex gap-4  item-center justify-end flex-1'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>12 456 78</span>
        </div>
        {!user ? (
          <Link href='/login'>Login</Link>
        ) : (<Link href='/Orders'>orders</Link>)}
        <CartIcon />
      </div>
    </div>
  );
};

export default NavBar