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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        data-theme="winter"
        className="max-w-[1300px] block mx-auto min-h-[100vh]"
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomeBody />
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
    </>
  );
}

export default App;
