import {Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcrumbs";

import {
  baseApiUrl,
  apiVersion,
  clientSecret,
  accessToken,
} from "../config";

 export default class Register extends Component {
//   constructor(props: any) {
//     super(props);
//   }

  handleRegister(e: any) {
    e.preventDefault();
    const loginUrl = `${baseApiUrl}/${apiVersion}/auth/signup`;
    // const formData = new FormData(e);
    const loginData = {
      first_name: e.target.firstname.value,
      last_name: e.target.lastname.value,
      subsnews: e.target.subsnews.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
      mobileNumber: e.target.mobile_number.value,
      terms: e.target.terms.value,
      client_secret: clientSecret,
    };

    if (loginData.password.length <5) {
      alert("Password is too weak!");
      return;
    }
    if (loginData.password !== loginData.confirm_password) {
      alert("Password mismatched!");
      return;
    }
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: accessToken,
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.data && data.data.success) {
          alert(data.data.success.message);
          console.log(data.data.success.message);
          window.location.href = "/login";
        } else if (data.errors) {
          alert(data.errors[0].message);
          console.log(data.errors[0].message);
        }
      });
  }

  render() {
    return (
      <>
        <Breadcrumb currentPage="Register" />
        <div className="register">
          <div className="container">
            <h2>Register Here</h2>
            <div className="login-form-grids">
              <h5>profile information</h5>

              <form onSubmit={this.handleRegister}>
                <div>
                  <input type="text" id="firstname" name="firstname" placeholder="First Name..."  required/>
                  <input type="text" id="lastname" name="lastname" placeholder="Last Name..."required/>
                </div>
                <div className="register-check-box">
                  <div className="check">
                    <label className="checkbox">
                      <input type="checkbox" id="subsnews" name="subsnews" />
                      <i> </i> Subscribe to Newsletter
                    </label>
                  </div>
                </div>
                <h6>Login information</h6>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required
                />
             
                <div className="register-check-box">
                  <div className="check">
                    <label className="checkbox">
                      <input type="checkbox" name="terms" id="terms" />
                      <i> </i>I accept the terms and conditions
                    </label>
                  </div>
                </div>
                <input type="submit" value="Register" />
              </form>
            </div>
            <div className="register-home">
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

