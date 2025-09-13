import { useRef, useState } from 'react';
import { tracks } from '../_audio/tracks.js';

import '../AudioPlayer/Player.css';

// import components
import DisplayTrack from './DisplayTrack.js';
import Controls from './Controls.js';
import ProgressBar from './ProgressBar.js';

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  // reference
  const audioRef = useRef();
  console.log(audioRef);

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
        />
        <Controls audioRef={audioRef} />
        {/* <ProgressBar /> */}
      </div>
    </div>
  );
};

export default AudioPlayer;