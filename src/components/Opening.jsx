import React from "react";
import { motion } from "framer-motion";

const Opening = ({ translations }) => {
	return (
		<div className="card-wrapper">
			<div className="hours card-text">
				<h3>{translations.opening?.title}</h3>
				<p>{translations.opening?.text.monday}</p>
				<p>{translations.opening?.text.tuesday}</p>
				<p>{translations.opening?.text.wednesday}</p>
				<p>{translations.opening?.text.thursday}</p>
				<p>{translations.opening?.text.friday}</p>
				<p>{translations.opening?.text.saturday}</p>
				<p>{translations.opening?.text.sunday}</p>
			</div>
			<div className="img-wrapper right">
				<motion.div
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image08.jpg" alt="" />
				</motion.div>
			</div>
		</div>
	);
};

export default Opening;
