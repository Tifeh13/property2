import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import house1 from '../assets/Rectangle 1.png';
import house2 from '../assets/Rectangle 2.png';
import house3 from '../assets/Rectangle 3.png';
import { Carousel } from 'react-responsive-carousel';


function CustomCarousel() {
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
        <img src={house1} alt="First slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house2} alt="Second slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house3} alt="Third slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house1} alt="First slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house2} alt="Second slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house3} alt="Third slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house1} alt="First slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house2} alt="Second slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house3} alt="Third slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house1} alt="First slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house2} alt="Second slide" />
      </div>
      <div style={{ marginRight: '20px' }}>
        <img src={house3} alt="Third slide" />
      </div>
    </ResponsiveCarousel>
  );
}


export default CustomCarousel;
