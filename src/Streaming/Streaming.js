import { BrowserView, MobileView } from "react-device-detect";
import './Streaming.css';
import '../index.css';
import scaredcrow from '../_images/Scaredcrow.png';
import candledivider from '../_images/candledivider.gif';

function Streaming() {
  return (
    <>
    <BrowserView>
      <div className='str-full-viewport-container'>
          <div className="stars"></div>
          <div className="twinkling"></div> 
          <div className="clouds"></div>

          <div className='str-main-panel'>
            <img src={scaredcrow} className="str-home-logo" alt="logo"/>
            <img src={candledivider} style={{marginBottom: '10px', justifySelf: 'center'}} alt="logo"/>

            <div>
              <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '50px', marginBottom: '70px'}}>
                <a href="https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3D2AB5D348-D651-4E38-A813CED15AA7CDBD/destination:https://open.spotify.com/album/0aHNvDya9FcFIaWMPDrgAw" 
                  className='str-spotify-click'>Spotify
                </a>
                <a href="https://www.youtube.com/@scaredcrowband-nc" 
                  className='str-youtube-click'>Youtube
                </a>
                <a href="https://music.apple.com/us/artist/scaredcrow/1809431092"
                  className='str-apple-click'>Apple
                </a>
                </div>
            </div>
            <img src={candledivider} style={{transform: 'rotate(180deg)', marginTop: '10px', justifySelf: 'center'}} alt="logo"/>
            <div style={{fontFamily: 'PixTimes', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '60%'}}>
              <a href="mailto:scaredcrowband@gmail.com" className='contact-us'>scaredcrowband@gmail com</a>
            </div>
          </div>
      </div>
    </BrowserView>
    <MobileView>
    <div className='str-full-viewport-container-mobile'>
        <div className="stars-mobile"></div>
        <div className="twinkling-mobile"></div> 
        <div className="clouds-mobile"></div>
        <div className='str-main-panel-mobile'>
          <img src={scaredcrow} className="home-logo-mobile" alt="logo"/>
          <div>
              <img src={candledivider} style={{marginBlock: '0px'}} alt="logo"/>
          </div>
          
          <div>
              <div className="str-container">
                <label href="https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3D2AB5D348-D651-4E38-A813CED15AA7CDBD/destination:https://open.spotify.com/album/0aHNvDya9FcFIaWMPDrgAw" 
                  className='str-spotify-click-mobile'>Spotify
                </label>
                <label href="https://www.youtube.com/@scaredcrowband-nc" 
                  className='str-youtube-click-mobile'>Youtube
                </label>
                <label href="https://music.apple.com/us/artist/scaredcrow/1809431092"
                  className='str-apple-click-mobile'>Apple
                </label>
                </div>
            </div>
          <img src={candledivider} style={{marginLeft: '-25px', transform: 'rotate(180deg)'}} alt="logo"/>
          <div className="email-mobile" style={{ marginTop: '20px'}}>
                <a href="mailto:scaredcrowband@gmail.com" className='str-contact-us-mobile'>scaredcrowband@gmail com</a>
          </div>
        </div>
    </div>
    </MobileView>
    </>
  );
}

export default Streaming;