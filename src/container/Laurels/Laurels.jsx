import React from "react";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";

import "./Laurels.css";

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className="laurels-award-card">
    <img src={imgUrl} alt="" />
    <div className="laurels-award-card-content">
      <p className="p__cormorant" style={{color: "#dcca87"}}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognistion"></SubHeading>
      <h1 className="headtext__cormorant">Laurels</h1>
      <div className="laurels-awards">
        {data.awards.map((award)=><AwardCard award={award} key={award.title}></AwardCard>)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.F} alt="" />
    </div>
  </div>
);

export default Laurels;
