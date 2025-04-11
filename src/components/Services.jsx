import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCamera, FaHeart, FaImage, FaUmbrellaBeach } from 'react-icons/fa';

const ServicesContainer = styled.section`
  padding: 5rem 5%;
  background: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  color: #333;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #d4af37;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const services = [
  {
    icon: <FaCamera />,
    title: 'Wedding Photography',
    description: 'Capture your special day with our professional wedding photography services.'
  },
  {
    icon: <FaHeart />,
    title: 'Portrait Sessions',
    description: 'Beautiful portraits that showcase your personality and style.'
  },
  {
    icon: <FaImage />,
    title: 'Commercial Photography',
    description: 'High-quality images for your business and marketing needs.'
  },
  {
    icon: <FaUmbrellaBeach />,
    title: 'Event Coverage',
    description: 'Professional coverage for all your important events and celebrations.'
  }
];

function Services() {
  return (
    <ServicesContainer>
      <SectionTitle>Our Services</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}

export default Services;