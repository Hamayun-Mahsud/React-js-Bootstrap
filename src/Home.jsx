import React from "react";
import web from "../src/img/1.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your status with One"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
