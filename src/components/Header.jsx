import React from "react";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<div className="card-wrapper">
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: false }}
			>
				<h1>Xocolate</h1>
				<h3>
					Welcome to Xocolate, the artisanal chocolatier in Brussels.
				</h3>
			</motion.div>
		</div>
	);
};

export default Header;
