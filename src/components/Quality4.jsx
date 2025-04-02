import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Quality4 = ({translations}) => {
	return (
		<div>
			<div className="img-wrapper portrait-img">
				<img src="./image03.jpg" alt="" />
			</div>
			<div className="card-wrapper">
				<h3>{translations["quality"]?.title}</h3>
				<p>
				{translations["quality"]?.text}
				</p>
				<a href="mailto:xavier@xocolate.be">
				{translations["quality"]?.button}
					<MdOutlineEmail className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Quality4;
