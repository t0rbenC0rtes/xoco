import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Quality4 = () => {
	return (
		<div>
			<div className="img-wrapper portrait-img">
				<img src="./image03.jpg" alt="" />
			</div>
			<div className="card-wrapper">
				<h3>Top quality at a fair price.</h3>
				<p>
					Xocolate ensures that handmade chocolate is accessible to
					everyone while supporting fair trade throughout the entire
					production process. We are also a member of the Belgian Fair
					Trade Federation (BFTF). Questions about our chocolate or
					our organic or fair trade production process?
				</p>
				<a href="mailto:xavier@xocolate.be">
					CONTACT US
					<MdOutlineEmail className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Quality4;
