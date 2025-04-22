import './Home.css';
import '../index.css'
import scaredcrow from '../_images/Scaredcrow.png';
import spotify from '../_images/spotify.png'
import youtube from '../_images/yt.jpg'
import apple from '../_images/apple.png'
import slowcrow from '../_images/slowcrow.png'
import flyingdutchman from '../_audio/FlyingDutchman.wav';

function Home() {
  return (
    <div className='full-viewport-container'>
        <div className='sidebar'>
          <div style={{display: 'grid'}}>
            <a href="https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3D2AB5D348-D651-4E38-A813CED15AA7CDBD/destination:https://open.spotify.com/album/0aHNvDya9FcFIaWMPDrgAw" 
              className='spotify-click'>Spotify
            </a>
            <a href="https://www.youtube.com/@scaredcrowband-nc" 
              className='youtube-click'>Youtube
            </a>
            <a href="https://music.apple.com/us/artist/scaredcrow/1809431092"
              className='apple-click'>Apple
            </a>
          </div>
          {/* <table style={{width: '100%'}}>
            <tbody>
              <tr style={{textAlign: '-webkit-center'}}>
                <td>
                  <a href="https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3D2AB5D348-D651-4E38-A813CED15AA7CDBD/destination:https://open.spotify.com/album/0aHNvDya9FcFIaWMPDrgAw" style={{textDecoration: 'none', color: 'white'}}>
                    <img src={spotify} className="streaming-logo" alt="logo"/>
                  </a>
                  <label className='clickables'>Spotify</label>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.youtube.com/@scaredcrowband-nc" style={{textDecoration: 'none', color: 'white'}}>
                        <img src={youtube} className="youtube-logo" alt="logo"/>
                  </a>
                  <label className='clickables'>Spotify</label>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://music.apple.com/us/artist/scaredcrow/1809431092" style={{textDecoration: 'none', color: 'white'}}>
                    <img src={apple} className="streaming-logo" alt="logo"/>
                  </a>
                  <label className='clickables'>Spotify</label>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>

        <div className='main-panel'>
          <img src={scaredcrow} className="home-logo" alt="logo"/>
          <div>
          <iframe width="80%" height="315"
            src="https://www.youtube.com/embed/Uvwza44H-N0?si=KpQG2GZqoONpz6NJ" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
          </div>
          <br/>
          <br/>
          <a href="mailto:scaredcrowband@gmail.com" className='contact-us'>scaredcrowband@gmail com</a>
        </div>
    </div>
  );
}

export default Home;