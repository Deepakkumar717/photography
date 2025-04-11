import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsContainer = styled.section`
  padding: 5rem 5%;
  background: #f5f5f5;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  color: #333;
`;

const TestimonialsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin: 0 1rem;
`;

const QuoteIcon = styled.div`
  color: #d4af37;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #d4af37;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    color: #333;
  }

  p {
    color: #777;
    font-size: 0.9rem;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #d4af37;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;

  &:hover {
    background: #c19b2c;
  }

  &:first-child {
    left: -50px;
  }

  &:last-child {
    right: -50px;
  }

  @media (max-width: 768px) {
    &:first-child {
      left: -20px;
    }

    &:last-child {
      right: -20px;
    }
  }
`;

const testimonials = [
  {
    id: 1,
    text: "The photos from our wedding are absolutely stunning! The photographer captured every special moment perfectly. We'll cherish these forever.",
    author: "Sarah & Michael",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    text: "Professional, creative, and made us feel completely comfortable during our family portrait session. The results were beyond our expectations!",
    author: "The Johnson Family",
    role: "Portrait Clients",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    text: "Our product photos have increased our online sales by 30%. The attention to detail and lighting was exceptional. Highly recommend!",
    author: "Lisa Thompson",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
  }
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <TestimonialsContainer>
      <SectionTitle>Client Testimonials</SectionTitle>
      <TestimonialsWrapper>
        <NavButton onClick={prevTestimonial}>
          <FaChevronLeft />
        </NavButton>

        <TestimonialCard
          key={testimonials[current].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <QuoteIcon>
            <FaQuoteLeft />
          </QuoteIcon>
          <TestimonialText>{testimonials[current].text}</TestimonialText>
          <TestimonialAuthor>
            <img src={testimonials[current].image} alt={testimonials[current].author} />
            <h4>{testimonials[current].author}</h4>
            <p>{testimonials[current].role}</p>
          </TestimonialAuthor>
        </TestimonialCard>

        <NavButton onClick={nextTestimonial}>
          <FaChevronRight />
        </NavButton>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
}

export default Testimonials;