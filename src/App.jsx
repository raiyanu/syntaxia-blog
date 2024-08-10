import { useState } from "react";
import "./App.css";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AsideBar from "./component/AsideBar";
import HomeBody from "./component/HomeBody";
import SubscribePanel from "./component/SubscribePanel";
import { Route, Routes } from "react-router-dom";
import Blog from "./component/Blog";
import Carousel from "./component/Carousel";

function App() {
  const themes = [
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const [currentTheme, setCurrentTheme] = useState("winter");
  const handleThemeChange = (e) => {
    console.log(e.target.value);
    setCurrentTheme((z) => themes[e.target.value]);
  };

  return (
    <>
      <div data-theme={`${currentTheme}`} className="wrapper w-full h-full">
        <div className="max-w-[1300px] block mx-auto min-h-[100vh]">
          <Navbar handleThemeChange={handleThemeChange} themes={themes} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <HomeBody />
                  <Carousel />
                  <SubscribePanel />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AsideBar />} />
            <Route path="/contact" element={<SubscribePanel />} />
            <Route path="*" element={<h1>2 404 ERROR</h1>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

// data-theme="winter"
// data-theme="dark"
// data-theme="light"
// data-theme="bumblebee"
// data-theme="emerald"
// data-theme="corporate"
// data-theme="synthwave"
// data-theme="retro"
// data-theme="cyberpunk"
// data-theme="valentine"
// data-theme="halloween"
// data-theme="garden"
// data-theme="forest"
// data-theme="aqua"
// data-theme="lofi"
// data-theme="pastel"
// data-theme="fantasy"
// data-theme="wireframe"
// data-theme="black"
// data-theme="luxury"
// data-theme="dracula"
// data-theme="cmyk"
// data-theme="autumn"
// data-theme="business"
// data-theme="acid"
// data-theme="lemonade"
// data-theme="night"
// data-theme="coffee"
// data-theme="winter"
// data-theme="dim"
// data-theme="nord"
// data-theme="sunset"
