import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Navbar from "./Navbar";
import { MdLiquor } from "react-icons/md";
import PralineModal from "./PralineModal";

const PralinesMenu = ({ translations, language, setLanguage }) => {
	const [pralines, setPralines] = useState([]);
	const [selectedPraline, setSelectedPraline] = useState(null);

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

	const closeModal = () => setSelectedPraline(null);

	return (
		<>
			<Navbar setLanguage={setLanguage} />
			<div className="pralines-container">
				{/* <h2>{translations?.nav?.pralines || "Our Pralines"}</h2> */}
				<div className="pralines-grid">
					{pralines.map((item) => (
						<div key={item.id} className="praline-card">
							<h3>
								{item[`name_${language}`]}
								{item.contains_alcohol === true && <MdLiquor />}
							</h3>

							<div
								className="praline-img-wrapper"
								onClick={() => setSelectedPraline(item)}
							>
								<img
									src={item.image}
									alt={item[`name_${language}`]}
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			<PralineModal
				praline={selectedPraline}
				language={language}
				translations={translations}
				onClose={closeModal}
			/>
		</>
	);
};

export default PralinesMenu;
