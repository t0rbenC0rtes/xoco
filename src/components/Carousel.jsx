import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Navbar from "./Navbar";
import PralineModal from "./PralineModal";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { PiPrinterDuotone } from "react-icons/pi";
import { GiHealthNormal } from "react-icons/gi";

const Carousel = ({ translations, language, setLanguage }) => {
	const [pralines, setPralines] = useState([]);
	const [selectedPraline, setSelectedPraline] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Fetch data from Supabase
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

	// Recenter the carousel
	const updateCarousel = () => {
		const gallery = document.querySelector(".gallery");
		const cards = document.querySelectorAll(".card");
		if (!gallery || cards.length === 0) return;

		const activeCard = cards[currentIndex];
		if (!activeCard) return;

		const activeRect = activeCard.getBoundingClientRect();
		const galleryRect = gallery.getBoundingClientRect();

		const cardCenter = activeRect.left + activeRect.width / 2;
		const galleryCenter = galleryRect.left + galleryRect.width / 2;
		const diff = galleryCenter - cardCenter;

		gallery.style.transform = `translateX(${diff}px)`;

		cards.forEach((card, i) => {
			card.classList.remove("center", "left", "right");
			if (i === currentIndex) {
				card.classList.add("center");
			} else if (i === currentIndex - 1) {
				card.classList.add("left");
				card.style.setProperty("--angle", "-45deg");
			} else if (i === currentIndex + 1) {
				card.classList.add("right");
				card.style.setProperty("--angle", "45deg");
			}
		});
	};

	// Swipe handling for mobile only
	useEffect(() => {
		if (pralines.length === 0) return;

		const gallery = document.querySelector(".gallery");
		let startX = 0;
		let isDragging = false;

		const handleTouchStart = (e) => {
			startX = e.touches[0].clientX;
			isDragging = true;
		};

		const handleTouchMove = (e) => {
			if (!isDragging) return;
			const diff = e.touches[0].clientX - startX;
			if (Math.abs(diff) > 50) {
				if (diff > 0 && currentIndex > 0) {
					setCurrentIndex(currentIndex - 1);
				} else if (diff < 0 && currentIndex < pralines.length - 1) {
					setCurrentIndex(currentIndex + 1);
				}
				isDragging = false;
			}
		};

		const handleTouchEnd = () => {
			isDragging = false;
		};

		gallery.addEventListener("touchstart", handleTouchStart);
		gallery.addEventListener("touchmove", handleTouchMove);
		gallery.addEventListener("touchend", handleTouchEnd);

		return () => {
			gallery.removeEventListener("touchstart", handleTouchStart);
			gallery.removeEventListener("touchmove", handleTouchMove);
			gallery.removeEventListener("touchend", handleTouchEnd);
		};
	}, [currentIndex, pralines.length]);

	// Update carousel position and classnames when index changes
	useEffect(() => {
		updateCarousel();
	}, [currentIndex, pralines]);

	return (
		<div className="carousel-container">
			<div>
				<Link to="/" className="back-btn">
					<button>
						<FaArrowLeft />
					</button>
				</Link>
				<Navbar language={language} setLanguage={setLanguage} />
			</div>
			<div className="carousel">
				<ul className="gallery">
					{pralines.map((praline, i) => (
						<li
							key={praline.id || i}
							className="card"
							style={{ "--timer": i + 1 }}
							onClick={() => {
								if (i === currentIndex) {
									setSelectedPraline(praline); // only if it's centered
								} else {
									setCurrentIndex(i); // just center it
								}
							}}
						>
							<p className="praline-name">
								{praline[`name_${language}`]}
							</p>
							<img
								src={praline.image}
								alt={praline[`name_${language}`]}
							/>
						</li>
					))}
				</ul>
			</div>

			{selectedPraline && (
				<PralineModal
					praline={selectedPraline}
					onClose={() => setSelectedPraline(null)}
					language={language}
					translations={translations}
				/>
			)}
			<div className="info-btns">
				<button className="info-btn">
					<GiHealthNormal />
					{translations["infoButtons"]?.allergensBtn}
				</button>
				<button className="info-btn">
					<PiPrinterDuotone />
					{translations["infoButtons"]?.print}
				</button>
			</div>
		</div>
	);
};

export default Carousel;
