import React from 'react'
import StyledLogo from './Logo.styled'
import LogoIcon from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

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