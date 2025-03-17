import { useState, useRef, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Реф для доступа к контейнеру с изображениями
  const carouselRef = useRef(null);

  // кнопка след
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // кнопка назад
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // useeffect для обновления карусели при изменении currentIndex
  useEffect(() => {
    if (carouselRef.current) {
      const translateX = -currentIndex * 100;
      carouselRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content" ref={carouselRef}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      <button className="carousel-button prev" onClick={handlePrev}>
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        <svg viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
