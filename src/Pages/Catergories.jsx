import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import house1 from '../assets/Rectangle 1.png';
import house2 from '../assets/Rectangle 2.png';
import house3 from '../assets/Rectangle 3.png';
import house4 from '../assets/Rectangle 4.png';
import CustomCarousel from '../Component/CustomCarousel';
import TifeCarousel from '../Component/TifeCarousel';

function Categories() {
  return (
      <div>
      <div className="section-1-1">
        <div className="section-2">
          <div className="section-3">
            <div className='come'>
              <div className="dream">
                <div className="dream-1">
                  <h1>Find Your Dream Home</h1>
                  <p>
                    Do you want to buy your dream home? Or sell your house to
                    get your dream home? Here are categories to choose from.
                  </p>
                  <div className="sell">
                    <button className="sell-1">
                      Buy Now <HiOutlineArrowNarrowRight />
                    </button>
                    <button className="sell-1">
                      Sell Now<HiOutlineArrowNarrowRight />
                    </button>
                  </div>
                </div>
                <div className="houses">
                  <img src={house1} alt="" />
                  <img src={house2} alt="" />
                  <img src={house3} alt="" />
                  <img src={house4} alt="" />
                </div>
              </div>
              <div className="phone-dream">
                <div className="phone-dream-1">
                <h1>Find Your Dream Home</h1>
                  <p>
                    Do you want to buy your dream home? Or sell your house to
                    get your dream home? Here are categories to choose from.
                  </p>
                  <div className="houses">
                  <img src={house1} alt="" />
                  <img src={house2} alt="" />
                  <img src={house3} alt="" />
                  <img src={house4} alt="" />
                  </div>
                  <div className="sell-2">
                    <button className="sell-1">
                      Buy Now <HiOutlineArrowNarrowRight />
                    </button>
                    <button className="sell-1">
                      Sell Now<HiOutlineArrowNarrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-1">
                <div className="carousel-2">
                  <div className="carousel-3">
                    <div className="up">
                      <h1>Categories according to your Budget</h1>
                    	    <p>Bungalow</p>
                        <CustomCarousel/>
                        <p className='up-2'>Duplex</p>
                        <TifeCarousel/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
  </div>
  );
}

export default Categories;
