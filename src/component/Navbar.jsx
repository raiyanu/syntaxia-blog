import React from "react";
import logo from "./assets/network-search.svg";
import book from "./assets/book-open.svg";
import infoIcon from "./assets/help-circle.svg";
import home from "./assets/home-03.svg";
import { NavLink } from "react-router-dom";

export const NavigationLink = ({ IT }) => {
  return (
    <NavLink
      to={`${IT.url}`}
      className={({ isActive, isPending }) =>
        ` btn btn-ghost btn-sm  flex items-center justify-start    ${
          isPending ? "pending" : isActive ? "bg-base-300" : ""
        }`
      }
    >
      {`${IT.name}`}
    </NavLink>
  );
};

const MenuItems = () => {
  return (
    <>
      <li>
        <NavigationLink IT={{ url: "/", name: "Home" }} />
      </li>

      <li>
        <details>
          <summary className="font-semibold">
            <img src={book} alt="book" className="h-5 w-5" />
            Articles
          </summary>
          <ul className="gap-1">
            <li>
              <NavigationLink IT={{ url: "/latest", name: "Latest" }} />
            </li>
            <li>
              <NavigationLink IT={{ url: "/tech", name: "Tech" }} />
            </li>
            <li>
              <NavigationLink IT={{ url: "/non-tech", name: "Non-Tech" }} />
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="font-semibold">Other</summary>
          <ul>
            <li>
              <NavigationLink IT={{ url: "/github", name: "Github" }} />
            </li>
            <li>
              <NavigationLink IT={{ url: "/faqs", name: "FAQs" }} />
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavigationLink IT={{ url: "/about", name: "About Us" }} />
      </li>
      <li>
        <NavigationLink IT={{ url: "/blog", name: "Blog" }} />
      </li>
    </>
  );
};

export default function Navbar({ handleThemeChange, themes }) {
  return (
    <header className="navbar bg-base-100 sm:px-5  md:px-8 ">
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
          Syntaxia <sub className="text-xs">Blog</sub>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu lg:menu-horizontal rounded-box gap-2 shrink">
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <select
          onChange={(e) => handleThemeChange(e)}
          className="select select-bordered w-26 py-0 h-2 text-sm min-h-10 btn pr-7"
        >
          {themes.map((address, key) => (
            <option value={key}>{address}</option>
          ))}
        </select>
        <a className="btn btn-primary">Login</a>
      </div>
    </header>
  );
}
