const Map = () => {
	return (
		<div style={{ width: "100%", height: "500px" }}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1744017291660!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ1JpN1NpM0FF!2m2!1d50.85571090112251!2d4.389122572015062!3f61.44506279816306!4f1.7736447667740975!5f0.7820865974627469"
				width="100%"
				height="450px"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
                title="Google Street View"
			></iframe>
		</div>
	);
};

export default Map;
