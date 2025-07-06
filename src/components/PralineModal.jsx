import React from "react";
import { MdLiquor } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PralineModal = ({ praline, language, translations, onClose }) => {
	if (!praline) return null;

	let galleryImages = praline.gallery || [];

	try {
		galleryImages = praline.gallery || [];
	} catch (error) {
		console.error("Invalid gallery JSON", error);
		galleryImages = [];
	}

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="close-btn" onClick={onClose}>
					&times;
				</button>
				<h2>{praline[`name_${language}`]}</h2>
				<div className="modal-tablet">
					{galleryImages.length > 0 ? (
						<Swiper
							modules={[Navigation, Pagination]}
							navigation
							pagination={{ clickable: true }}
							className="modal-swiper"
						>
							{galleryImages.map((url, index) => (
								<SwiperSlide key={index} className="swiper-slide">
									<img
										src={url}
										alt={`${praline[`name_${language}`]} ${
											index + 1
										}`}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<img
							src={praline.image}
							alt={praline[`name_${language}`]}
						/>
					)}

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
