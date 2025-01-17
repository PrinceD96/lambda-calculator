import React from "react";
import logo from "../../Img/Lambda_Logo_white.png";
import "./Logo.css";

const Logo = () => {
	return (
		<div className='logo-container'>
			<img className='logo' src={logo} alt="Lambda's logo" />
		</div>
	);
};

export default Logo;
