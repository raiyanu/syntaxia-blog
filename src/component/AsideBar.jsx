import React from "react";
import Searchbar from "./element/Searchbar";
import CategoryPanel from "./element/CategoryPanel";
import TopArticle from "./element/TopArticle";

export default function AsideBar() {
  return (
    <div className="flex items-start flex-col max-w-[100%]  px-4  py-8 w-full max-md:min-w-full min-w-[30%] lg:max-w-[30%] ">
      <Searchbar />
      <CategoryPanel />
      <TopArticle />
    </div>
  );
}
