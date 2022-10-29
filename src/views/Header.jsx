import React from 'react'

const Header = ({open,setOpen}) => {

  return (
    <header className="relative px-7 flex place-content-between items-center h-16 bg-white">
        <span>
            <img src="./assets/icons/logo.svg" alt="easybank-logo" />
        </span>
        <a className='md:hidden' href='#' onClick={()=>setOpen(!open)}>
            <img src={`./assets/icons/icon-${open?'close':'hamburger'}.svg`} alt="hamburger" />
        </a>
        <nav className='hidden md:block'>
          <ul className='flex flex-row gap-5'>
            <li><a className="menu-nav-a" href="">Home</a></li>
            <li><a className="menu-nav-a" href="">About</a></li>
            <li><a className="menu-nav-a" href="">Contact</a></li>
            <li><a className="menu-nav-a" href="">Blog</a></li>
            <li><a className="menu-nav-a" href="">Careers</a></li>
          </ul>
        </nav>
        <button className="button hidden md:block">
          request invite
        </button>
    </header>
  )
}

export default Header