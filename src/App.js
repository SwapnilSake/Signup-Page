import React from 'react'
import "./App.css";
import pic from "./images/pic.png";

const Signup = ( ) => {
  return (
          <>
          <section className="signup">
            <div className="container mt-5">
              <div className="signup-content">
                <div className="signup-form">
                  <h2 className="form-title">Create an account</h2>

                  <form className="register-form" id="register-form">
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="zmdi zmdi-account ,aterial-icons-name"></i>
                      </label>
                      <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" required></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="zmdi zmdi-email ,aterial-icons-name"></i>
                      </label>
                      <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" required></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">
                        <i className="zmdi zmdi-phone-in-talk ,aterial-icons-name"></i>
                      </label>
                      <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Mobile Number" required></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">
                        <i className="zmdi zmdi-lock ,aterial-icons-name"></i>
                      </label>
                      <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" required></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="cpassword">
                        <i className="zmdi zmdi-lock ,aterial-icons-name"></i>
                      </label>
                      <input type="cpassword" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password"></input>
                    </div>

                    <button>Create Account</button>
                  </form>
                </div>

                <div className="signup-image">
                  <figure>
                    <img src={pic} alt="pic"></img>
                    <h2>Choose a data range</h2>
                    <p>Lorem Ipsum is simply dummy text of <br></br>the printing and typesetting industry. </p>
                  </figure>
                </div>

                
              </div>
            </div>
          </section>
          </>
  )
}

export default Signup