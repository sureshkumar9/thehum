import React from "react";
import './index.css';
import Header from './Component/Header';
// import Slider from './Component/Slider';
import Cardone from './Component/Cardone';
import Feature from "./Component/Feature";
import About from "./Component/About";
import Work from "./Component/Work.js";
import Service from "./Component/Servise.js";
function App() {
  return (
    <div className="App">
     <Header />
     {/* <Slider/> */}
     <Cardone />
     <Feature />
     <About />
     <Work />
     <Service />
    </div>
  );
}

export default App;
