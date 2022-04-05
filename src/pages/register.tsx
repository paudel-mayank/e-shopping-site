
import React, {useState } from 'react';
import Breadcrumb from '../components/breadcrumbs';
import { Link } from "react-router-dom";
import axios  from "axios";

interface RegisterAccount {
  fName:string;
  lName:string;
  email:string;
  password:any;
MobileNumber:string;
}
 const Register=()=>
{ 
  const url="https://uat.ordering-boafresh.ekbana.net/api/v4/auth/signup"; 
  const [data, SetData]= useState<RegisterAccount>({
    fName:"",
    lName:"",
    email:"",
    password:"",
    MobileNumber : "",
  });
  function submit (e: React.FormEvent<EventTarget>){
    e.preventDefault();
  axios.post(url, {
      last_name:data.lName,
      email: data.email,
      password: data.password,
      mobile_number: data.MobileNumber,
      first_name: data.fName
    })
    .then((res)=>{
      console.log(res.data)
    });

  } 
    function handle (e:any){
      const newdata: any= {...data};
      newdata[e.target.id]=e.target.value;
      SetData(newdata);
      console.log(newdata);
    }
return(
  <>
    <Breadcrumb currentPage='registration'/>
    <div className="register">
        <div className="container">
          <h2>Register Here</h2>
          <div className="login-form-grids">
            <h5>profile information</h5>
            <form action="#" method="post" onSubmit={(e: React.FormEvent<EventTarget>) => 
            {
              submit(e);
              }}
            >
              <input type="text"placeholder="First Name..."
                onChange={(e: React.FormEvent<EventTarget>) => handle(e)}
                id="fName"
                value={data.fName}
                required
              />
              <input
                type="text"
                placeholder="Last Name..."
                onChange={(e: React.FormEvent<EventTarget>) => handle(e)}
                id="lName"
                value={data.lName}
                required
              />

              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>Subscribe to Newsletter
                  </label>
                </div>
              </div>
              <h6>Login information</h6>

              <input
                type="email"
                placeholder="Email Address"
                onChange={(e: React.FormEvent<EventTarget>) => handle(e)}
                id="email"
                value={data.email}
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e: React.FormEvent<EventTarget>) => handle(e)}
                id="password"
                value={data.password}
                required
              />
              <input
                type="number"
                placeholder="enter your number"
                onChange={(e: React.FormEvent<EventTarget>) => handle(e)}
                id="MobileNumber"
                value={data.MobileNumber}
                required
              />
              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              <input type="submit" value="Register" />
            </form>
          </div>
          <div className="register-home">
           <Link to='/'>Home</Link>
              
            
          </div>
        </div>
      </div>
    
    

    </>
  )
}
 export default Register;