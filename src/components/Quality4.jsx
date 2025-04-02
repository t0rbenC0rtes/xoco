import React from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";

const Quality4 = ({ translations }) => {
	return (
		<div className="card-wrapper">
			<div className="img-wrapper portrait-img">
			<motion.div
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image03.jpg" alt="" />
				</motion.div>
			</div>
			<div className="card-text">
				<h3>{translations["quality"]?.title}</h3>
				<p>{translations["quality"]?.text}</p>
				<a href="mailto:xavier@xocolate.be" target="_blank">
					{translations["quality"]?.button}
					<MdOutlineEmail className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Quality4;
