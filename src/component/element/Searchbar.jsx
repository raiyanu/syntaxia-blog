import React from "react";

export default function Searchbar() {
  return (
    <div className="join flex mx-auto">
      <div className="join">
        <input
          className="input input-bordered join-item"
          placeholder="Search"
        />
      </div>
      <select className="select select-bordered join-item hidden ">
        <option disabled>Filter</option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </select>
      <button className="btn join-item rounded-r-full">Search</button>
    </div>
  );
}
