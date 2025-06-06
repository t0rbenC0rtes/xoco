import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home"; // move your current content here
import PralinesMenu from "./components/PralinesMenu"; // create this new file

const App = () => {
	const [language, setLanguage] = useState("en");
	const [translations, setTranslations] = useState({});

	useEffect(() => {
		import(`./lang/${language}.json`).then((module) =>
			setTranslations(module.default)
		);
	}, [language]);
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							language={language}
							setLanguage={setLanguage}
							translations={translations}
						/>
					}
				/>
				<Route
					path="/pralines"
					element={
						<PralinesMenu
							language={language}
							setLanguage={setLanguage}
							translations={translations}
						/>
					}
				/>
			</Routes>
		</Router>
	);
};
export default App;
