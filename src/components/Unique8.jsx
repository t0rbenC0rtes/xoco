import React from "react";
import { motion } from "framer-motion";

const Unique8 = () => {
	return (
		<div>
			<div className="card-wrapper">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<h1>Unique and fair.</h1>
					<p>
						Xocolate’s focus on fair trade and organic ingredients
						contributes to a more sustainable future for the
						chocolate industry. Experience the unique sensation of
						our chocolate. Taste the difference of chocolate that
						tells a deeper story—the story of fair trade, the story
						of a better world.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Unique8;
