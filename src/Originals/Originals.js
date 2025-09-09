import { BrowserView, MobileView, isMobile } from "react-device-detect";
import './Originals.css';
import '../index.css';
import scaredcrow from '../_images/Scaredcrow.png';
import candledivider from '../_images/candledivider.gif';

function Originals() {
  return (
    <>
    <BrowserView>
      <div className='og-full-viewport-container'>
          <div className="stars"></div>
          <div className="twinkling"></div> 
          <div className="clouds"></div>

          <div className='og-main-panel'>
            <img src={scaredcrow} className="home-logo" alt="logo"/>
            <img src={candledivider} style={{marginBottom: '10px', justifySelf: 'center'}} alt="logo"/>
            
            <div>
              <iframe width="40%" height="275"
                src="https://www.youtube.com/embed/Uvwza44H-N0?si=KpQG2GZqoONpz6NJ" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>

            <div style={{fontFamily: 'PixTimes', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '60%', marginTop: '20px'}}>
              <a href="mailto:scaredcrowband@gmail.com" className='og-contact-us'>scaredcrowband@gmail com</a>
            </div>
            <img src={candledivider} style={{transform: 'rotate(180deg)', marginTop: '10px', justifySelf: 'center'}} alt="logo"/>
          </div>
      </div>
    </BrowserView>
    <MobileView>
    <div className='og-full-viewport-container-mobile'>
        <div className="stars-mobile"></div>
        <div className="twinkling-mobile"></div> 
        <div className="clouds-mobile"></div>
        <div className='og-main-panel-mobile'>
          <img src={scaredcrow} className="og-home-logo-mobile" alt="logo"/>
          <div>
              <img src={candledivider} style={{marginBlock: '5px'}} alt="logo"/>
          </div>

          <div>
            <iframe width="70%" height="300"
              src="https://www.youtube.com/embed/Uvwza44H-N0?si=KpQG2GZqoONpz6NJ" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>


          <div className="og-email-mobile">
                <a href="mailto:scaredcrowband@gmail.com" className='og-contact-us-mobile'>scaredcrowband@gmail com</a>
          </div>
          <img src={candledivider} style={{marginLeft: '-25px', transform: 'rotate(180deg)'}} alt="logo"/>
        </div>
    </div>
    </MobileView>
    </>
  );
}

export default Originals;