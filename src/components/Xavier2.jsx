import React from "react";
import { motion } from "framer-motion";

const Xavier2 = () => {
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
				<h3>About Xavier Declercq, the artisan behind the taste.</h3>
				<p>
					Xocolate is the creation of Xavier Declercq, an artisanal
					chocolatier. After 33 years of dedication to international
					solidarity, Xavier has followed another passion: chocolate.
					However, his principles and ethics remain unchanged.
					Xavier’s dedication and innovation were recognized by Gault
					& Millau in 2022 with the title “Discovery of the Year for
					Belgium.”
				</p>
			</div>
		</div>
	);
};

export default Xavier2;
