import React,{useState} from "react";
import ThemeContext from "../src/context/ThemeContext"
import Header from "../src/components/Header"
import HeroSection from "../src/components/HeroSection";


function App() {
  const themeHook=useState("light");
  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
