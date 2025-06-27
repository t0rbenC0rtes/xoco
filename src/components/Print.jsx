import React from "react";
import Logo from "./Logo";

const Print = ({ pralines, language }) => {
	return (
		<div className="print-area">
			<div className="print-logo">
				<Logo />
			</div>

			<ul className="print-gallery">
				{pralines.map((praline, i) => (
					<li key={praline.id || i} className="print-card">
						<img
							src={praline.image}
							alt={praline[`name_${language}`]}
						/>
						<h2>{praline[`name_${language}`]}</h2>
						<p>{praline[`description_${language}`]}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Print;
