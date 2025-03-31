import React from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const Press7 = () => {
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
				<h3>Press articles</h3>
				<p>
					Xocolate has received significant media attention in recent
					years. Various press articles have praised Xavier Declercq’s
					innovative approach in the world of chocolate. They speak
					highly of our artisanal craftsmanship, ethical sourcing of
					ingredients, and our commitment to sustainability and fair
					trade practices. We are very pleased with all this
					attention, as it gradually raises awareness about the
					importance of sustainable and ethical food production.
				</p>
				<a href="https://www.facebook.com/XavierXocolate/">
					READ MORE
					<FaFacebook className="icon" />
				</a>
			</div>
		</div>
	);
};

export default Press7;
