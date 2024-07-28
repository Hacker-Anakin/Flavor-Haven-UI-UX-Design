import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tag}) => (
  <div className="menuitem">
    <div className="menuitem-head">
      <div className="menuitem-name">
        <p className='p__cormorant' style={{color: '#dcca87'}}>{title}</p>
      </div>
      <div className='menuitem-line'></div>
      <div className="menuitem-price">
        <p className='p__cormorant' >{price}</p>
      </div>
    </div>
    <div className="menuitem-sub">
      <p className="p__opensans" style={{color: '#aaaaaa'}}>{tag}</p>
    </div>
  </div>
);

export default MenuItem;
