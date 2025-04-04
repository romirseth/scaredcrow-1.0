import './Home.css';
import '../index.css'
import scaredcrow from '../images/Scaredcrow.png';

function Home() {
  return (
    <div className='full-viewport-container'>
        <center>
        <img src={scaredcrow} className="home-logo" alt="logo"/>
        <iframe width="80%" height="350px" src="https://www.youtube.com/embed/3OE7kxuKw8s?si=yu5XeAP4mI29-mvd" title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        </center>
    </div>
  );
}

export default Home;