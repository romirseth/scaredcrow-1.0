import { BrowserView, MobileView } from "react-device-detect";
import ScrollToTop from "../ScrollToTop.js";
import './Home.css';
import './Home-Mobile.css'
import '../index.css'
import scaredcrow from '../_images/Scaredcrow.png';
import crow from '../_images/bird_anim_01.gif';
import duck from '../_images/dancing-duck.gif';
import spotifygif from '../_images/spotifydrawing.gif';
import smash from '../_images/rock1.gif';
import shred from '../_images/rock2.gif';
import camera from '../_images/picture-photo.gif';
import candledivider from '../_images/candledivider.gif';

const navigateToOriginals = () => {
  console.log("navigateToOriginals");
  window.location.href = '/#originals';
};

const navigateToStreaming = () => {
  console.log("navigateToStreaming");
  window.location.href = '/#streaming';
};

const navigateToLive = () => {
  console.log("navigateToLive");
  window.location.href = '/#live';
};

const navigateToCovers = () => {
  console.log("navigateToCovers");
  window.location.href = '/#covers';
};

const navigateToPhotos= () => {
  console.log("navigateToPhotos");
  window.location.href = '/#photos';
};

const navigateToAbout = () => {
  console.log("navigateToAbout");
  window.location.href = '/#about';
};

function Home() {
  return (
    <>
    <BrowserView>
      <div className='full-viewport-container'>
          <div className="stars"></div>
          <div className="twinkling"></div> 
          <div className="clouds"></div>

          <div className='main-panel'>
            <img src={scaredcrow} className="home-logo" alt="logo"/>
            <div style={{display: 'inline-block'}}>
              <img src={candledivider} style={{marginBottom: '0px', justifySelf: 'center'}} alt="logo"/>
              {/* <label style={{fontFamily: 'PixTimesSoft', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '50%'}}>
                Scaredcrow is a Grunge-Punk-Psychedelic band from Raleigh, NC started in 2022 by Aiden Wall, Spencer Gagnon, Romir Seth, and Matt Matunis. We've come a long way from the garage, performing live across the Triangle area. We are currently working towards releasing our debut album. Stay Tuned! 
              </label> */}
            </div>
            <div className='main-panel-grid'>
              <div className="btns-container">
                <div onClick={navigateToOriginals} className="main-icons">
                  <img src={crow} className="retro-logos" alt="logo"/>
                  <label className='retro-label'>Originals</label>
                </div>
                <div onClick={navigateToStreaming} className="main-icons">
                  <img src={spotifygif} className="retro-logos" alt="logo"/>
                  <label className='retro-label'>Streaming</label>
                </div>
                <div onClick={navigateToLive} className="main-icons">
                  <img src={smash} className="retro-logos" alt="logo"/>
                  <label className='retro-label'>Live Performances</label>
                </div>
                <div onClick={navigateToCovers} className="main-icons">
                  <img src={shred} className="retro-logos" alt="logo"/>
                  <label className='retro-label'>Covers</label>
                </div>
                <div onClick={navigateToPhotos} className="main-icons">
                  <img src={camera} className="retro-logos" alt="logo"/>
                  <label className='retro-label'>Photo Gallery</label>
                </div>
                <div onClick={navigateToAbout} className="main-icons">
                  <img src={duck} className="retro-logo-duck" alt="logo"/>
                  <label className='retro-label' style={{marginBottom: '10px'}}>Get to know us!</label>
                </div>
              </div>
              
            </div>
            <div style={{display: 'inline-block'}}>
              <img src={candledivider} style={{transform: 'rotate(180deg)', marginTop: '10px', justifySelf: 'center'}} alt="logo"/>
              <div style={{fontFamily: 'PixTimes', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '60%', marginTop: '20px'}}>
                {/* <label>Contact Us: </label> */}
                <a href="mailto:scaredcrowband@gmail.com" className='contact-us'>scaredcrowband@gmail com</a>
              </div>
            </div>
          </div>
      </div>
    </BrowserView>
    <MobileView>
    <div className='hm-full-viewport-container-mobile'>
        <div className="stars-mobile-home"></div>
        <div className="twinkling-mobile-home"></div> 
        <div className="clouds-mobile-home"></div>
        <div className='hm-main-panel-mobile'>
          <img src={scaredcrow} className="hm-home-logo-mobile" alt="logo"/>
          <div>
              <img src={candledivider} style={{marginBlock: '5px'}} alt="logo"/>
          </div>
          <div className='hm-retro-container-mobile' onClick={navigateToOriginals}>
            <img src={crow} className="hm-retro-logos-mobile" alt="logo"/>
            <label className='hm-retro-label-mobile'>Originals</label>
          </div>
          <div className='hm-retro-container-mobile' onClick={navigateToStreaming}>
            <img src={spotifygif} className="hm-retro-logos-mobile" alt="logo"/>
            <label className='hm-retro-label-mobile'>Streaming</label>
          </div>
          <div className='hm-retro-container-mobile' onClick={navigateToLive}>
            <img src={smash} className="hm-retro-logos-mobile" alt="logo"/>
            <label className='hm-retro-label-mobile'>Live</label>
          </div>
          <div className='hm-retro-container-mobile' onClick={navigateToCovers}>
            <img src={shred} className="hm-retro-logos-mobile" alt="logo"/>
            <label className='hm-retro-label-mobile'>Covers</label>
          </div>
          <div className='hm-retro-container-mobile' onClick={navigateToPhotos}>
            <img src={camera} className="hm-retro-logos-mobile" alt="logo"/>
            <label className='hm-retro-label-mobile'>Photo Gallery</label>
          </div>
          <div className='hm-retro-container-mobile' onClick={navigateToAbout}>
            <img src={duck} className="hm-retro-logos-mobile" alt="logo"/>
            <label className='hm-retro-label-mobile'>Get to know us!</label>
          </div>
          
          <img src={candledivider} style={{marginLeft: '-25px', transform: 'rotate(180deg)'}} alt="logo"/>
          <div className="hm-email-mobile">
                <a href="mailto:scaredcrowband@gmail.com" className='hm-contact-us-mobile'>scaredcrowband@gmail com</a>
          </div>
        </div>
        <ScrollToTop />
    </div>
    </MobileView>
    </>
  );
}

export default Home;