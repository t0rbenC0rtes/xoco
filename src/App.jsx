import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Bio1 from "./components/Bio1";
import Xavier2 from "./components/Xavier2";
import Excellent3 from "./components/Excellent3";
import Quality4 from "./components/Quality4";
import Flavour5 from "./components/Flavour5";
import Organic6 from "./components/Organic6";
import Press7 from "./components/Press7";
import Unique8 from "./components/Unique8";
import Discovery9 from "./components/Discovery9";
import Opening from "./components/Opening";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import Map from "./components/Map";

const App = () => {
	const [language, setLanguage] = useState("en");
	const [translations, setTranslations] = useState({});

	useEffect(() => {
		import(`./lang/${language}.json`).then((module) =>
			setTranslations(module.default)
		);
	}, [language]);

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
			<Map />
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

export default App;
