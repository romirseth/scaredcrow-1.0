import { BrowserView, MobileView } from "react-device-detect";
import { BsMusicNoteBeamed } from 'react-icons/bs';
import '../AudioPlayer/Player.css';

const DisplayTrack = ({ currentTrack, previousTrack, nextTrack, audioRef, setDuration, progressBarRef, }) => {

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
    <>
    <BrowserView>
    <div>
        <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}/>
        <div className="plr-caption">
                <p className="plr-track-info">{currentTrack.title}</p>
                <p className="plr-track-info">{currentTrack.date}</p>
        </div>
        <div className='plr-carousel'>
            <div className="plr-previous-track">
                {previousTrack.thumbnail ? (
                <img src={previousTrack.thumbnail} alt="audio avatar" />
                ) : (
                <div className="icon-wrapper">
                    <span className="audio-icon">
                    <BsMusicNoteBeamed />
                    </span>
                </div>
                )}
            </div>
            <div className="plr-nowplaying">
                {currentTrack.thumbnail ? (
                <img src={currentTrack.thumbnail} alt="audio avatar" />
                ) : (
                <div className="icon-wrapper">
                    <span className="audio-icon">
                    <BsMusicNoteBeamed />
                    </span>
                </div>
                )}
            </div>
            <div className="plr-next-track">
                {nextTrack.thumbnail ? (
                <img src={nextTrack.thumbnail} alt="audio avatar" />
                ) : (
                <div className="icon-wrapper">
                    <span className="audio-icon">
                    <BsMusicNoteBeamed />
                    </span>
                </div>
                )}
            </div>
        </div>
    </div>
    </BrowserView>

    <MobileView>
        <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}/>
        <div className="plr-caption">
                <div style={{marginBottom: '10px'}}>
                    <p className="plr-track-info-mobile">{currentTrack.title}</p>
                    <p className="plr-track-info-mobile">{currentTrack.date}</p>
                </div>
                <div className="plr-nowplaying-mobile">
                    {currentTrack.thumbnail ? (
                    <img src={currentTrack.thumbnail} alt="audio avatar" />
                    ) : (
                    <div className="icon-wrapper">
                        <span className="audio-icon">
                        <BsMusicNoteBeamed />
                        </span>
                    </div>
                    )}
                </div>
        </div>
    </MobileView>
    </>
    );
};
export default DisplayTrack;