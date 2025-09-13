import { BrowserView, MobileView } from "react-device-detect";
import '../AudioPlayer/Player.css';

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    };

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        
        return '00:00';
    };

    return (
        <>
        <BrowserView>
            <div className="plr-progress">
                <span style={{color: 'rgba(171, 170, 255, 1)', fontFamily: 'PixTimes'}}>{formatTime(timeProgress)}</span>
                <input type="range" className="plr-range" 
                    ref={progressBarRef}
                    defaultValue="0"
                    onChange={handleProgressChange}
                />
                <span style={{color: 'rgba(171, 170, 255, 1)', fontFamily: 'PixTimes'}}>{formatTime(duration)}</span>
            </div>
        </BrowserView>
        <MobileView>
            <div className="plr-progress">
                <span style={{color: 'rgba(171, 170, 255, 1)', fontFamily: 'PixTimes'}}>{formatTime(timeProgress)}</span>
                <input type="range" className="plr-range-mobile" 
                    ref={progressBarRef}
                    defaultValue="0"
                    onChange={handleProgressChange}
                />
                <span style={{color: 'rgba(171, 170, 255, 1)', fontFamily: 'PixTimes'}}>{formatTime(duration)}</span>
            </div>
        </MobileView>
        </>

    );
    
};

export default ProgressBar;