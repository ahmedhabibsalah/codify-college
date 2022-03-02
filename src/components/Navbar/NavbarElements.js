import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
background:${({scrollNav}) => (scrollNav ? "#edf2f4" : "transparent")} ;
height: 80px;
/* margin-top: -80px; */
display:flex;
justify-content: center;
align-items:center;
font-size: 1rem;
position:sticky;
top:0;
z-index:10;
font-family: "Roboto Slab", serif;
@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(Link)`
justify-self:flex-start;
cursor: pointer;
display:flex;
align-items: center;
color: #ff5773;
justify-self:flex-start;
font-size:1.25rem;
font-weight: bold;
text-decoration:none;

`

export const Logo = styled.img `
height:40px;
width:40px;
`

export const LogoName = styled.span `
    padding-left: 5px;
    white-space: nowrap;

`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 920px){
    
    display:block;
    position: absolute;
    right: 40px;
    transform: translate(100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color:#ff5773;
    box-shadow: transparent 1.95px 1.95px 2.6px;;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

margin-left:10rem;
@media screen and (max-width: 920px){
    display:none;
}
`
export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(Link)`
color: #ff5773;
display:flex;
font-size: 1.2rem;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;
    white-space: nowrap;

&:hover {
        color:	#2b2d42;
        transition : all 0.2s ease-in-out;
    }
`


export const ButtonWrapper = styled.div `
	width: 100%;
	display: flex;
	justify-content: flex-end;
	flex-flow: wrap;
	gap: 0.5rem;
    @media screen and (max-width: 920px){
      display:none
  }
`

export const Item = styled(Link)`
  padding: 5px;
  height: 28px;
  color: #ff5773;
  padding-right:30px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration:none;
  &:hover {
        color:	#2b2d42;
        transition : all 0.2s ease-in-out;
    }
  `

export const ItemMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #ffffff;
`