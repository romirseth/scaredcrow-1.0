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

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress }) => {
    const playAnimationRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
        );

        playAnimationRef.current = requestAnimationFrame(repeat);
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
            <button>
                <IoPlaySkipBackSharp className='plr-skip'/>
            </button>
            {/* <button>
                <IoPlayBackSharp className='plr-skip'/>
            </button> */}
            <button onClick={togglePlayPause}>
                {isPlaying ? <IoPauseSharp className='plr-play'/> : <IoPlaySharp className='plr-play'/>}
            </button>
            {/* <button>
                <IoPlayForwardSharp className='plr-skip'/>
            </button> */}
            <button>
                <IoPlaySkipForwardSharp className='plr-skip'/>
            </button>
        </div>
    );
};

export default Controls;