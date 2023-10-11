import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import AppMobile from './AppMobile';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
//import AppMobile from './AppMobile';
import reportWebVitals from './reportWebVitals';

export default function router(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<App/>}/>
      <Route path = "pirate" element = {<AppMobile/>}/>

    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
