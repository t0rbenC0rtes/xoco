import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Navbar from "./Navbar";
import { MdLiquor } from "react-icons/md";

const PralinesMenu = ({ translations, language, setLanguage }) => {
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
		<>
			<Navbar setLanguage={setLanguage} />
			<div className="pralines-container">
				<h2>{translations?.nav?.pralines || "Our Pralines"}</h2>
				<div className="pralines-grid">
					{pralines.map((item) => {
						const nameKey = `name_${language}`;
						const descKey = `description_${language}`;
						return (
							<div key={item.id} className="praline-card">
								<h3>{item[`name_${language}`]}</h3>
								<img
									src={item.image}
									alt={item[`name_${language}`]}
								/>
								<p>{item[`description_${language}`]}</p>

								<p className="warning">
									<MdLiquor
										style={{ marginRight: "0.25rem" }}
									/>
									{item.contains_alcohol === true
										? translations?.labels?.alcohol_yes ||
										  "Contains alcohol"
										: translations?.labels?.alcohol_no ||
										  "Does not contain alcohol"}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default PralinesMenu;
