import React from "react";
import { motion } from "framer-motion";

const Excellent3 = () => {
	return (
		<div>
			<div className="card-wrapper">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<h1>Excellent pralines.</h1>
					<p>
						Our excellent pralines enjoy wide recognition. Thanks to
						their refined taste, our pralines are chosen by numerous
						institutions, universities, and museums that appreciate
						both the quality and the ethics of our chocolaterie.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Excellent3;
