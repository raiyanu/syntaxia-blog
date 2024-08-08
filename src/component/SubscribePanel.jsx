import React from "react";

export default function SubscribePanel() {
  return (
    <div className="hero bg-base-200 min-h-screen w-full">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-5xl font-bold">Subscribe To Our Newsletter</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="join max-w-full">
          <input
            className="input input-bordered join-item max-w-[70%]"
            placeholder="Email..."
          />
          <button className="btn join-item rounded-r-full max-w-[30%]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
