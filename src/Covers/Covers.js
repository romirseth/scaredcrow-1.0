import { useRef, useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { tracks } from './CoverTracks.js';
// import ScrollToTop from '../ScrollToTop.js';
import './Covers.css';
import '../index.css';

// components / resources imports
import DisplayTrack from '../AudioPlayer/DisplayTrack.js';
import Controls from '../AudioPlayer/Controls.js';
import ProgressBar from '../AudioPlayer/ProgressBar.js';
import scaredcrow from '../_images/Scaredcrow.png';

function Covers() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [prevTrackIndex, setPrevTrackIndex] = useState(2);
  const [nextTrackIndex, setNextTrackIndex] = useState(1);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [previousTrack, setPreviousTrack] = useState(tracks[prevTrackIndex]);
  const [nextTrack, setNextTrack] = useState(tracks[nextTrackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const progressBarRef = useRef();
  const audioRef = useRef();

  return (
    <>
    <BrowserView>
      <div className='cv-full-viewport-container'>
          <div className="stars"></div>
          <div className="twinkling"></div> 
          <div className="clouds"></div>

          <div className='cv-main-panel'>
            <img src={scaredcrow} className="cv-home-logo" alt="logo"/>
              <div>
                <DisplayTrack {...{ 
                    currentTrack, 
                    previousTrack, 
                    nextTrack, 
                    audioRef, 
                    setDuration, 
                    progressBarRef 
                }} />
                <ProgressBar {...{ 
                    progressBarRef, 
                    audioRef, 
                    timeProgress, 
                    duration 
                }}/>
                <Controls {...{ 
                    audioRef, 
                    progressBarRef, 
                    duration, 
                    setTimeProgress, 

                    tracks,
                    trackIndex,
                    setTrackIndex,
                    setCurrentTrack,

                    setPreviousTrack,
                    setPrevTrackIndex,
                    setNextTrack,
                    setNextTrackIndex
                }} />
              </div>
          </div>
      </div>
    </BrowserView>
    <MobileView>
    <div className='cv-full-viewport-container-mobile'>
        <div className="stars-mobile"></div>
        <div className="twinkling-mobile"></div> 
        <div className="clouds-mobile"></div>
        <div className='cv-main-panel-mobile'>
          <div>
              <DisplayTrack {...{ 
                  currentTrack, 
                  previousTrack, 
                  nextTrack, 
                  audioRef, 
                  setDuration, 
                  progressBarRef 
              }} />
              <ProgressBar {...{ 
                  progressBarRef, 
                  audioRef, 
                  timeProgress, 
                  duration 
              }}/>
              <Controls {...{ 
                  audioRef, 
                  progressBarRef, 
                  duration, 
                  setTimeProgress, 

                  tracks,
                  trackIndex,
                  setTrackIndex,
                  setCurrentTrack,

                  setPreviousTrack,
                  setPrevTrackIndex,
                  setNextTrack,
                  setNextTrackIndex
              }} />
            </div>
        </div>
    </div>
    </MobileView>
    </>
  );
}

export default Covers;