import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './index.css';
import Enter from './Enter/Enter';
import Home from './Home/Home';
import Originals from './Originals/Originals';
import Streaming from './Streaming/Streaming';
import Live from './Live/Live';
import Covers from './Covers/Covers';
import Photos from './PhotoGallery/Photo';
import About from './About/About';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Enter />}/>
        {/* <Route index element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/originals" element={<Originals />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/live" element={<Live />} />
        <Route path="/covers" element={<Covers />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
