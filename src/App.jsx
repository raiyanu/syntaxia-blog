import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  const [data, setData] = useState("not loaded");

  const [currentTheme, setCurrentTheme] = useState("forest");
  const handleThemeChange = (e) => {
    console.log(e.target.value);
    setCurrentTheme((z) => themes[e.target.value]);
  };
  useEffect(() => {
    const run = async () => {
      console.log("run\n\n\n\n\n\n");
      const res = await axios({
        url: "/api/test",
        method: "GET",
      });
      setData("Got");
      setData(res.data.message);
      console.log("res.ok : ", res.ok);

      if (res.ok) {
        setData("failed");
        setData("Error: ", res.error.message);
        setData("Error: ", res.data.message);
      }
    };
    run();
  }, []);
  useEffect(() => { }, []);
  return (
    <>
      <div data-theme={`${currentTheme}`} className="wrapper w-full h-full">
        <div className="max-w-[1300px] block mx-auto min-h-[100vh]">
          <Navbar handleThemeChange={handleThemeChange} themes={themes} />
          {data !== "Server starting... wait for 50 seconds" && (
            // <h1 className="text-red-600 text-center px-3 rounded-box bg-blue-200 w-fit block mx-auto my-3">
            //   {data}
            // </h1>
            null
          )}
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
const themes = [
  "forest",
  "halloween",
  "garden",
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
