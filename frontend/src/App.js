import "./App.css";
import PlotLine from "./PlotLine/PlotLine";
import { useEffect, useRef, useState } from "react";
import UserData from "./UserData/UserData";
import ProjectionText from "./ProjectionText/ProjectionText";
import CurrencySwitch from "./CurrencySwitch";

function App() {
  const headerRef = useRef();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [locale, setLocale] = useState("en-IN");
  const [currency, setCurrency] = useState("INR");
  const [isChecked, setIsChecked] = useState(false);


  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setCurrency((currency === "USD")?"INR":"USD")
    setLocale((locale === "en-US")?"en-IN":"en-US")
  };

  return (
    <>
      <div className="App-header">
        <div className="text-switch">
        <UserData setData={setData} locale={locale} currency={currency}></UserData>
        <CurrencySwitch isChecked={isChecked} handleToggle={handleToggle}></CurrencySwitch>
        </div>
        <ProjectionText data={data} locale={locale} currency={currency}></ProjectionText>
        <PlotLine data={data} locale={locale} currency={currency}></PlotLine>
      </div>
    </>
  );
}

export default App;
