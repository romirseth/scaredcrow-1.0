import { useRef, useState } from 'react';
import { tracks } from '../_audio/tracks.js';
import '../AudioPlayer/Player.css';

// import components
import DisplayTrack from './DisplayTrack.js';
import Controls from './Controls.js';
import ProgressBar from './ProgressBar.js';

const AudioPlayer = () => {
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
        <div className="audio-player">
            <div className="inner">
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

                    prevTrackIndex,
                    setPreviousTrack,
                    setPrevTrackIndex,

                    nextTrackIndex,
                    setNextTrack,
                    setNextTrackIndex
                }} />
            </div>
        </div>
    );
};

export default AudioPlayer;