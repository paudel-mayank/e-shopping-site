import React,{FC} from 'react';
import {Link} from "react-router-dom";


export const Login :FC=()=>{
    return(
        <>
        <div className="login">
         	<div className="container">
		<h2>Login Form</h2>
	
		<div className="login-form-grids animated wow slideInUp" >
			<form>
				<input type="email" placeholder="Email Address" autoComplete='' / >
				<input type="password" placeholder="Password"autoComplete=''/>
				<div className="forgot">
					<Link to='/'>
                    Forgot Password?
                    </Link>
				</div>
				<input type="submit" value="Login"/>
			</form>
		</div>
		<h4>For New People</h4>
		<p><Link to='/registere' />Register Here(Or) go back to <Link to ='/'/>Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></p>
	</div>
</div>
        </>

)
}