import './App.css';
import Navbar from './Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AppMobile from './AppMobile.js';

function App() {
  
  const onPirateClick =(navigate)=>{
    navigate("/")}
  return (
    <>
    <Navbar/>
    
    <div className="Background-Image"></div>
    <Routes>   
       <Route exact path = '/new' element={<AppMobile onPirateClick={onPirateClick}/>}/>
    </Routes>
    </>
    

    
  );
}

export default App;
