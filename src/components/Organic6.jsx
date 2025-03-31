import React from "react";
import { motion } from "framer-motion";

const Organic6 = () => {
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
				<h3>Organic</h3>
				<p>
					Obtaining an organic certificate is no easy feat: it is a
					meticulous process in which products are carefully evaluated
					and approved to meet the strict standards of organic
					farming. It is essential to avoid using chemical pesticides
					and artificial fertilizers, and instead promote
					biodiversity. Such certification is of great importance to
					us. It not only guarantees the superior quality of our
					chocolate but also supports ethical and sustainable
					practices throughout the entire supply chain.
				</p>
			</div>
		</div>
	);
};

export default Organic6;
