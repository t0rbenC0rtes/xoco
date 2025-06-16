import { useState } from "react";

const Map = ({ translations }) => {
	const [isMapActive, setIsMapActive] = useState(false);

	const toggleMap = () => {
		setIsMapActive((prev) => !prev);
	};
	return (
		<div className="map-wrapper" style={{ width: "100%", height: "500px" }}>
			<button
				onClick={toggleMap}
				style={{
					padding: "0.5rem 1rem",
					margin: "1rem",
					background: isMapActive ? "#f33" : "#333",
					color: "white",
					border: "none",
					borderRadius: "4px",
					cursor: "pointer",
				}}
			>
				{isMapActive ? translations?.["mapButton"]?.mapOff || 'Hide Map' : translations?.["mapButton"]?.mapOn || 'Show Map'}
			</button>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1744018531055!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ1JpN1NpYUE.!2m2!1d50.85573930288061!2d4.389145744067452!3f52.28713635116376!4f-47.30770901512865!5f0.4000000000000002"
				width="100%"
				height="450px"
				style={{
					border: 0,
					pointerEvents: isMapActive ? "auto" : "none",
					transition: "filter 0.3s ease",
					filter: isMapActive ? "none" : "grayscale(0.4)",
				}}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="Google Street View"
			></iframe>
		</div>
	);
};

export default Map;
