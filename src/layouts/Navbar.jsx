import { AppBar, Box, Stack, Toolbar } from '@mui/material'
import blacklogo from '../assets/qntrl_logo.svg'
import whitelogo from '../assets/qntrl_logo_white.svg'
import { useState } from 'react'
import NavbarList from './NavbarList'

const Navbar = () => {
  const [logoColor, setLogoColor] = useState(false)
  const [burgerToggle, setBurgerToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  window.onscroll = () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      setLogoColor(true)
    } else {
      setLogoColor(false)
    }
  }

  return (
    <>
      <AppBar position='sticky'
      sx={{ bgcolor: logoColor ? '#fff' : '#000', transition: 'all 1s',pointerEvents:'all',zIndex:1250 }}>

      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', pl: 2, pr: 2 }}>
        <a href="#" style={{ transition: 'all 1s' }}>{logoColor ?
          <img src={whitelogo} style={{ width: '70px', height: '30px' }} /> :
          <img src={blacklogo} style={{ width: '70px', height: '30px' }} />}
        </a>

        <Box className='burger'
          onClick={() => {
            setBurgerToggle(!burgerToggle)
            setIsOpen(!isOpen)
          }}
          sx={{ justifyContent: burgerToggle ? 'center' : 'space-between' }}>

          <Box sx={{
            width: '100%',
            height: '2px',
            background: logoColor ? '#000' : '#fff',
            rotate: burgerToggle && '45deg', transformOrigin: 'top',
            transition: 'all 0.5s ease'
          }}>

          </Box>

          <Box sx={{
            width: '100%',
            height: '2px',
            background: logoColor ? '#000' : '#fff',
            rotate: burgerToggle && '-225deg',
            transformOrigin: 'top', transition: 'all 0.5s ease'
          }}>

          </Box>

        </Box>
      </Toolbar>

    </AppBar>
    <NavbarList isOpen={isOpen}/>
    </>
  )
}

export default Navbar