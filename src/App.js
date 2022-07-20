import React from "react";
import  NavbarHeader from "./component/navbar/NavbarHeader";
import './App.css';
import Banner from "./component/banner/Banner";
import Skills from "./component/skill/Skills";
import Projects from "./component/projects/Projects";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <div className="App">
   <NavbarHeader />
   <Banner/>
   <Skills/>
    </div>
  );
}

export default App;
