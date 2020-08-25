import React from "react";
import web from "../src/img/2.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Know more about"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
