import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { ButtonWrapper, Logo, LogoName, MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa';
import logo from '../../images/codify-logo.png';
import { Button } from '../../globleStyles';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
  
    const changeNav= () => {
      if(window.scrollY >= 80){
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, []);
  
    const toggleHome = () => {
      scroll.scrollToTop()
    }
  return (
    <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo  to="/"  onClick={toggleHome}>
                       <Logo src={logo}/>
                       <LogoName >CF College</LogoName>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                      <FaBars />
                    </MobileIcon>
                    <NavMenu>
                      <NavItem>
                        <NavLinks to='/services'>Software Services</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/about'>About</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/careers'>Careers</NavLinks>
                      </NavItem>                                          
                    </NavMenu>
                    <ButtonWrapper>
                        <NavLinks to='/start'>
                            <Button>Get Started</Button>
                        </NavLinks>
                        <NavLinks to='/signIn'>
                            <Button>Sign In</Button>
                        </NavLinks>
                      </ButtonWrapper>                    
                </NavbarContainer>
            </Nav>
        </>
  )
}

export default Navbar