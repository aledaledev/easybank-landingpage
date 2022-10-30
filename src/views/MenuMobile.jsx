import React from 'react'

const MenuMobile = () => {
  return (
    <nav className='absolute z-20 h-screen w-screen bg-gradient-to-b from-dark-blue to-transparent bg-opacity-20'>
       <ul className='text-center py-6 absolute w-10/12 right-0 left-0 top-24 bg-white mx-auto rounded-md'>
        <li className='py-1'><a className='text-dark-blue text-lg' href="#">Home</a></li>
        <li className='py-1'><a className='text-dark-blue text-lg'  href="#">About</a></li>
        <li className='py-1'><a className='text-dark-blue text-lg'  href="#">Contact</a></li>
        <li className='py-1'><a className='text-dark-blue text-lg'  href="#">Blog</a></li>
        <li className='py-1'><a className='text-dark-blue text-lg'  href="#">Careers</a></li>
      </ul>
    </nav>
  )
}

export default MenuMobile