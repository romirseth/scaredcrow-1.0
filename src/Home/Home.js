import { BrowserView, MobileView, isMobile } from "react-device-detect";
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
import spookydivider from '../_images/spookydivider.gif';
import candledivider from '../_images/candledivider.gif';
import spotify from '../_images/spotify.png'
import youtube from '../_images/yt.jpg'
import apple from '../_images/apple.png'
import slowcrow from '../_images/slowcrow.png'
import flyingdutchman from '../_audio/FlyingDutchman.wav';

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
            <div style={{display: 'flex'}}>
              <img src={candledivider} style={{marginBottom: '10px', justifySelf: 'left'}} alt="logo"/>
              <label style={{fontFamily: 'PixTimesSoft', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '50%'}}>
                Scaredcrow is a Grunge-Punk-Psychedelic band based in Raleigh, NC started in 2022 by Aiden Wall, Spencer Gagnon, Romir Seth, and Matt Matunis. Since coming together, we have performed live across the Triangle area. We are currently taking our next step and working towards releasing our debut album. Stay Tuned! 
              </label>
            </div>
            <div className='main-panel-grid'>
              <table style={{marginBlock: '15px'}}>
                <thead></thead>
                <tbody>
                  <tr>
                    <td className='retro-nav-border'>
                      <img src={crow} className="retro-logos" alt="logo"/>
                    </td>
                    <td className='retro-nav-border'>
                      <img src={spotifygif} className="retro-logos" alt="logo" style={{marginTop: '20px'}}/>
                    </td>
                    <td className='retro-nav-border'>
                      <img src={smash} className="retro-logos" alt="logo"/>
                    </td>
                    <td className='retro-nav-border'>
                      <img src={shred} className="retro-logo-shred" alt="logo"/>
                    </td>
                    <td className='retro-nav-border'>
                      <img src={camera} className="retro-logo-camera" alt="logo" style={{marginTop: '40px'}}/>
                    </td>
                    <td className='retro-nav-border'>
                      <img src={duck} className="retro-logo-duck" alt="logo"/>
                    </td>
                  </tr>
                  <tr>
                    <td className='retro-label-border'><label className='retro-label'>Originals</label></td>
                    <td className='retro-label-border'><label className='retro-label'>Streaming</label></td>
                    <td className='retro-label-border'><label className='retro-label'>Live Performances</label></td>
                    <td className='retro-label-border'><label className='retro-label'>Covers</label></td>
                    <td className='retro-label-border'><label className='retro-label'>Photo Gallery</label></td>
                    <td className='retro-label-border'><label className='retro-label'>Get to know us!</label></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{display: 'flex'}}>
              <div style={{fontFamily: 'PixTimes', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '60%'}}>
                <label>Contact Us: </label>
                <a href="mailto:scaredcrowband@gmail.com" className='contact-us'>scaredcrowband@gmail com</a>
              </div>
              <img src={candledivider} style={{transform: 'rotate(180deg)', marginTop: '10px', justifySelf: 'right'}} alt="logo"/>
            </div>

            {/* <div>
              <iframe width="80%" height="315"
                src="https://www.youtube.com/embed/Uvwza44H-N0?si=KpQG2GZqoONpz6NJ" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div> */}

          </div>
      </div>
    </BrowserView>
    <MobileView>
    <div className='full-viewport-container-mobile'>
        <div className="stars-mobile-home"></div>
        <div className="twinkling-mobile-home"></div> 
        <div className="clouds-mobile-home"></div>
        <div className='main-panel-mobile'>
          <img src={scaredcrow} className="home-logo-mobile" alt="logo"/>
          <div>
              <img src={candledivider} style={{marginBlock: '5px'}} alt="logo"/>
          </div>
          <div className='retro-container-mobile'>
            <img src={crow} className="retro-logos-mobile" alt="logo"/>
            <label className='retro-label-mobile'>Originals</label>
          </div>
          <div className='retro-container-mobile'>
            <img src={spotifygif} className="retro-logos-mobile" alt="logo"/>
            <label className='retro-label-mobile'>Streaming</label>
          </div>
          <div className='retro-container-mobile'>
            <img src={smash} className="retro-logos-mobile" alt="logo"/>
            <label className='retro-label-mobile'>Live</label>
          </div>
          <div className='retro-container-mobile'>
            <img src={shred} className="retro-logos-mobile" alt="logo"/>
            <label className='retro-label-mobile'>Covers</label>
          </div>
          <div className='retro-container-mobile'>
            <img src={camera} className="retro-logos-mobile" alt="logo"/>
            <label className='retro-label-mobile'>Photo Gallery</label>
          </div>
          <div className='retro-container-mobile'>
            <img src={duck} className="retro-logos-mobile" alt="logo"/>
            <label className='retro-label-mobile'>Get to know us!</label>
          </div>
          
          <img src={candledivider} style={{marginLeft: '-25px', transform: 'rotate(180deg)'}} alt="logo"/>
          <div className="email-mobile">
                <a href="mailto:scaredcrowband@gmail.com" className='contact-us-mobile'>scaredcrowband@gmail com</a>
          </div>

        </div>
    </div>
    </MobileView>

    </>
    
  );
}

export default Home;