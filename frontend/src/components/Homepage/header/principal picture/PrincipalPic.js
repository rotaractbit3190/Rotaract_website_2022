import React, { useEffect } from 'react';
import './principalpic.css';
import principal from './principal.jpg';
import pss from './rotary_pres_latest.jpg';
import Divider from '../../divider/Divider';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PrincipalPic() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openInstagramProfile = (profileUrl) => {
    window.location.href = profileUrl;
  };

  return (
    <div className='princi-start' data-aos="slide-right">
      <div className='princi-1'>
        <div className='the-pic-div' onClick={() => openInstagramProfile('https://www.instagram.com/aswathmu?igsh=MTNnNzFhN3o4dGp2dg==')}>
          <img src={principal} alt="" className='the-pic' />
        </div>
        <div className='the-pic-div-2' onClick={() => openInstagramProfile('https://www.instagram.com/rotaryaagneya?igsh=aTYxOWY3aDllMjFw')}>
          <img src={pss} alt="" className='the-pic' />
        </div>
      </div>
      <div className='for-princis'>
        <Divider />
      </div>
      <div className='The-text' data-aos="fade-up">
        {/* Your text content */}
      </div>
    </div>
  );
}
