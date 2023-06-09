import React from "react";
import { useEffect, useRef, useState } from "react";

function ProjectionText({ data, locale, currency,  }) {
  const [age, setAge] = useState(24);
  const [year, setYear] = useState(2023);
  const [worth, setWorth] = useState("$1000");

  useEffect(() => {
    let len = data.length;
    len = Math.min(len, 25);
    if (len > 0) {
      setYear(data[len].year);
      setAge(data[len].age);
      setWorth(
        data[len].netWorth.toLocaleString(locale, {
          style: "currency",
          currency: currency,
          maximumFractionDigits: 0,
        })
      );
    }
  }, [data, locale, currency]);

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
