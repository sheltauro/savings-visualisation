import React from "react";
import { useEffect, useRef, useState } from "react";

function ProjectionText({ data }) {
  const [age, setAge] = useState(24);
  const [year, setYear] = useState(2023);
  const [worth, setWorth] = useState("$1000");

  useEffect(() => {
    let len = data.length;
    len = Math.min(len, 24);
    if (len > 0) {
      setYear(data[len].year);
      setAge(data[len].age);
      setWorth(
        data[len].netWorth.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        })
      );
    }
  }, [data]);

  return (
    <div className="ProjectionText">
      <label>
        In the year {year}, you will be {age} years old and your net worth will
        be {worth}.
      </label>
    </div>
  );
}

export default ProjectionText;
