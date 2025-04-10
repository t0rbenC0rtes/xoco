import React from "react";

const Footer = ({ translations }) => {
	return (
		<div className="footer-wrapper card-wrapper">
			<div className="info-wrapper">
				<div className="title">{translations["contact"]?.title}</div>
				<div className="info">
					<p>{translations["contact"]?.name}</p>
					<p>{translations["contact"]?.street}</p>
					<p>{translations["contact"]?.post}</p>
					<p>{translations["contact"]?.vat}</p>
					<p className="white">{translations["contact"]?.email}</p>
				</div>
			</div>
			<div className="review-wrapper">
				<p className="review white">{translations["contact"]?.review}</p>
			</div>
		</div>
	);
};

export default Footer;
