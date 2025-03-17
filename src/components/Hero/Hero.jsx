import { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import './Hero.css';

const Hero = ({ images }) => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      // итерация по картинкам
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded((prev) => {
            const newCount = prev + 1;
            if (newCount === images.length) {
              setTimeout(() => setLoading(false), 500); // плавный переход
            }
            return newCount;
          });
        };
      });
    };

    preloadImages();
  }, [images]);

  // прилодер для загрузки изоброжении , чтоб глаза не резали
  const loadingProgress = Math.round((imagesLoaded / images.length) * 100);

  return (
    <section className="hero">
      {loading ? (
        <div className="preloader">
          <div className="preloader-content">
            <div className="preloader-spinner"></div>
            <div className="preloader-progress">
              <div 
                className="preloader-bar" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="preloader-text">{loadingProgress}%</div>
          </div>
        </div>
      ) : (
        <Carousel images={images} />
      )}
    </section>
  );
};

export default Hero;
