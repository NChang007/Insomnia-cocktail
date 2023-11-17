import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
// pages
import Home from "./pages/Home";
import Cocktails from "./pages/Cocktails";

// components 
import Sidebar from "./components/Sidebar";

//console.log(process.env.BASENAME);

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  //const basename = process.env.BASENAME || "/";

  return (
    <div>
      <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Cocktails />} path="/cocktails" />
            </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);