import { BrowserView, MobileView } from "react-device-detect";
import './Live.css';
import '../index.css';
import Player from '../AudioPlayer/Player.js';
import scaredcrow from '../_images/Scaredcrow.png';
import candledivider from '../_images/candledivider.gif';
import understanding from '../_images/spencer and aiden.JPG';
import guitar from '../_images/Guitar.JPG';
import matt from '../_images/Matt.JPG';
import LastNightLive from '../_audio/LastNightLive.mp3';

function Live() {
  return (
    <>
    <BrowserView>
      <div className='lv-full-viewport-container'>
          <div className="stars"></div>
          <div className="twinkling"></div> 
          <div className="clouds"></div>

          <div className='lv-main-panel'>
            <img src={scaredcrow} className="lv-home-logo" alt="logo"/>
            {/* <img src={candledivider} style={{marginBottom: '10px', justifySelf: 'center', width: '300px'}} alt="logo"/> */}
            
            <div className="caption">
              <label className="caption-label">Where Did You Sleep Last Night - December 6 2024</label>
            </div>
            <div className="carousel">
                <img className="previous" src={guitar} alt="logo"></img>
                <img className="nowplaying" src={understanding} alt="logo"/>
                <img className="next" src={matt} alt="logo"></img>
            </div>
            {/* <img src={candledivider} style={{transform: 'rotate(180deg)', justifySelf: 'center', width: '300px'}} alt="logo"/> */}

            {/* <div className="progress-bar"></div> */}
            {/* <div className="play-time"></div> */}

            {/* <div>
              <audio controls>
                <source
                  id="audio-player"
                  name="audio-player"
                  src={LastNightLive}
                  type="audio/mp3"
                /> */}
                {/* Fallback content */}
                {/* Your browser does not support the audio element. */}
              {/* </audio>
            </div> */}

            {/* <div className='player-controls'>
                <div className="next-prev">
                  <div className="solid-prev"></div>
                  <div className="solid-prev2"></div>
                </div>
                <button className="solid-play"></button>
                <div className="next-prev">
                  <div className="solid-next"></div>
                  <div className="solid-next"></div>
                </div>
            </div> */}

            <Player />
            
            {/* <img src={candledivider} style={{transform: 'rotate(180deg)', justifySelf: 'center', width: '300px'}} alt="logo"/> */}
            <div style={{fontFamily: 'PixTimes', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '16px', width: '60%'}}>
              <a href="mailto:scaredcrowband@gmail.com" className='lv-contact-us'>scaredcrowband@gmail com</a>
            </div>
          </div>
      </div>
    </BrowserView>
    <MobileView>
    <div className='full-viewport-container-mobile'>
        <div className="stars-mobile"></div>
        <div className="twinkling-mobile"></div> 
        <div className="clouds-mobile"></div>
        <div className='main-panel-mobile'>
          <img src={scaredcrow} className="home-logo-mobile" alt="logo"/>
          <div>
              <img src={candledivider} style={{marginBlock: '5px'}} alt="logo"/>
          </div>
          <div className="email-mobile">
                <a href="mailto:scaredcrowband@gmail.com" className='contact-us-mobile'>scaredcrowband@gmail com</a>
          </div>
          <img src={candledivider} style={{marginLeft: '-25px', transform: 'rotate(180deg)'}} alt="logo"/>
        </div>
    </div>
    </MobileView>
    </>
  );
}

export default Live;