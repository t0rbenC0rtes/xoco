import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaGoogle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Excellent3 = ({ translations }) => {
	return (
		<div className="card-wrapper">
			<div className="card-text">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: false }}
				>
					<h1>{translations["excellent"]?.title}</h1>
					<Link to="/pralines" className="pralines-menu-btn">
						<button>{translations["nav"]?.pralines}<FaArrowRight /></button>
					</Link>
					<p>{translations["excellent"]?.text}</p>
					<a
						href="https://www.google.com/search?hl=en-BE&sca_esv=0160b8be554527dd&cs=0&output=search&q=XOCOLATE&ludocid=15309125074612785540&lsig=AB86z5Uyyg2Xpq8lb7OkQLTMz6S7&shndl=30&shem=lsde,vslcea&source=sh/x/loc/act/m1/1&kgs=9f7ece721d21e137"
						target="_blank"
					>
						{translations["excellent"]?.button}
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaGoogle className="icon" />
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Excellent3;
