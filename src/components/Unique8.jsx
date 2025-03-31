import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

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
					<a href="https://www.google.com/search?hl=en-BE&sca_esv=0160b8be554527dd&cs=0&output=search&q=XOCOLATE&ludocid=15309125074612785540&lsig=AB86z5Uyyg2Xpq8lb7OkQLTMz6S7&shndl=30&shem=lsde,vslcea&source=sh/x/loc/act/m1/1&kgs=9f7ece721d21e137">
						FIND US HERE
						<FaLocationDot className="icon" />
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Unique8;
