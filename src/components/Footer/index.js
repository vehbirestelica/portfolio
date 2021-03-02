import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { MdVerticalAlignTop } from "react-icons/md";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Testemionals</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">YouTube</FooterLink>
                <FooterLink to="/">Linkedin</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                <MdVerticalAlignTop />
              </SocialLogo>
              <WebsiteRights>
                © {new Date().getFullYear()} - All Rights Reserved!
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://github.com/vehbirestelica"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/vehbiirestelica/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/vehbi-restelica-6a87111a0/"
                  target="_blank"
                  aria-label="LindedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/vehbirestelica/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.youtube.com/vehbirestelica"
                  target="_blank"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="https://twitter.com/vehbirestelica"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
