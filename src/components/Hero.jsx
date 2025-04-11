import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Montserrat', sans-serif;
  
  &:hover {
    background: white;
    color: black;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Capturing Life's Precious Moments
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional photography services for weddings, portraits, and special events
        </HeroSubtitle>
        <HeroButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Portfolio
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;