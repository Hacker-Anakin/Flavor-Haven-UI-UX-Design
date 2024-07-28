import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="about">
    <div className="aboutus-overlay flex__center">
      <img src={images.F} alt="" style={{zIndex:"9"}}/>
    </div>
    <div className="aboutus-content flex__center">
      <div className='aboutus-content-about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="" className='spoon-img'/>
        <p className='p__opensans'>At Flavor Haven, we're passionate about sharing the authentic flavors of India, inviting you to savor every bite of our carefully crafted dishes in a vibrant and welcoming atmosphere. Join us for an unforgettable culinary experience that celebrates the rich heritage of Indian cuisine.</p>
      </div>
      <div className='aboutus-content-knife flex__center'>
        <img src={images.knife} alt="" />
      </div>
      <div className='aboutus-content-history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="" className='spoon-img'/>
        <p className='p__opensans'style={{color:'#aaaaaa'}}>Rooted in tradition, Flavor Haven traces its heritage back through generations, embodying the timeless essence of Indian culinary artistry in every dish we serve. From humble beginnings to becoming a cherished culinary destination, our history is woven with passion, dedication, and a commitment to excellence.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
