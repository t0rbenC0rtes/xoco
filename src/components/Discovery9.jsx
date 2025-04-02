import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Discovery9 = ({ translations }) => {
	return (
		<div className="card-wrapper">
			<div className="img-wrapper">
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image07.jpg" alt="" />
				</motion.div>
			</div>
			<div className="card-text">
				<h3>{translations["discovery"]?.title}</h3>
				<p>{translations["discovery"]?.text}</p>
				<a
					href="https://www.gaultmillau.be/en/chocolatiers/xocolate-bruxelles-schaerbeek"
					target="_blank"
				>
					{translations["discovery"]?.button}
					<FaArrowRight className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Discovery9;
