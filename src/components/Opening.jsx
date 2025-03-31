import React from "react";
import { motion } from "framer-motion";

const Opening = () => {
	return (
		<div>
			<div className="img-wrapper">
				<motion.div
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image08.jpg" alt="" />
				</motion.div>
			</div>
			<div className="card-wrapper hours">
				<h3>Opening hours</h3>
				<p>Monday: 10:00-17:30</p>
				<p>Tuesday: 10:00-17:30</p>
				<p>Wednesday: 10:00-17:30</p>
				<p>Thursday: 10:00-17:30</p>
				<p>Friday: 10:00-17:30</p>
				<p>Saturday: 10:00-17:30</p>
				<p>Sunday: Closed</p>
			</div>
		</div>
	);
};

export default Opening;
