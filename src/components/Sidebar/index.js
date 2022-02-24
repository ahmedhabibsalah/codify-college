import React from 'react'
import { Button } from '../../globleStyles'
import {CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="/careers" onClick={toggle}>
                    Careers
                </SidebarLink>
                <SidebarLink to="/about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='/start'onClick={toggle}>
                    <Button>Get Started</Button>
                </SidebarLink>
                <SidebarLink style={{marginTop:"1rem"}} to='/signIn'onClick={toggle}>
                    <Button>Sign In</Button>
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    )
}

export default Sidebar