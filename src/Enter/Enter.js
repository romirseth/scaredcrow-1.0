import './Enter.css';
import '../index.css'
import scaredcrow from '../images/Scaredcrow.png';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: 'black', width: '100%', height: '100%'}}>  
      <img src={scaredcrow} className="App-logo" alt="logo"/>
        <div className="entersandman lg:text-5xl mb-6 rounded-2xl">SCAREDCROW</div>
        <div className='come-in lg:text-5xl mb-6'>ENTER</div>
      </header>
    </div>
  );
}

export default App;
