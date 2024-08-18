import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
// Components
import App from "./App.jsx";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AsideBar from "./component/AsideBar";
import HomeBody from "./component/HomeBody";
import SubscribePanel from "./component/SubscribePanel";
import Blog from "./component/Blog";
import Carousel from "./component/Carousel";
import Login from "./component/Login";
import Register from "./component/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <>
            <Hero />
            <HomeBody />
            <Carousel />
            <SubscribePanel />
          </>
        ),
      },
      {
        path: "login",
        index: true,
        element: <Login />,
        // You can add loaders, action handlers, etc., here if needed
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <h1>404 ERROR</h1>,
      },
    ],
  },
]);
{
  /* <Routes>
  <Route
    path="/"
    element={
      <>
        <Hero />
        <HomeBody />
        <Carousel />
        <SubscribePanel />
      </>
    }
  />
  <Route path="/blog" element={<Blog />} />
  <Route path="/about" element={<AsideBar />} />
  <Route path="/contact" element={<SubscribePanel />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="*" element={<h1>2 404 ERROR</h1>} />
</Routes>; */
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
