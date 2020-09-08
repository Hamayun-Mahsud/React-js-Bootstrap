import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="wrapper">
        <div id="formContent">
          <div className="mt-4">
            <h1 className="text-center contact"> Log In </h1>
          </div>
          {/* Login Form */}
          <form>
            <input
              type="text"
              id="login"
              className="second mt-4"
              name="login"
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              className="third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fourth mt-3" value="Log In" />
          </form>

          {/* Remind Passowrd */}
          <div id="formFooter">
            <NavLink className="underlineHover" to="/">
              Forgot Password?
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
