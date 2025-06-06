import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";

const PralinesMenu = ({ translations, language }) => {
	const [pralines, setPralines] = useState([]);

	useEffect(() => {
		const fetchPralines = async () => {
			const { data, error } = await supabase.from("pralines").select("*");
			if (error) {
				console.error("Error fetching pralines:", error.message);
			} else {
				setPralines(data);
			}
		};
		fetchPralines();
	}, []);

	return (
		<div className="pralines-container">
			<h2>{translations?.nav?.pralines || "Our Pralines"}</h2>
			<div className="pralines-grid">
				{pralines.map((item) => {
					const nameKey = `name_${language}`;
					const descKey = `description_${language}`;
					return (
						<div key={item.id} className="praline-card">
							<img src={item.image} alt={item[nameKey]} />
							<h3>{item[nameKey]}</h3>
							<p>{item[descKey]}</p>
							{item.contains_alcohol && (
								<p className="warning">🍷 {translations?.labels?.alcohol || "Contains alcohol"}</p>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PralinesMenu;
