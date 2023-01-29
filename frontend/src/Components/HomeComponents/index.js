import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Solutions from "./Solutions";
import Practice from "./Practice";
import Public from "./Public";
import Reliable from "./Reliable";

function HomeComponents() {
  return (
    <>
      <Navbar />
      <Public />
      <Practice />
      <Reliable/>
      <Solutions/>
      <Footer />
    </>
  );
}

export default HomeComponents;
