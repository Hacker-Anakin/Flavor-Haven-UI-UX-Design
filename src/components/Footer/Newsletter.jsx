import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import { useState } from 'react';

const Newsletter = () => {
  const [value, setValue] = useState('');
  const [sub, setsub] = useState(false);

  const subcheck = () => {
    if (value !== '') {
      setsub(true)
    }else {
      setsub(false)
    }
  }
  return(
  <div className="newsletter">
    <div className="newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="newsletter-input flex__center">
      <div>
        <input type="email" required placeholder="Enter your email address" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button type="button" className="custom__button" onClick={subcheck}>Subscribe</button>
      </div>
      {sub && (
        <div>
          <p className="p__opensans" style={{margin:'8px 0 0 0'}}>You are now Subscribed</p>
        </div>
      )}
    </div>
  </div>)
};

export default Newsletter;
