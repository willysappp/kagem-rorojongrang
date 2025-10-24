import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoveMessage from "./components/LoveMessage";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import BackgroundHearts from "./components/BackgroundHearts";
import BackgroundMusic from "./components/BackgroundMusic";
import AskOut from "./components/AskOut";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LoveMessage />
      <Gallery />
      <Footer />
      <BackgroundHearts />
      <BackgroundMusic />
      <AskOut />
    </div>
  );
}
