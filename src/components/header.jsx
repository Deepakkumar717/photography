import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 1rem 3%;
  }
`;

const Logo = styled(Link)`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  
  span {
    color: #d4af37;
  }
`;

const NavLinks = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 0.4s ease;
    
    &.active {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    
    a {
      display: block;
      margin: 1.5rem;
      padding: 0.5rem;
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  margin: 0 1rem;
  transition: color 0.3s;
  
  &:hover {
    color: #d4af37;
  }
`;

const MenuIcon = styled.div`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer style={{ background: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)' }}>
      <Logo to="/">Photo<span>Graphy</span></Logo>
      
      <NavLinks className={isMenuOpen ? 'active' : ''}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
      </NavLinks>
      
      <MenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
    </HeaderContainer>
  );
}

export default Header;