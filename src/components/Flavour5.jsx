import React from "react";
import { FaFacebook } from "react-icons/fa";

const Flavour5 = ({ translations }) => {
	return (
		<div>
			<div className="img-wrapper portrait-img">
				<img src="./image04.jpg" alt="" />
			</div>
			<div className="card-wrapper">
				<h3>{translations["flavour"]?.title}</h3>
				<p>{translations["flavour"]?.text}</p>
				<a
					href="https://www.facebook.com/XavierXocolate/"
					target="_blank"
				>
					{translations["flavour"]?.button}
					<FaFacebook className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Flavour5;
