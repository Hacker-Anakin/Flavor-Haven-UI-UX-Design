import React from "react";

import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="specialmenu flex__center section__padding" id="menu">
    <div className="specialmenu-title">
      <SubHeading title={"Menu That Fits You"}></SubHeading>
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className="specialmenu-menu">
      <div className="specialmenu-menu-drinks">
        <p className="specialmenu-menu-heading">Drinks</p>
        <div className="specialmenu-menu-items">
          {data.drinks.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tag={drink.tags}></MenuItem>
          ))}
        </div>
      </div>
      <div className="specialmenu-menu-img">
        <img src={images.menu} alt="" />
      </div>
      <div className="specialmenu-menu-cocktails">
        <p className="specialmenu-menu-heading">Snacks</p>
        <div className="specialmenu-menu-items">
          {data.snacks.map((snack, index) => (
            <MenuItem key={snack.title + index} title={snack.title} price={snack.price} tag={snack.tags}></MenuItem>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
