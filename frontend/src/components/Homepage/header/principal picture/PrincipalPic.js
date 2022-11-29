import React,{useEffect} from 'react'
import './principalpic.css'
import  principal from './principal.jpg'
import  pss from './rotary_pres_latest.jpg'
import Divider from '../../divider/Divider'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PrincipalPic() {
  useEffect(() => {
    AOS.init({ duration: 1000 });


}, []);
  return (
    <div className='princi-start' data-aos="slide-right">
        <div className='princi-1'>
            <div className='the-pic-div'>
                <img src={principal}alt="" srcset=""  className='the-pic'/>
            </div>
            <div className='the-pic-div-2'>
                <img src={pss} alt=""   className='the-pic'/> 
            </div>
         
        </div>
        <div className='for-princis'>
        <Divider />
        </div>
      
        <div className='The-text' data-aos="fade-up">We, the team of Rotaract Club of Bangalore B.I.T. have decided the theme of the Rotayear 2022-23 to be “Sprint Strong Stags”. We believe in standing out as exceptional. The brilliant team we have this year has unique talents. Shining like a bright unicorn with the horn as our guiding spirit, we would be developing leadership and bravery. With optimistic spirits and unity, we wish to prove ourselves to be extraordinary. Sticking to roots yet getting known for our sharpness,agile,frisky what we mean by our logo, the Deer. We are aiming for an amazing Rotayear. As galant and proud as a deer, our club is ready for this upcoming joyride of Rotaract.</div>
    </div>
  )
}
