import React, { useState, useEffect } from "react";
import Header from "./Header";
import Bio1 from "./Bio1";
import Xavier2 from "./Xavier2";
import Excellent3 from "./Excellent3";
import Quality4 from "./Quality4";
import Flavour5 from "./Flavour5";
import Organic6 from "./Organic6";
import Press7 from "./Press7";
import Unique8 from "./Unique8";
import Discovery9 from "./Discovery9";
import Opening from "./Opening";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Socials from "./Socials";
import Map from "./Map";

const Home = ({ language, setLanguage, translations }) => {
	return (
		<div className="container">
			<Navbar setLanguage={setLanguage} />
			<Header translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Map translations={translations} />
			<Bio1 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Xavier2 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Excellent3 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Quality4 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Flavour5 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Organic6 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Press7 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Unique8 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Discovery9 translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Opening translations={translations} />
			<div
				style={{
					backgroundColor: "rgba(223,223,223,255)",
					width: "100%",
					height: "1px",
				}}
			></div>
			<Footer translations={translations} />
			<Socials />
		</div>
	);
};

export default Home;
