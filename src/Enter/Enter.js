import './Enter.css';
import '../index.css'
import scaredcrow from '../_images/Scaredcrow.png';

const navigateToHome = () => {
  console.log("navigateToHome");
  window.location.href = '/#home';
};

function Enter() {
  return (
    <div className="Enter">
      <header className="Enter-header" style={{backgroundColor: 'black', width: '100%', height: '100%'}}>  
        <img src={scaredcrow} className="Enter-logo" alt="logo" onClick={navigateToHome} style={{pointerEvents: "all"}}/>
        <div className="entersandman lg:text-5xl mb-6 rounded-2xl"  onClick={navigateToHome} style={{pointerEvents: "all"}}>SCAREDCROW</div>
        <div className='come-in lg:text-5xl mb-6'  onClick={navigateToHome} style={{pointerEvents: "all"}}>ENTER</div>
      </header>
    </div>
  );
}

export default Enter;
