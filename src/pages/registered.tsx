import React ,{FC}from "react";

export const Register :FC=()=>{
    return(
        <>
       <div className="register">
		<div className="container">
			<h2>Register Here</h2>
			<div className="login-form-grids">
				<h5>profile information</h5>
				<form action="#" method="post">
					<input type="text" placeholder="First Name..."  autoComplete="firstName"/ >
					<input type=" text" placeholder="Last Name..." autoComplete="lastName"/>
				</form>
				<div className="register-check-box">
					<div className="check">
						<label className="checkbox"><input type="checkbox" name="checkbox"/>/<i> </i>Subscribe to Newsletter</label>
					</div>
				</div>
				<h6>Login information</h6>
					<form action="#" method="post">
					<input type="email" placeholder="Email Address" autoComplete="" / >
					<input type="password" placeholder="Password"  autoComplete="" />
					<input type="password" placeholder="Password Confirmation"  autoComplete=""/>
					<div className="register-check-box">
						<div className="check">
							<label className="checkbox"><input type="checkbox" name="checkbox"/><i> </i>I accept the terms and conditions</label>
						</div>
					</div>
					<input type="submit" value="Register"/>
				</form>
			</div>
			<div className="register-home">
				<a href="index.html">Home</a>
			</div>
		</div>
	</div>
        </>
    )
}