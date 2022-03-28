import React from 'react';
import { ReactSVG } from 'react-svg';
import monkey from '../../assets/monkey.svg';
import chat from '../../assets/chat.svg';
import forum from '../../assets/forum.svg';
import glass from '../../assets/glass.svg';
import line from '../../assets/line.svg';
import { Button } from '@mui/material';

const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__background">
        <ReactSVG className="hero__background-ellipse" src={chat} />
        <ReactSVG className="hero__background-cloud1" src={forum} />
        <ReactSVG className="hero__background-cloud2" src={glass} />
        <ReactSVG className="hero__background-cloud3" src={line} />
      </div>
      <div className="hero__information">
        <h1 className="hero__title">
          <span className="hero__title_red">NFTs</span> is the new ‘
          <span className="hero__title_red">cool</span>’
        </h1>
        <p className="hero__text">
          Now you can share some of the cutest JPEGS in the Metaverse.
        </p>
        <p className="hero__text hero__text_red">Show off your gallery in our forums! </p>
        <Button className="hero__calendar-btn" />
        <ReactSVG className="hero__img" src={monkey} />
      </div>
    </div>
  </div>
);

export default Hero;