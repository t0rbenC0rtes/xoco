import React from "react";
import { MdLiquor } from "react-icons/md";

const PralineModal = ({ praline, language, translations, onClose }) => {
	if (!praline) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="close-btn" onClick={onClose}>
					&times;
				</button>
				<h2>{praline[`name_${language}`]}</h2>
				<div className="modal-tablet">
					<img
						src={praline.image}
						alt={praline[`name_${language}`]}
					/>
					<div className="modal-text">
						<p>{praline[`description_${language}`]}</p>
						<p className="warning">
							<MdLiquor style={{ marginRight: "0.25rem" }} />
							{praline.contains_alcohol === true
								? translations?.labels?.alcohol_yes ||
								  "Contains alcohol"
								: translations?.labels?.alcohol_no ||
								  "Does not contain alcohol"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PralineModal;
