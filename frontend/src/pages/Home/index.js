import React from "react";

import HomeComponents from "../../Components/HomeComponents";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <HomeComponents />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
    </>
  );
}

export default Home;
