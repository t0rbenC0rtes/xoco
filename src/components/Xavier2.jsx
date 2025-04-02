import React from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";

const Xavier2 = ({ translations }) => {
	return (
		<div>
			<div className="img-wrapper">
				<motion.div
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image02.jpg" alt="" />
				</motion.div>
			</div>
			<div className="card-wrapper">
				<h3>{translations["xavier"]?.title}</h3>
				<p>{translations["xavier"]?.text}</p>
				<a href="mailto:xavier@xocolate.be" target="_blank">
					{translations["xavier"]?.button}
					<MdOutlineEmail className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Xavier2;
