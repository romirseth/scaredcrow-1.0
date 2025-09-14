import React, { useRef, useCallback, useEffect, useState } from "react";
import '../AudioPlayer/Player.css';

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({ 
    audioRef, progressBarRef, duration, setTimeProgress,
    tracks, trackIndex, setTrackIndex, setCurrentTrack,
    setPreviousTrack, setPrevTrackIndex,
    setNextTrack, setNextTrackIndex
 }) => {
    const playAnimationRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const skipForward = () => {
    audioRef.current.currentTime += 15;
    };

    const skipBackward = () => {
    audioRef.current.currentTime -= 15;
    };

    const handlePrevious = () => {
        if(trackIndex === 0) {
            setPrevTrackIndex(tracks.length - 2);
            setPreviousTrack(tracks[tracks.length - 2]);

            setTrackIndex(tracks.length - 1);
            setCurrentTrack(tracks[tracks.length - 1]);

            setNextTrackIndex(0);
            setNextTrack(tracks[0]);
        }
        else if(trackIndex === 1) {
            setPrevTrackIndex(tracks.length - 1);
            setPreviousTrack(tracks[tracks.length - 1]);

            setTrackIndex(0);
            setCurrentTrack(tracks[0]);

            setNextTrackIndex(trackIndex);
            setNextTrack(tracks[trackIndex]);
        }
        else {
            setPrevTrackIndex(trackIndex - 2);
            setPreviousTrack(tracks[trackIndex - 2]);

            setTrackIndex(trackIndex - 1);
            setCurrentTrack(tracks[trackIndex - 1]);

            setNextTrackIndex(trackIndex);
            setNextTrack(tracks[trackIndex]);
        }
    };

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setPrevTrackIndex(tracks.length - 1);
            setPreviousTrack(tracks[tracks.length - 1]);

            setTrackIndex(0);
            setCurrentTrack(tracks[0]);

            setNextTrackIndex(1);
            setNextTrack(tracks[1]);
        } 
        else if(trackIndex === 0) {
            setPrevTrackIndex(0);
            setPreviousTrack(tracks[0]);

            setTrackIndex(trackIndex + 1);
            setCurrentTrack(tracks[trackIndex + 1]);

            setNextTrackIndex(2);
            setNextTrack(tracks[trackIndex + 2]);
        }
        else {
            setPrevTrackIndex(trackIndex);
            setPreviousTrack(tracks[trackIndex]);

            setTrackIndex(trackIndex + 1);
            setCurrentTrack(tracks[trackIndex + 1]);

            if(trackIndex + 2 > tracks.length - 1) {
                setNextTrackIndex(0);
                setNextTrack(tracks[0]);
            }
            else {
                setNextTrackIndex(trackIndex + 2);
                setNextTrack(tracks[trackIndex + 2]);
            }
        }
    };

    const repeat = useCallback(() => {
        if(audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            setTimeProgress(currentTime);
            progressBarRef.current.value = currentTime;
            progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
            );

            playAnimationRef.current = requestAnimationFrame(repeat);
        }

    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    return (
        <div className="plr-player-controls">
            <button onClick={handlePrevious}>
                <IoPlaySkipBackSharp className='plr-skip'/>
            </button>
            {/* <button onClick={skipBackward}>
                <IoPlayBackSharp className='plr-skip'/>
            </button> */}
            <button onClick={togglePlayPause}>
                {isPlaying ? <IoPauseSharp className='plr-play'/> : <IoPlaySharp className='plr-play'/>}
            </button>
            {/* <button onClick={skipForward}>
                <IoPlayForwardSharp className='plr-skip'/>
            </button> */}
            <button onClick={handleNext}>
                <IoPlaySkipForwardSharp className='plr-skip'/>
            </button>
        </div>
    );
};

export default Controls;