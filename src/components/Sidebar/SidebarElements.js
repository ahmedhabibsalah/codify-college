import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
 position:fixed;
 z-index:999;
 width: 100%;
 height: 100%;
 background: #edf2f4;
 display: grid;
 align-items: center;
 top:0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color:#ff5773;
`

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
box-shadow: transparent 1.95px 1.95px 2.6px;;
`
export const SidebarWrapper = styled.div `
 color:#db717d;
`
export const SidebarMenu = styled.ul `
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3,80px);
text-align: center;
@media screen and (max-width: 480px){
    grid-template-rows: repeat(3, 80px);
}
`

export const SidebarLink = styled(Link) `
display:flex;
align-items:center;
justify-content:center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2 ease-in-out;
text-decoration : none;
color: #ff5773;
cursor:pointer;
box-shadow: transparent 1.95px 1.95px 2.6px;;
&:hover {
    color:#2b2d42;
    transition: 0.2s ease-in-out;
}
`

export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 1.25rem;
	color: #ff5773;
	outline: none;
	border: 2px solid #ff5773;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #ff5773;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: #2b2d42;
	}
  
`;
