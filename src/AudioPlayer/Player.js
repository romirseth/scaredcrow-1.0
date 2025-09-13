import React, { useEffect, useState } from "react";
import '../AudioPlayer/Player.css'
import LastNightLive from '../_audio/LastNightLive.mp3';


import {
  IoPlaySkipBackSharp,
  IoPlaySharp,
  IoPauseSharp,
  IoStopSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";

const Player = (props) => {
  const { base64adio } = props;
  const [playing, isPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [duration, setDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState("00:00");

  const handleStop = () => {
    audioFile.pause();
    audioFile.currentTime = 0;
    isPlaying(false);
  };

  const handleSkipBack = () => {
    // const newTime = audioFile.currentTime - 10;
    const newTime = 0;
    audioFile.currentTime = newTime < 0 ? 0 : newTime;
  };

  const handleSkipForward = () => {
    // const newTime = audioFile.currentTime + 10;
    // audioFile.currentTime = newTime > audioFile.duration ? audioFile.duration : newTime;
    const newTime = audioFile.duration;
    audioFile.currentTime = newTime;
  };

  const handlePlayPause = () => {
    if (audioFile) {
      if (playing) {
        audioFile.pause();
      } else {
        audioFile.play();
      }
      isPlaying((pre) => !pre);
    }
  };

  useEffect(() => {
    //if (base64adio) {
    //   const audio = new Audio(`data:audio/x-wav;base64, ${base64adio}`);
      const audio = new Audio(LastNightLive);
      setAudioFile(audio);

      audio.onloadeddata = () => {
        const audioDuration = audio.duration;
        if (typeof audioDuration === "number" && !isNaN(audioDuration)) {
          setDuration(formatTime(audioDuration));
        }
      };
    // }
  }, [base64adio]);

  useEffect(() => {
    if (audioFile) {
      // // Update current time while audio is playing
      audioFile.ontimeupdate = () => {
        const duration = audioFile.duration;
        const currentTime = audioFile.currentTime;
        if (duration === currentTime) {
          isPlaying(false);
          audioFile.currentTime = 0;
          audioFile.pause();
          setCurrentTime(formatTime(audioFile.currentTime));
        } else {
          setCurrentTime(formatTime(currentTime));
        }
      };
    }

    return () => {
      if (audioFile) {
        audioFile.onloadeddata = null; // Cleanup on unmount
        audioFile.ontimeupdate = null; // Cleanup on unmount
      }
    };
  }, [audioFile]);

  return (
    <div>
        <div className="plr-play-time"></div>
        <div className='plr-player-controls'>
            {currentTime}
            <IoPlaySkipBackSharp
                className="plr-skip"
                onClick={handleSkipBack}
            />
            {playing ? (
                <IoPauseSharp
                    onClick={handlePlayPause}
                    className="plr-play"
                />
            ) : (
                <IoPlaySharp
                    onClick={handlePlayPause}
                    className="plr-play"
                />
            )}
            <IoPlaySkipForwardSharp
                className="plr-skip"
                onClick={handleSkipForward}
            />
            {/* <IoStopSharp
                className="cursor-pointer text-green-800 size-6"
                size={25}
                onClick={() => handleStop()}
            /> */}
        </div>
    </div>

  );
};

export default Player;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};