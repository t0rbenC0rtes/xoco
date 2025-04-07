const Map = () => {
	return (
		<div style={{ width: "100%", height: "500px" }}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1744018531055!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ1JpN1NpYUE.!2m2!1d50.85573930288061!2d4.389145744067452!3f52.28713635116376!4f-47.30770901512865!5f0.4000000000000002"
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
