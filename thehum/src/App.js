import React from "react";
import './index.css';
import Header from './Component/Header';
import Cardone from './Component/Cardone';
import Feature from "./Component/Feature";
import About from "./Component/About";
import Work from "./Component/Work.js";
import Service from "./Component/Servise.js";
import Buy from "./Component/Buy.js";
import News from "./Component/News.js";
import Cardtwo from "./Component/Cardtwo.js";
import Pricetable from "./Component/Pricetable.js";
import Team from "./Component/Team.js";
import Form from "./Component/Form.js";
import Theme from "./Component/Theme.js";
import Footer from "./Component/Footer.js";
import Slider from "./Component/Slider.js";
import Slidertwo from "./Component/Slidertwo";
import Copyright from "./Component/Copyright";

function App() {
  return (
    <div className="App">
     <Header />
     <Slider />
     <Cardone />
     <Feature />
     <About />
     <Work />
     <Service />
     <Buy />
     <News />
     <Cardtwo />
     <Pricetable />
     <Slidertwo />
     <Team />
     <Theme />
     <Form />
     <Footer />
     <Copyright />
    </div>
  );
}

export default App;
