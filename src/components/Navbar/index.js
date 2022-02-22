import React from 'react'
import { ButtonWrapper, Logo, LogoName, MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa';
import logo from '../../images/codify-logo.png';
import { Button } from '../../globleStyles';

const Navbar = ({toggle}) => {
  return (
    <>
            <Nav>
                <NavbarContainer>
                    <NavLogo  to="/">
                       <Logo src={logo}/>
                       <LogoName >CF College</LogoName>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                      <FaBars />
                    </MobileIcon>
                    <NavMenu>
                      <NavItem>
                        <NavLinks to='/services'>Services</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/careers'>careers</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/about'>about</NavLinks>
                      </NavItem>                                          
                    </NavMenu>
                    <ButtonWrapper>
                        <NavLinks to='/start'>
                            <Button>Get Start</Button>
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