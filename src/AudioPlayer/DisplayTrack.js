import { BsMusicNoteBeamed } from 'react-icons/bs';

const DisplayTrack = ({ currentTrack, audioRef }) => {
console.log("Current Track :>> " , currentTrack);
  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} />
      <div className="audio-info">
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
        <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;