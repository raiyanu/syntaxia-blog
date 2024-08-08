import React from "react";
import heroImg from "./assets/journalpic.jpg";
export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center flex flex-col justify-between ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="stats stats-vertical md:stats-horizontal shadow  bg-opacity-0 ">
          <div className="stat">
            <div className="stat-title text-primary-content">Downloads</div>
            <div className="stat-value text-primary-content">31K</div>
            <div className="stat-desc text-primary-content">
              Jan 1st - Feb 1st
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-primary-content">New Users</div>
            <div className="stat-value text-primary-content">4,200</div>
            <div className="stat-desc text-primary-content">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title text-primary-content">New Registers</div>
            <div className="stat-value text-primary-content">1,200</div>
            <div className="stat-desc text-primary-content">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
