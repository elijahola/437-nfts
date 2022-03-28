import React from 'react';
import { ReactSVG } from 'react-svg';
import monkey from '../../assets/monkey.svg';
import chat from '../../assets/chat.svg';
import forum from '../../assets/forum.svg';
import glass from '../../assets/glass.svg';
import line from '../../assets/line.svg';
import { Button } from '@mui/material';
import "../../styles/hero/hero.css";
import { Link } from 'react-router-dom';

const Hero = () => (
  <div className="hero">
    <div className="herocontainer">
      <div className="herobackground">
        <ReactSVG width="12px" height="20px" viewBox="0 0 12 20" className="herobackgroundchat" src={chat} />
        <ReactSVG width="12px" height="20px" viewBox="0 0 12 20" className="herobackgroundforum" src={forum} />
        <ReactSVG width="12px" height="20px" viewBox="0 0 12 20" className="herobackgroundglass" src={glass} />
        <ReactSVG width="12px" height="20px" viewBox="0 0 12 20" className="herobackgroundline" src={line} />
      </div>
      <div className="heroinformation">
          <div className='float-child'>
          <h1 className="herotitle">
          <span className="herotitlered">NFTs</span> is the new ‘
          <span className="herotitlered">cool</span>’
        </h1>
        <p className="herotext">
          Now you can share some of the cutest JPEGS in the Metaverse.
        </p>
        <p className="herotextred">Show off your gallery in our forums! </p>
        <Link to="/gallery" style={{ textDecoration: 'none'}} className="button">Gallery</Link>
              </div>
        <div className='float-child'>
        <ReactSVG className="heroimg" src={monkey} />
            </div>
        
      </div>
    </div>
  </div>
);

export default Hero;