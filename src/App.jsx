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
      <Bio1 translations={translations} />
      <Xavier2 translations={translations} />
      <Excellent3 translations={translations} />
      <Quality4 translations={translations} />
      <Flavour5 translations={translations} />
      <Organic6 translations={translations} />
      <Press7 translations={translations} />
      <Unique8 translations={translations} />
      <Discovery9 translations={translations} />
      <Opening translations={translations} />
    </div>
  );
};

export default App;
