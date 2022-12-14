import React,{useEffect} from "react";
import "./theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Theme() {
  useEffect(() => {
    AOS.init({ duration: 1000 });


}, []);
  return (
    <>
      <div className="main-one ">Theme for the year 2022-2023</div>
      <div className="sub-text" data-aos="slide-up">SPRINT STRONG STAG</div>
      <div className="youtube">
        <center><iframe className="youtube-iou" width="700" height="500" src="https://www.youtube-nocookie.com/embed/CLa9kTz24hA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
      
      </div>
      <div className="main-align">
        <div className="The-text for-main-eve" data-aos="fade-right">
          We, the team of Rotaract Club of Bangalore B.I.T. have decided the
          theme of the Rotayear 2022-23 to be “Sprint Strong Stags”. We believe
          in standing out as exceptional. The brilliant team we have this year
          has unique talents. Shining like a bright unicorn with the horn as our
          guiding spirit, we would be developing leadership and bravery. With
          optimistic spirits and unity, we wish to prove ourselves to be
          extraordinary. Sticking to roots yet getting known for our
          sharpness,agile,frisky what we mean by our logo, the Deer. We are
          aiming for an amazing Rotayear. As galant and proud as a deer, our
          club is ready for this upcoming joyride of Rotaract.We Aim to be
          Exceptional
        </div>
        <div className=" The-text sub-sub-classname">1.Community Service</div>
        <div className="The-text" data-aos="fade-up">
          We believe in serving the community. The team of RCBIT works in full
          force for the betterment of the society and does the needful to the
          unprivileged.,
        </div>
        <div className=" The-text sub-sub-classname">2.Club Service</div>
        <div className="The-text" data-aos="fade-right">
          With activities on all levels, we focus on club service as With
          activities on all levels, we focus on club service as well. A healthy
          and friendly environment is maintained within the club. Bonding and
          fellowships are important to us.
        </div>
        <div className=" The-text sub-sub-classname" data-aos="fade-up">
          3.International Service
        </div>
        <div className="The-text" data-aos="fade-right">
          Spreading wings and flying with glory is what RCBIT aims for. We
          believe in expanding our boundaries not only in the district but also
          globally. Friendship and collaboration worldwide is what we specially
          take care of in every Rota-Year.
        </div>
        <div className=" The-text sub-sub-classname" data-aos="fade-up">
          3.Professional development
        </div>
        <div className="The-text" data-aos="fade-right">
          Growing with Rotaract is an extraordinary process. Inculcating
          responsibility and pressure management are the two things we
          definitely learn. Every rotaractor plays an essential role in
          this development. Be it building connections in the industry or
          among universities, we focus on overall development of
          rotaractors.
        </div>
      </div>
    </>
  );
}
