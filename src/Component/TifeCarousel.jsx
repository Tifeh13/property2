import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import duplex1 from '../assets/Rectangle 8.png';
import duplex2 from '../assets/Rectangle 9.png';
import duplex3 from '../assets/Rectangle 10.png';
import { Carousel } from 'react-responsive-carousel';


function TifeCarousel() {
  return (
    <ResponsiveCarousel
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      emulateTouch={true}
      centerMode={true}
      centerSlidePercentage={33}
      renderIndicator={() => null}
      style={{ margin: '0 15px' }}
      autoPlay={true} // Enable auto-play
      infiniteLoop={true} 
      interval={1000} // Set the interval between slides (in milliseconds)
    >
      <div style={{ marginRight: '20px' }}>
        <img src={duplex1} alt="First slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex2} alt="Second slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex3} alt="Third slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex1} alt="First slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex2} alt="Second slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex3} alt="Third slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex1} alt="First slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex2} alt="Second slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex3} alt="Third slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex1} alt="First slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex2} alt="Second slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={duplex3} alt="Third slide" />
      </div>
    </ResponsiveCarousel>
  );
}

export default TifeCarousel;
