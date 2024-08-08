import React from "react";
import logo from "./assets/network-search.svg";
import book from "./assets/book-open.svg";
import infoIcon from "./assets/help-circle.svg";
import home from "./assets/home-03.svg";
const MenuItems = () => {
  return (
    <>
      <li>
        <a>
          {" "}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg> */}
          <img src={home} alt="home" className="h-5 w-5" />
          Home
        </a>
      </li>

      <li>
        <details>
          <summary>
            <img src={book} alt="book" className="h-5 w-5" />
            Articles
          </summary>
          <ul className="gap-1">
            <li>
              <a>Latest</a>
            </li>
            <li>
              <a>Tech</a>
            </li>
            <li>
              <a>Non-Tech</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Other</summary>
          <ul>
            <li>
              <a>Github</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>
          <img src={infoIcon} alt="info" className="h-5 w-5" />
          About Us
        </a>
      </li>
    </>
  );
};

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sm:px-5  md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
          >
            <MenuItems />
            {/* <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Categorey</summary>
                <ul className="p-2 w-fit">
                  <li>
                    <a>Tech</a>
                  </li>
                  <li>
                    <a>Non-Tech</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Other</summary>
                <ul className="p-2 w-fit">
                  <li>
                    <a>Tech</a>
                  </li>
                  <li>
                    <a>Non-Tech</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          <img src={logo} alt="logo" className="h-8 w-8" />
          Syntaxia <sub className="text-xs">Blog</sub>{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu lg:menu-horizontal rounded-box ">
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Login</a>
      </div>
    </div>
  );
}
