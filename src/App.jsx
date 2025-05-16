import React from "react";
import "./App.css";
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';
import Process from './Components/process/Process';
import Solutions from './Components/solutions/Solutions';
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import EclipseBackground from "./Components/backgorundEclipse/EclipseBackGround";
import Footer from "./Components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <EclipseBackground />
        <Hero />
        <About />
        <Solutions />
       
        <Contact />
       <Footer />
       

    </div>
  );
}

export default App;
