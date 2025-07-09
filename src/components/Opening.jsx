import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Opening = ({ translations }) => {
	const scrollToSection = () => {
		const section = document.getElementById("header");
		if (section) {
			const yOffset = -6000;
			const y =
				section.getBoundingClientRect().top +
				window.pageYOffset +
				yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	return (
		<div className="card-wrapper" id="map-section">
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
			<button onClick={scrollToSection} className="icon">
				<FaArrowUp />
			</button>
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
