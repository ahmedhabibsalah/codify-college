import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterElement, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, Logo, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa';
import logo from '../../images/codify-logo.png'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
      }

  return (
    <FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>
                      Courses
                    </FooterLinkTitle>
                    <FooterLink to='/'>Foundation Course</FooterLink>
                    <FooterLink to='/'>Front-End Full Course</FooterLink>
                    <FooterLink to='/'>Mern Full-Stack Developer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>
                      Our Services
                    </FooterLinkTitle>
                    <FooterLink to='/services'>Mobile Development</FooterLink>
                    <FooterLink to='/services'>Web Development</FooterLink>
                    <FooterLink to='/services'>Shopify Development</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>
                      Address
                    </FooterLinkTitle>
                    <FooterElement>Röntgenvägen 1,141 52, Huddinge, Stockholm, Sweden</FooterElement>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>
                      Contact
                    </FooterLinkTitle>
                    <FooterElement>+46-72 33 38 723</FooterElement>
                    <FooterElement> info@codifycollege.se</FooterElement>   
                </FooterLinkItems>
                
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}><Logo src={logo}/></SocialLogo>
                <WebsiteRights>Codify College AB © {new Date().getFullYear()} All right reserved. </WebsiteRights>
            
            <SocialIcons>
                <SocialIconLink href="https://www.facebook.com/CfCollegezz/" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="https://www.linkedin.com/company/cf-college/" target="_blank" aria-label="Linkedin">
                    <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="https://twitter.com/codifycollege" target="_blank" aria-label="Linkedin">
                    <FaTwitter />
                </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>
</FooterContainer>
  )
}

export default Footer