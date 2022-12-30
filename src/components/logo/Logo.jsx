import React from 'react'
import StyledLogo from './Logo.styled'
import LogoIcon from '../../assets/logo.svg'

// React Router import
import { Link } from 'react-router-dom'

// Material UI import
import Typography from '@mui/material/Typography'



/**
 * Logo component
 * @component
 * @returns {JSX.Element} 
 */
const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/" className="logo-link">
        <img src={LogoIcon} alt="Wealth Health logo" />
        <Typography fontSize="3rem" fontWeight="bold" textDecoration="none">HRnet</Typography>
      </Link>
    </StyledLogo>
  )
}

export default Logo