import "./App.css";
import PlotLine from "./PlotLine/PlotLine";
import { useEffect, useRef, useState } from "react";
import UserData from "./UserData/UserData";

function App() {
  const headerRef = useRef();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="App-header">
        <UserData setData={setData}></UserData>
        <PlotLine data={data}></PlotLine>
      </div>
    </>
  );
}

export default App;
