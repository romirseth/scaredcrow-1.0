import React, { useEffect, useState } from "react";

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({ audioRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    useEffect(() => {
        if (isPlaying) {
        audioRef.current.play();
        } else {
        audioRef.current.pause();
        }
    }, [isPlaying, audioRef]);

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