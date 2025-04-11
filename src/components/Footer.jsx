import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #222;
  color: #fff;
  padding: 3rem 5%;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
  color: #d4af37;
`;

const FooterLinks = styled.ul`
  list-style: none;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
`;

const FooterLinkItem = styled.a`
  color: #ccc;
  transition: color 0.3s;
  
  &:hover {
    color: #d4af37;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
  
  &:hover {
    color: #d4af37;
  }
`;

const Copyright = styled.p`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #444;
  color: #aaa;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <p>Professional photography services capturing your most precious moments with creativity and passion.</p>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink><FooterLinkItem href="/">Home</FooterLinkItem></FooterLink>
            <FooterLink><FooterLinkItem href="/portfolio">Portfolio</FooterLinkItem></FooterLink>
            <FooterLink><FooterLinkItem href="/about">About</FooterLinkItem></FooterLink>
            <FooterLink><FooterLinkItem href="/contact">Contact</FooterLinkItem></FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <p>123 Photography Ave</p>
          <p>New York, NY 10001</p>
          <p>info@photography.com</p>
          <p>+1 (555) 123-4567</p>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialIcons>
            <SocialIcon href="#"><FaInstagram /></SocialIcon>
            <SocialIcon href="#"><FaFacebook /></SocialIcon>
            <SocialIcon href="#"><FaTwitter /></SocialIcon>
            <SocialIcon href="#"><FaLinkedin /></SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Photography Studio. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;