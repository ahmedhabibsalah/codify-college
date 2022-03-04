import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { ButtonWrapper, Item, ItemMenu, Logo, LogoName, MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa';
import logo from '../../images/codify-logo.png';
import { Button } from '../../globleStyles';
import { IconContext } from 'react-icons/lib';
import Popup from 'reactjs-popup';

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
     <IconContext.Provider value={{color: '#ff5773'}}>
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
                        <Popup trigger={<NavLinks to='/services'>Software Services</NavLinks>}
                        position="bottom"
                        on="hover"
                        closeOnDocumentClick
                        mouseLeaveDelay={300}
                        mouseEnterDelay={0}
                        contentStyle={{ padding: '0px', border: 'none' }}
                        arrow={false}
                        >
                          <ItemMenu>
                            <Item to='/services'> Web Development </Item>
                            <Item to='/services'> Mobile App Development </Item>
                            <Item to='/services'> Shopify Development </Item>
                          </ItemMenu>
                        </Popup>                        
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/about'>About</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/careers'>Careers</NavLinks>
                      </NavItem>                                          
                    </NavMenu>
                    <ButtonWrapper>
                        <NavLinks to='/contact'>
                            <Button>Contact Us</Button>
                        </NavLinks>
                        <NavLinks to='/signIn'>
                            <Button>Sign In</Button>
                        </NavLinks>
                      </ButtonWrapper>                    
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
  )
}

export default Navbar