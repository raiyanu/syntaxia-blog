import { useState, useEffect } from "react";
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
import Login from "./component/Login";
import axios from "axios";
import Register from "./component/Register";
function App() {
  const [data, setData] = useState("not loaded");
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
  useEffect(() => {
    const run = async () => {
      console.log("run\n\n\n\n\n\n");
      document.title = "Syntaxia | Login";
      const res = await axios({
        url: "/api/test",
        method: "GET",
      });
      setData("Got");
      setData(res.data.message);
      console.log("res.ok : ", res.ok);

      if (res.ok) {
        setData("Error: ", res.error.message);
        setData("Error: ", res.data.message);
      }
    };
    run();
  }, []);
  useEffect(() => {}, []);
  return (
    <>
      <div data-theme={`${currentTheme}`} className="wrapper w-full h-full">
        <div className="max-w-[1300px] block mx-auto min-h-[100vh]">
          <Navbar handleThemeChange={handleThemeChange} themes={themes} />
          <h1 className="text-red-600 text-center px-3 rounded-box bg-blue-200 w-fit block mx-auto my-3">
            {data}
          </h1>
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1>2 404 ERROR</h1>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
