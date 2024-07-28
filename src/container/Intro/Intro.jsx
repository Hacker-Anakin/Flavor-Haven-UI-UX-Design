import React from "react";

import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { meal } from "../../constants";
import { useRef } from "react";
import { useState } from "react";
import "./Intro.css";

const Intro = () => {
  const [playVid, setPlayVid] = useState(false);
  const vidRef = useRef();

  const vidControl = () => {
    setPlayVid(!playVid);
    if (playVid) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="video">
      <video src={meal} ref={vidRef} controls={false} loop muted></video>
      <div className="video-overlay flex__center">
        <div className="video-overlay-circle flex__center" onClick={vidControl}>
          {playVid ? (
            <BsPauseFill color="#fff" fontSize={30}></BsPauseFill>
          ) : (
            <BsPlayFill color="#fff" fontSize={30}></BsPlayFill>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
