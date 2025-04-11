import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactContainer = styled.section`
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

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-family: 'Playfair Display', serif;
    color: #333;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  color: #d4af37;
  font-size: 1.2rem;
  margin-right: 1rem;
  margin-top: 0.3rem;
`;

const InfoContent = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    color: #333;
  }

  p, a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #d4af37;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #555;
`;

const FormInput = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border-color: #d4af37;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: #d4af37;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background: #c19b2c;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactWrapper>
        <ContactInfo>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Information
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoContent>
                <h4>Our Studio</h4>
                <p>123 Photography Ave, New York, NY 10001</p>
              </InfoContent>
            </InfoItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <InfoItem>
              <InfoIcon>
                <FaPhone />
              </InfoIcon>
              <InfoContent>
                <h4>Phone</h4>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </InfoContent>
            </InfoItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <InfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoContent>
                <h4>Email</h4>
                <a href="mailto:info@photography.com">info@photography.com</a>
              </InfoContent>
            </InfoItem>
          </motion.div>
        </ContactInfo>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Your Name</FormLabel>
              <FormInput 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Your Email</FormLabel>
              <FormInput 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Subject</FormLabel>
              <FormInput 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Your Message</FormLabel>
              <FormTextarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FaPaperPlane />
            </SubmitButton>
          </ContactForm>
        </motion.div>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;