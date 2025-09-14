import { BrowserView, MobileView } from "react-device-detect";
import ScrollToTop from "../ScrollToTop.js";
import './About.css';
import '../index.css';
import scaredcrow from '../_images/Scaredcrow.png';
import candledivider from '../_images/candledivider.gif';

function About() {
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
            <label style={{display: 'flex', paddingBottom: '20px', fontFamily: 'PixTimesSoft', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '50%'}}>
                Scaredcrow is a Grunge-Punk-Psychedelic band based in Raleigh, NC started in 2022 by Aiden Wall, Spencer Gagnon, Romir Seth, and Matt Matunis. Since coming together, we have performed live across the Triangle area. We are currently working towards releasing our debut album. Stay Tuned! 
            </label>
            <img src={candledivider} style={{transform: 'rotate(180deg)', justifySelf: 'center'}} alt="logo"/>
            <div style={{fontFamily: 'PixTimes', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '20.5px', width: '60%'}}>
              <a href="mailto:scaredcrowband@gmail.com" className='contact-us'>scaredcrowband@gmail com</a>
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
          <label style={{fontFamily: 'PixTimesSoft', color: 'rgba(171, 170, 255, 1)', alignContent: 'center', fontSize: '17px', width: '50%'}}>
              Scaredcrow is a Grunge-Punk-Psychedelic band based in Raleigh, NC started in 2022 by Aiden Wall, Spencer Gagnon, Romir Seth, and Matt Matunis. Since coming together, we have performed live across the Triangle area. We are currently working towards releasing our debut album. Stay Tuned! 
          </label>
          <img src={candledivider} style={{marginLeft: '-25px', transform: 'rotate(180deg)', paddingBottom: '10px'}} alt="logo"/>
          <div className="ab-email-mobile">
                <a href="mailto:scaredcrowband@gmail.com" className='ab-contact-us-mobile'>scaredcrowband@gmail com</a>
          </div>
        </div>
        <ScrollToTop />
    </div>
    </MobileView>
    </>
  );
}

export default About;