import { useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { pictures } from './Pictures.js';
import ScrollToTop from "../ScrollToTop.js";
import './Photo.css';
import '../index.css';

import scaredcrow from '../_images/Scaredcrow.png';

import {
  IoPlayBack,
  IoPlayForward,
} from 'react-icons/io5';

function Photo() {
  const [picIndex, setPicIndex] = useState(0);
  const [prevPicIndex, setPrevPicIndex] = useState(2);
  const [nextPicIndex, setNextPicIndex] = useState(1);
  const [currentPic, setCurrentPic] = useState(pictures[picIndex]);
  const [previousPic, setPreviousPic] = useState(pictures[prevPicIndex]);
  const [nextPic, setNextPic] = useState(pictures[nextPicIndex]);

  const handlePrevious = () => {
      if(picIndex === 0) {
          setPrevPicIndex(pictures.length - 2);
          setPreviousPic(pictures[pictures.length - 2]);

          setPicIndex(pictures.length - 1);
          setCurrentPic(pictures[pictures.length - 1]);

          setNextPicIndex(0)
          setNextPic(pictures[0]);
      }
      else if(picIndex === 1) {
          setPrevPicIndex(pictures.length - 1);
          setPreviousPic(pictures[pictures.length - 1]);

          setPicIndex(0);
          setCurrentPic(pictures[0]);

          setNextPicIndex(1)
          setNextPic(pictures[1]);
      }
      else {
          setPrevPicIndex(picIndex - 2);
          setPreviousPic(pictures[picIndex - 2]);

          setNextPicIndex(picIndex)
          setNextPic(pictures[picIndex]);

          setPicIndex(picIndex - 1);
          setCurrentPic(pictures[picIndex - 1]);
      }
  };

  const handleNext = () => {
      if (picIndex >= pictures.length - 1) {
            setPrevPicIndex(pictures.length - 1);
            setPreviousPic(pictures[pictures.length - 1]);

            setPicIndex(0);
            setCurrentPic(pictures[0]);

            setNextPicIndex(1);
            setNextPic(pictures[1]);
        } 
        else if(picIndex === 0) {
            setPrevPicIndex(0);
            setPreviousPic(pictures[0]);

            setPicIndex(picIndex + 1);
            setCurrentPic(pictures[picIndex + 1]);

            setNextPicIndex(2);
            setNextPic(pictures[picIndex + 2]);
        }
        else {
            setPrevPicIndex(picIndex);
            setPreviousPic(pictures[picIndex]);

            setPicIndex(picIndex + 1);
            setCurrentPic(pictures[picIndex + 1]);

            if(picIndex + 2 > pictures.length - 1) {
                setNextPicIndex(0);
                setNextPic(pictures[0]);
            }
            else {
                setNextPicIndex(picIndex + 2);
                setNextPic(pictures[picIndex + 2]);
            }
        }
  };

  return (
    <>
    <BrowserView>
      <div className='ph-full-viewport-container'>
          <div className="stars"></div>
          <div className="twinkling"></div> 
          <div className="clouds"></div>

          <div className='ph-main-panel'>
            <img src={scaredcrow} className="ph-home-logo" alt="logo"/>
            <div className="ph-caption">
                <p className="ph-track-info">{currentPic.title}</p>
            </div>
            <div className='ph-carousel'>
                <div className="ph-previous-track">
                    <img src={previousPic.thumbnail} alt="audio avatar" />
                </div>
                <div className="ph-nowplaying">
                    <img src={currentPic.thumbnail} alt="audio avatar" />
                </div>
                <div className="ph-next-track">
                    <img src={nextPic.thumbnail} alt="audio avatar" />
                </div>
            </div>
              <div className="ph-player-controls">
                  <button onClick={handlePrevious}>
                      <IoPlayBack className='ph-skip-back'/>
                  </button>
                  <button onClick={handleNext}>
                      <IoPlayForward className='ph-skip-forward'/>
                  </button>
              </div>
          </div>
      </div>
    </BrowserView>
    <MobileView>
    <div className='ph-full-viewport-container-mobile'>
        <div className="stars-mobile"></div>
        <div className="twinkling-mobile"></div> 
        <div className="clouds-mobile"></div>
        <div className='ph-main-panel-mobile'>
          <img src={scaredcrow} className="ph-home-logo-mobile" alt="logo"/>
          <div className="ph-caption-mobile">
              <p className="ph-track-info-mobile">{currentPic.title}</p>
          </div>
          <div className='ph-carousel'>
              <div className="ph-nowplaying-mobile">
                  <img src={currentPic.thumbnail} alt="audio avatar" />
              </div>
          </div>
          <div className="ph-player-controls-mobile">
                <button onClick={handlePrevious}>
                    <IoPlayBack className='ph-skip-back-mobile'/>
                </button>
                <button onClick={handleNext}>
                    <IoPlayForward className='ph-skip-forward-mobile'/>
                </button>
          </div>
        </div>
        <ScrollToTop />
    </div>
    </MobileView>
    </>
  );
}

export default Photo;