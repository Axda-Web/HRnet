import React from 'react'
import StyledHeader from './Header.styled'

// Logo component import
import Logo from '../logo'


/**
 * Header component
 * @component
 * @returns {JSX.Element} 
 */
const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
}

export default Header