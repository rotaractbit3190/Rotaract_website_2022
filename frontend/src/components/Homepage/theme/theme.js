import React, { useEffect } from "react";
import "./theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Theme() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const player = new window.YT.Player("youtubePlayer", {
      videoId: "tSFRkj94Tcw",
      events: {
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.seekTo(0);
          }
        },
      },
    });

    // Pause the video on component unmount
    return () => {
      player.stopVideo();
    };
  }, []);

  // Function to start the video when the play button is clicked
  const startVideo = () => {
    const player = new window.YT.Player("youtubePlayer");
    player.playVideo();
  };

  return (
    <>
      <div className="main-one">Theme for the year 2023-2024</div>
      <div className="sub-text" data-aos="slide-up">Unveiling Horizons</div>
      <div className="youtube">
        <center>
          <div
            id="youtubePlayer"
            className="youtube-iou"
            style={{
              width: "700px",
              height: "500px",
              borderRadius: '35px',
              overflow: 'hidden',
            }}
            onClick={startVideo}
          ></div>
        </center>
      </div>
      <div className="main-align">
        <div className="The-text for-main-eve" data-aos="fade-right">
          We, the team of Rotaract Club of Bangalore Institute of Technology. have decided the
          theme of the Rotayear 2023-24 to be “Unveiling Horizons”. In adopting the theme "Unveiling Horizons," 
          we embark on a journey that symbolizes the vast and limitless potential lying before us. 
          At the heart of this theme lies our collective commitment to exploration, growth, and the pursuit of endless possibilities. 
          As a club, our overarching goal for the upcoming year is to cultivate an environment that 
          encourages the expansion of knowledge, challenges us to step boldly beyond our comfort zones, and 
          empowers us to break through barriers. Just as the eagle unveils new horizons with 
          each majestic flight, so too do we envision a year filled with discoveries, achievements, and growth. 
          Together, as a united and spirited community, we aim to spread our wings and soar to 
          unprecedented heights, leaving an indelible mark on our shared path of service, leadership, and positive change.
        </div>
        <div className=" The-Headtext sub-sub-classname">1. Community Service</div>
        <div className="The-text" data-aos="fade-up">
          We believe in serving the community. The team of RCBIT works in full
          force for the betterment of the society and does the needful to the
          unprivileged.,
        </div>
        <div className=" The-Headtext sub-sub-classname">2. Club Service</div>
        <div className="The-text" data-aos="fade-right">
          With activities on all levels, we focus on club service as With
          activities on all levels, we focus on club service as well. A healthy
          and friendly environment is maintained within the club. Bonding and
          fellowships are important to us.
        </div>
        <div className=" The-Headtext sub-sub-classname" data-aos="fade-up">
          3. International Service
        </div>
        <div className="The-text" data-aos="fade-right">
          Spreading wings and flying with glory is what RCBIT aims for. We
          believe in expanding our boundaries not only in the district but also
          globally. Friendship and collaboration worldwide is what we specially
          take care of in every Rota-Year.
        </div>
        <div className=" The-Headtext sub-sub-classname" data-aos="fade-up">
          4. Professional Development
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
