// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainContainer from './components/main-container/MainContainer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
   <Navbar></Navbar> 
   
  <MainContainer />
   
    </div>
  );
}

export default App;
