import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import {
  Home,
  Events,
  Alumini,
  Donate,
  JobPortal,
  SignIn,
  // Register,
} from "./components/Index";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
