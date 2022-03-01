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
                    <FooterLink href="" target="_blank" aria-label="">Foundation Course</FooterLink>
                    <FooterLink href="" target="_blank" aria-label="">Front-End Full Course</FooterLink>
                    <FooterLink href="" target="_blank" aria-label="">Mern Full-Stack Developer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>
                      Our Services
                    </FooterLinkTitle>
                    <FooterElement>Mobile Development</FooterElement>
                    <FooterElement>Web Development</FooterElement>
                    <FooterElement>Shopify Development</FooterElement>
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
                <SocialIconLink href="" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="" target="_blank" aria-label="Linkedin">
                    <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="" target="_blank" aria-label="Linkedin">
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