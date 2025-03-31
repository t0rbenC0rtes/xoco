import React from "react";
import { FaFacebook } from "react-icons/fa";

const Flavour5 = () => {
	return (
		<div>
			<div className="img-wrapper portrait-img">
				<img src="./image04.jpg" alt="" />
			</div>
			<div className="card-wrapper">
				<h3>Less sugar, more flavor.</h3>
				<p>
					Our pralines offer a broad and refined flavor range. Perfect
					for enchanting the eyes and taste buds of your clients,
					employees, visitors, and colleagues, making every tasting
					unforgettable.
				</p>
				<a href="https://www.facebook.com/XavierXocolate/">FOLLOW US<FaFacebook className="icon"/></a>
			</div>
		</div>
	);
};

export default Flavour5;
