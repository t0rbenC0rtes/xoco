import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const Bio1 = ({translations}) => {
	return (
		<div>
			<div className="img-wrapper">
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image01.jpg" alt="" />
				</motion.div>
			</div>
			<div className="card-wrapper">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<h3>{translations["bio"]?.title}</h3>
					<p>
					{translations["bio"]?.text}
					</p>
					<a href="https://www.facebook.com/XavierXocolate/">{translations["bio"]?.button}<FaFacebook className="icon"/></a>
				</motion.div>
			</div>
		</div>
	);
};

export default Bio1;
