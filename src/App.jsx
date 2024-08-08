import { useState } from "react";
import "./App.css";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AsideBar from "./component/AsideBar";
import HomeBody from "./component/HomeBody";
import SubscribePanel from "./component/SubscribePanel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        data-theme="winter"
        className="max-w-[1300px] block mx-auto min-h-[100vh]"
      >
        <Navbar />
        <Hero />
        <HomeBody />
        <SubscribePanel />
        <Footer />
      </div>
    </>
  );
}

export default App;
