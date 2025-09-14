import { useRef, useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import ScrollToTop from '../ScrollToTop.js';
import { tracks } from './OriginalTracks.js';
import './Originals.css';
import '../index.css';

// components / resources imports
import DisplayTrack from '../AudioPlayer/DisplayTrack.js';
import Controls from '../AudioPlayer/Controls.js';
import ProgressBar from '../AudioPlayer/ProgressBar.js';
import scaredcrow from '../_images/Scaredcrow.png';

function Originals() {
    const [trackIndex, setTrackIndex] = useState(0);
    const [prevTrackIndex, setPrevTrackIndex] = useState(3);
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
        <div className='og-full-viewport-container'>
            <div className="stars"></div>
            <div className="twinkling"></div> 
            <div className="clouds"></div>

            <div className='og-main-panel'>
              <img src={scaredcrow} className="og-home-logo" alt="logo"/>
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
      <div className='og-full-viewport-container-mobile'>
          <div className="stars"></div>
          <div className="twinkling"></div> 
          <div className="clouds"></div>
          <div className='og-main-panel-mobile'>
            {/* <img src={scaredcrow} className="home-logo-mobile" alt="logo"/> */}
            <div>
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
        <ScrollToTop />
      </div>
      </MobileView>
      </>
    );
}

export default Originals;