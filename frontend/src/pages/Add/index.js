import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Addpage from "./Form/index";
import {Helmet} from "react-helmet";
function Add() {
  return (
    <>
      <Navbar />
      <Addpage />
      <Helmet>
        <meta charSet="utf-8" />
        <title>App page</title>
      </Helmet>
      <Footer />
    </>
  );
}

export default Add;
