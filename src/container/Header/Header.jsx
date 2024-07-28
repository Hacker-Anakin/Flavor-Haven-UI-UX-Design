import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour"></SubHeading>
      <h1 className="header-h1">The Key To Fine Diner</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Our restaurant invites you to indulge in the rich flavors of Indian cuisine. From savory Samosas to refreshing Lassis, our menu offers a diverse range of dishes crafted with authentic ingredients. Whether you're in the mood for a steaming cup of Masala Chai or a cooling glass of Coconut Water, we have something to satisfy every palate. Join us at "Spice Haven" for a culinary journey that celebrates the vibrant flavors and traditions of Indian cooking.
      </p>
      <button className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
