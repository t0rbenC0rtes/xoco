import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const Press7 = ({ translations }) => {
	return (
		<div>
			<div className="img-wrapper">
				<motion.div
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image06.jpg" alt="" />
				</motion.div>
			</div>
			<div className="card-wrapper">
				<h3>{translations["press"]?.title}</h3>
				<p>{translations["press"]?.text}</p>
				<a
					href="https://www.facebook.com/XavierXocolate/"
					target="_blank"
				>
					{translations["press"]?.button}
					<FaFacebook className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Press7;
