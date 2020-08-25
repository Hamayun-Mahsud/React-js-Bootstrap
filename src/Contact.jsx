import React from "react";

const Contact = () => {
  return (
    <>
      <div className="my-3">
        <h1 className="text-center contact"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="form-group">
                <label for="ValidationDefault01">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  required
                />
              </div>
              <div class="form-group">
                <label for="ValidationDefault02">Phone</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Comment</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button class="btn btn-outline-primary mt-2" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
