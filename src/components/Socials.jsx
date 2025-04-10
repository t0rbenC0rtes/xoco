import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
	return (
		<div className="socials-wrapper card-wrapper">
			<div className="icons-wrapper">
				<a
					className="social-icon"
					target="_blank"
					href="https://www.facebook.com/XavierXocolate/"
				>
					<FaFacebook />
				</a>
				<a
					className="social-icon"
					target="_blank"
					href="https://www.linkedin.com/in/xavier-declercq-016b7146/"
				>
					<FaLinkedinIn />
				</a>
				<a
					className="social-icon"
					target="_blank"
					href="mailto:xavier@xocolate.be"
				>
					<MdEmail />
				</a>
			</div>
			<div className="copy">Copyright 2025 ©</div>
		</div>
	);
};

export default Socials;
