import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const Flavour5 = ({ translations }) => {
	return (
		<div className="card-wrapper">
			<div className="card-text">
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
			<div className="img-wrapper portrait-img right">
			<motion.div
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image04.jpg" alt="" />
				</motion.div>
			</div>
		</div>
	);
};

export default Flavour5;
