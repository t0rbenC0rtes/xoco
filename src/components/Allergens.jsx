import React from "react";

const Allergens = ({ onClose, translations, language }) => {
	if (!translations) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="close-btn" onClick={onClose}>
					&times;
				</button>
				<h2>{translations["infoButtons"]?.allergensTitle}</h2>
				<p>{translations["infoButtons"]?.allergensContent}</p>
			</div>
		</div>
	);
};

export default Allergens;
