import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Enter from './Enter/Enter';
import Home from './Home/Home';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Enter />}/>
        {/* <Route index element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
