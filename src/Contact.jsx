import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="wrapper">
        <div id="formContent">
          <div className="mt-3">
            <h1 className="text-center contact"> Contact Us </h1>
          </div>
          {/* Contact Form */}
          <form>
            <input
              type="text"
              id="login"
              className="second mt-4"
              name="firstName"
              placeholder="First Name"
            />
            <input
              type="email"
              id="password"
              className="third"
              name="login"
              placeholder="Email"
            />
            <textarea
              type="textarea"
              id="password"
              className="third"
              name="login"
              placeholder="Comment"
            />
            <input type="submit" className="fourth" value="Submit" />
          </form>

          {/* Remind Passowrd */}
          <div id="formFooter">
            <NavLink className="underlineHover" to="/login">
              Log In first
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
