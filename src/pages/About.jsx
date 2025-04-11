
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 5rem 5%;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  color: #333;
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: 'Playfair Display', serif;
    color: #333;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #555;
  }
`;

function About() {
  return (
    <AboutContainer>
      <AboutHeader
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AboutTitle>Our Story</AboutTitle>
        <AboutSubtitle>
          Capturing life's most precious moments with passion and creativity
        </AboutSubtitle>
      </AboutHeader>

      <AboutContent>
        <AboutImage
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522206024047-9c925421675b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
            alt="Photographer at work" 
          />
        </AboutImage>

        <AboutText>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional Photography Since 2010
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Founded in 2010, our studio has been dedicated to capturing the most important moments in people's lives. We believe every photograph tells a story, and we're passionate about telling yours.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our team of professional photographers brings years of experience and a unique artistic vision to every project. We specialize in wedding photography, portrait sessions, and commercial work.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            What sets us apart is our attention to detail and our commitment to making every client feel comfortable in front of the camera. We don't just take pictures - we create memories.
          </motion.p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;