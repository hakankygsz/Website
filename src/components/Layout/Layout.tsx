import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="overflow-x-hidden text-neutral-100 bg-black">
      <Header />

      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
