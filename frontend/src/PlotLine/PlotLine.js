import React from "react";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import "./PlotLine.css";
import { addTooltips } from "../tooltip";

function PlotLine({ data }) {
  const headerRef = useRef();

  useEffect(() => {
    d3.json(data);
    if (data === undefined) return;
    const chart = addTooltips(Plot.plot({
      style: {
        background: "transparent",
        fontFamily: "system-ui",
        fontSize: 14
      },
      y: {
        grid: true,
        tickFormat: d3.format("$.3s")
      },
      x: {
        ticks: Math.min(data.length, 5),
        tickFormat: (d) => d.toLocaleString().replace(/[^0-9]/g, ""),
      },
      color: {
        type: "diverging",
        scheme: "burd",
      },
      marks: [
        Plot.ruleY([0]),
        Plot.areaY(data, {
            x: "year",
            y: "netWorth",
            fill: "#ccc",
            fillOpacity: 0.7
        }),
        Plot.line(data, {
          x: "year",
          y: "netWorth",
          strokeWidth: 3,
          title: (d) => "year: " + d.year + "\nage: " + d.age + "\nworth: " + d.netWorth.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })
        }),
      ],
      height: 500,
      width: 1000,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
      marginBottom: 50,
    }));
    headerRef.current.append(chart);
    return () => chart.remove();
  }, [data]);

  return (
    <div className="PlotLine">
      <header className="Plotline-header" ref={headerRef}></header>
    </div>
  );
}

export default PlotLine;