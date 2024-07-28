import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className="headtext__cormorant">Chef</h1>
      <div className="chef-content">
        <p className="p__opensans">
        Meet Chef Dev Patel, the culinary genius behind the exquisite flavors of "Spice Haven." With a lifetime of experience and a passion for authentic Indian cuisine, Chef Dev brings creativity, skill, and a touch of magic to every dish he creates.
        </p>
      </div>
      <div className="chef-sign">
        <p style={{color: '#dcca87'}}>Dev Patel</p>
        <p className="p__opensans">Head Chef</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
