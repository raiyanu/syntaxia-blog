import React, { useEffect } from "react";
import AsideBar from "./AsideBar";
import Article from "./Article";

export default function HomeBody() {
  useEffect(() => {
    document.title = "Syntaxia | Home";
  }, []);
  return (
    <>
      <div className="flex items-stretch justify-between flex-wrap">
        <Article />
        <AsideBar />
      </div>
    </>
  );
}
