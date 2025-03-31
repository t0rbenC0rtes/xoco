import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const Bio1 = () => {
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
					<h3>Biologisch en Fair Trade.</h3>
					<p>
						Xocolate produces organic chocolate with a clear
						conscience. Through our commitment to fair trade, our
						cocoa farmers receive more than double the standard
						world market price. We strive to create chocolate that
						stimulates all the senses.
					</p>
					<a href="https://www.facebook.com/XavierXocolate/">FOLLOW US<FaFacebook className="icon"/></a>
				</motion.div>
			</div>
		</div>
	);
};

export default Bio1;
