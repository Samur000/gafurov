import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	const [isOpen, setIsOpen] = useState( false )

	const toggleMenu = () => {
		setIsOpen( !isOpen )
	}
	return <nav className='nav'>
		<div class='container'>
         <div class='nav__menu'>
            <Link to='/' class='menu__logo'><span>G.</span> Samur</Link>
            <div class={`menu__links ${isOpen ? 'open' : ''}`}>
				<NavLink onClick={toggleMenu} to='/'>Home</NavLink>
				<NavLink onClick={toggleMenu} to='projects'>Projects</NavLink>
				<NavLink onClick={toggleMenu} to='about'>About</NavLink>
				<NavLink onClick={toggleMenu} to='contacts'>Contacts</NavLink>
            </div>
            <div class={`menu__burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
               <div class='menu__burger-line'></div>
               <div class='menu__burger-line'></div>
               <div class='menu__burger-line'></div>
            </div>
         </div>
      </div>
  	</nav>
}

export default Header