import React, { useEffect } from "react";
import logo from "./assets/network-search.svg";
import book from "./assets/book-open.svg";
import infoIcon from "./assets/help-circle.svg";
import home from "./assets/home-03.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../slices/authSlice";


export const NavigationLink = ({ IT }) => {
  return (
    <NavLink
      to={`${IT.url}`}
      key={IT.name}
      className={({ isActive, isPending }) =>
        ` btn btn-ghost btn-sm  flex items-center justify-start    ${isPending ? "pending" : isActive ? "bg-base-300" : ""
        }`
      }
    >
      {`${IT.name}`}
    </NavLink>
  );
};

const MenuItems = ({ themes, handleThemeChange }) => {
  return (
    <>
      <li key="home">
        <NavigationLink IT={{ url: "/", name: "Home" }} />
      </li>

      <li key="articles">
        <details>
          <summary className="font-semibold">
            <img src={book} alt="book" className="h-5 w-5" />
            Articlesx
          </summary>
          <ul className="gap-1">
            <li key="latest">
              <NavigationLink IT={{ url: "/latest", name: "Latest" }} />
            </li>
            <li key="tech">
              <NavigationLink IT={{ url: "/tech", name: "Tech" }} />
            </li>
            <li key="non-tech">
              <NavigationLink IT={{ url: "/non-tech", name: "Non-Tech" }} />
            </li>
          </ul>
        </details>
      </li>
      <li key="other">
        <details>
          <summary className="font-semibold">Other</summary>
          <ul>
            <li key="github">
              <NavigationLink IT={{ url: "/github", name: "Github" }} />
            </li>
            <li key="faqs">
              <NavigationLink IT={{ url: "/faqs", name: "FAQs" }} />
            </li>
          </ul>
        </details>
      </li>
      <li key="about">
        <NavigationLink IT={{ url: "/about", name: "About Us" }} />
      </li>
      <li key="blog">
        <NavigationLink IT={{ url: "/blog", name: "Blog" }} />
      </li>
      <li key="themeSelector" className="hidden max-lg:flex">
        <select
          onChange={(e) => handleThemeChange(e)}
          className="select select-bordered w-26 py-0 h-2 text-sm min-h-10 btn pr-7"
        >
          {themes.map((address, key) => (
            <option value={key} key={`${address}-${key}`}>
              {address == "night" ? "night(Default)" : address}
            </option>
          ))}
        </select>
      </li>
    </>
  );
};

export default function Navbar({ handleThemeChange, themes }) {

  const state = useSelector((state) => state);
  console.log("userinfo in login page:", JSON.parse(localStorage.getItem("userInfo")));
  const loggedIn = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).loggedIn : state.auth.loggedIn;
  const dispatch = useDispatch();

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
            <MenuItems themes={themes} handleThemeChange={handleThemeChange} />
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
        <NavLink className="btn btn-ghost text-xl" to={"/"}>
          <img src={logo} alt="logo" className="h-8 w-8" />
          Syntaxia <sub className="text-xs">Blog</sub>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu lg:menu-horizontal rounded-box gap-2 shrink">
          <MenuItems themes={themes} handleThemeChange={handleThemeChange} />
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <select
          onChange={(e) => handleThemeChange(e)}
          className="select select-bordered w-26 py-0 h-2 text-sm min-h-10 btn pr-7 hidden lg:flex"
        >
          {themes.map((address, key) => (
            <option value={key} key={`${address}-${key}`}>
              {address == "night" ? "night(Default)" : address}
            </option>
          ))}
        </select>
        {(!loggedIn && <NavLink
          to={`/login`}
          className={({ isActive, isPending }) =>
            `btn btn-primary ${isPending ? "opacity-15" : isActive ? "hidden" : ""
            }`
          }
        >
          LOGIN {state.auth.loading ? "..." : ""}
        </NavLink>)}
        <button onClick={() => {
          console.log(state.auth);
        }}>state</button>


        {(loggedIn && <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-8 lg:w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 lg:w-52 p-2 shadow">
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><a>Settings</a></li>
            <li onClick={() => {
              dispatch(logout());
            }} ><a>Logout</a></li>
          </ul>
        </div>)}
      </div>
    </header>
  );
}
