import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Organic6 = ({ translations }) => {
	return (
		<div>
			<div className="img-wrapper">
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image05.jpg" alt="" />
				</motion.div>
			</div>
			<div className="card-wrapper">
				<h3>{translations["organic"]?.title}</h3>
				<p>{translations["organic"]?.text}</p>
				<a href="https://www.tuv-nord.com/be/nl/certificatie/bio/">
					{translations["organic"]?.button}
					<FaArrowRight className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Organic6;
