import { BrowserView, MobileView } from "react-device-detect";
import ScrollToTop from "../ScrollToTop.js";
import './Photo.css';
import '../index.css';
import scaredcrow from '../_images/Scaredcrow.png';
import candledivider from '../_images/candledivider.gif';

function Photo() {
  return (
    <>
    <BrowserView>
      <div className='full-viewport-container'>
          <div className="stars"></div>
          <div className="twinkling"></div> 
          <div className="clouds"></div>

          <div className='main-panel'>
            <img src={scaredcrow} className="home-logo" alt="logo"/>
            <img src={candledivider} style={{marginBottom: '10px', justifySelf: 'center'}} alt="logo"/>
            <div style={{fontFamily: 'PixTimes', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '60%'}}>
              <a href="mailto:scaredcrowband@gmail.com" className='contact-us'>scaredcrowband@gmail com</a>
            </div>
            <img src={candledivider} style={{transform: 'rotate(180deg)', marginTop: '10px', justifySelf: 'center'}} alt="logo"/>
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
        <ScrollToTop />
    </div>
    </MobileView>
    </>
  );
}

export default Photo;