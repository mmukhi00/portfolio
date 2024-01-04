import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Navbar,
  Tech,
  Works,
  Contact,
  Experience,
  Feedbacks,
  Hero,
} from "./components";
import { StarsCanvas } from "./components/canvas";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-hero-pattern bg-cover 
      bg-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Tech />
        <Experience />
        {/* <Feedbacks />  */}

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
