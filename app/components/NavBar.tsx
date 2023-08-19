import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const NavBar = () => {
  return (
    <div>{/* LOGO */}
    <div>
      <Link >Delivor</Link>  
    </div>
    {/*MOBILE MENU */}
    <div>
      <Menu/>
    </div>
    </div>
  )
}

export default NavBar