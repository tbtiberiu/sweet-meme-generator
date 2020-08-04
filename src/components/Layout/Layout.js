import React from "react";

import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Search />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
