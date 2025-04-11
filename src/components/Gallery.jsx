import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  padding: 5rem 5%;
  background: #f9f9f9;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  color: #333;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  aspect-ratio: 1/1;
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GalleryOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 1rem;
  color: white;
`;

const GalleryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const photos = [
  { id: 1, title: 'Wedding Day', url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
  { id: 2, title: 'Portrait Session', url: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80' },
  { id: 3, title: 'Nature Photography', url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' },
  { id: 4, title: 'Urban Exploration', url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' },
  { id: 5, title: 'Family Moments', url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
  { id: 6, title: 'Product Shoot', url: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <GalleryContainer>
      <SectionTitle>Our Portfolio</SectionTitle>
      <GalleryGrid>
        {photos.map((photo, index) => (
          <GalleryItem
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(photo)}
          >
            <GalleryImage src={photo.url} alt={photo.title} />
            <GalleryOverlay
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <GalleryTitle>{photo.title}</GalleryTitle>
            </GalleryOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
}

export default Gallery;