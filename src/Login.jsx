import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

function Login(props) {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  World of POWER
                  <strong className="brand-name"> Black-World </strong>
                </h1>
                <h2 className="my-3">Sell us your soul</h2>
                <div className="mt-3">
                  <NavLink to="/home" className="btn-get-started">
                    Explore More
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
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
                      <input
                        type="submit"
                        className="fourth mt-3"
                        value="Log In"
                      />
                    </form>

                    {/* Remind Passowrd */}
                    <div id="formFooter">
                      <a className="underlineHover" href="#">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
