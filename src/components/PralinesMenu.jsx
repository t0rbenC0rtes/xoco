import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Navbar from "./Navbar";
import { MdLiquor } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import PralineModal from "./PralineModal";
import { Link } from "react-router-dom";

import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

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
				<Link to="/" className="pralines-menu-btn">
					<button><FaArrowLeft />HOMEPAGE</button>
				</Link>
				<h2>{translations?.nav?.pralines || "Our Pralines"}</h2>
				<h4>{translations?.instructions?.swiper || ""}</h4>
				<Swiper
					modules={[
						Navigation,
						Pagination,
						Scrollbar,
						A11y,
						EffectCoverflow,
					]}
					speed={800}
					effect="coverflow"
					direction="horizontal"
					coverflowEffect={{
						rotate: 80,
						stretch: 0,
						depth: 78,
						modifier: 2,
						slideShadows: false,
					}}
					grabCursor
					centeredSlides
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className="praline-swiper"
				>
					{pralines.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="praline-card">
								<div
									className="praline-img-wrapper"
									onClick={() => setSelectedPraline(item)}
								>
									<img
										src={item.image}
										alt={item[`name_${language}`]}
									/>
								</div>
								<h3>
									{item[`name_${language}`]}
									{item.contains_alcohol === true && (
										<MdLiquor />
									)}
								</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="pralines-container">				
				<Swiper
					modules={[
						Navigation,
						Pagination,
						Scrollbar,
						A11y,
						EffectCoverflow,
					]}
					speed={800}
					effect="coverflow"
					direction="horizontal"
					coverflowEffect={{
						rotate: 80,
						stretch: 0,
						depth: 78,
						modifier: 2,
						slideShadows: false,
					}}
					grabCursor
					centeredSlides
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className="praline-swiper"
				>
					{pralines.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="praline-card">
								<div
									className="praline-img-wrapper"
									onClick={() => setSelectedPraline(item)}
								>
									<img
										src={item.image}
										alt={item[`name_${language}`]}
									/>
								</div>
								<h3>
									{item[`name_${language}`]}
									{item.contains_alcohol === true && (
										<MdLiquor />
									)}
								</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
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
