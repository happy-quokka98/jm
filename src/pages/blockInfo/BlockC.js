import React, { useState, useEffect } from "react";
import "./block.css";
import ft2 from "../../assets/UNIVERSAMI 010.jpg";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import floorsC from "../floorInfo/FloorsC";

const BlockC = () => {
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const handleMouseEnter = (event, text) => {
    setTooltipText(text);
    setIsVisible(true);
    setTooltipPosition({ x: event.pageX + 10, y: event.pageY + 10 });
  };

  const handleMouseMove = (event) => {
    setTooltipPosition({ x: event.pageX + 10, y: event.pageY + 10 });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const selectedBlock = "C"; // "A", "B", or "C"

  console.log("Selected Block:", selectedBlock);
  const handleClick = (floor) => {
    const floorNumber =
      floor.floorNumber || parseInt(floor.id.match(/\d+/)?.[0]);

    let targetPath = "/planc"; // default

    navigate(targetPath, {
      state: { floorNumber, block: selectedBlock },
    });
  };
  let filteredFloors = [];
  if (selectedBlock === "A") {
    filteredFloors = floorsC.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 24;
    });
  } else if (selectedBlock === "B") {
    filteredFloors = floorsC.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 26;
    });
  } else if (selectedBlock === "C") {
    filteredFloors = floorsC.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 27;
    });
  }

  return (
    <div>
      <div
        className="tooltip"
        style={{
          position: "absolute",
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "5px",
          borderRadius: "3px",
        }}
      >
        {tooltipText}
      </div>

      <div style={{ textAlign: "center", margin: "150px  0 60px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {selectedBlock === "A"
            ? t("regular.blockaa")
            : selectedBlock === "B"
            ? t("regular.blockbb")
            : t("regular.blockcc")}
        </h2>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 6000">
        <title>JM Tower</title>
        <defs>
          <image width={7000} height={3938} id="ft2" href={ft2} />
          <filter x="-50%" y="-50%" width="200%" height="200%" id="f1">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <g id="Layer 1">
          <use id="Background" href="#ft2" transform="matrix(1,0,0,1,0,0)" />
          {filteredFloors.map((floor) => (
            <path
              key={floor.id}
              data-tooltip={floor.tooltip}
              id={floor.id}
              fillRule="evenodd"
              className={floor.id}
              d={floor.path}
              onMouseEnter={(e) => handleMouseEnter(e, floor.tooltip)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(floor)} // << make sure to pass floor here
            />
          ))}
          <path
            key={25}
            data-tooltip={"Block B"}
            fillRule="evenodd"
            d="m4611.3 963.3l3.4 2175.7-972.3-34.5-3.4-2313.6-38-17.3 3.5-41.3z"
            // onMouseEnter={(e) => handleMouseEnter(e, floor.tooltip)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/blockb", { state: { block: "C" } })}
          />
          <path
            key={25}
            data-tooltip={"Molly tower"}
            fillRule="evenodd"
            d="m3629.9 775.7l-3.4 2281.6-1424.3 3.4-3.4-2158.6-47.8-13.7 102.5-399.6 6.8-47.8z"
            // onMouseEnter={(e) => handleMouseEnter(e, floor.tooltip)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/blocka", { state: { block: "A" } })}
          />
        </g>
      </svg>
    </div>
  );
};

export default BlockC;
