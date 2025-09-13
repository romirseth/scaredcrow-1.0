import { useRef, useState } from 'react';
import { tracks } from '../_audio/tracks.js';
import '../AudioPlayer/Player.css';

// import components
import DisplayTrack from './DisplayTrack.js';
import Controls from './Controls.js';
import ProgressBar from './ProgressBar.js';

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [previousTrack, setPreviousTrack] = useState(tracks[1]);
  const [nextTrack, setNextTrack] = useState(tracks[2]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const progressBarRef = useRef();
  const audioRef = useRef();

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack {...{ currentTrack, previousTrack, nextTrack, audioRef, setDuration, progressBarRef }} />
        <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }}/>
        <Controls {...{ audioRef, progressBarRef, duration, setTimeProgress }} />
      </div>
    </div>
  );
};

export default AudioPlayer;