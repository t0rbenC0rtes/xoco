import React from "react";
import { motion } from "framer-motion";

const Discovery9 = () => {
	return (
		<div>
			<div className="img-wrapper">
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<img src="./image07.jpg" alt="" />
				</motion.div>
			</div>
			<div className="card-wrapper">
				<h3>Discovery of the year!</h3>
				<p>
					We are incredibly proud that Xocolate has been named
					“Discovery of the Year for Belgium” by Gault & Millau—a
					wonderful recognition of our commitment to quality and
					sustainability. What sets Xocolate apart is our unwavering
					dedication to fair trade: we pay cocoa farmers in Haiti
					twice the market standard, even compared to other so-called
					'fair' brands. This commitment reinforces our mission to
					make the chocolate sector fairer and more sustainable, and
					the Gault & Millau award confirms that we are on the right
					path.
				</p>
			</div>
		</div>
	);
};

export default Discovery9;
