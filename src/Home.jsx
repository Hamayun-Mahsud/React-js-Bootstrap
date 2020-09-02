import React from "react";
import web from "../src/img/4.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your status with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
