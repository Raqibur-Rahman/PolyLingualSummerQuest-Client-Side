import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/images/image1.jpg';
import banner2 from '../../assets/images/slider2.png';
import banner3 from '../../assets/images/slider3.png';

const Banner = () => {
  return (
    <Carousel>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-white">Unlock the World of Languages</h1>
            <h1 className="mb-5 text-xl font-semibold text-white">Expand your horizons, embrace diversity</h1>
            <p className="mb-5 text-white">Immerse yourself in the beauty of languages. Discover new cultures, make meaningful connections, and gain valuable skills. Join our Foreign Language Learning School and embark on a linguistic adventure!</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-white">Learn Languages with Ease</h1>
            <h1 className="mb-5 text-xl font-semibold text-white">Master communication in multiple languages</h1>
            <p className="mb-5 text-white">Experience effortless language learning with our proven methods and interactive approach. Gain fluency and confidence in expressing yourself in diverse linguistic contexts.</p>
            <button className="btn btn-primary">Join Now</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-white">Explore Global Cultures</h1>
            <h1 className="mb-5 text-xl font-semibold text-white">Discover the richness of cultural diversity</h1>
            <p className="mb-5 text-white">Immerse yourself in the traditions, customs, and histories of various cultures. Expand your worldview, develop intercultural competence, and forge connections that transcend borders.</p>
            <button className="btn btn-primary">Discover More</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
