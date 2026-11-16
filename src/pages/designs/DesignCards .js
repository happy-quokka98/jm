import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./DesignCards.css";

import studio1 from "./../applan/studio/1.png"
import studio2 from "./../applan/studio/2.png"

import one1 from "./../applan/abbig/1.jpg"
import one2 from "./../applan/abbig/2.jpg"

import two1 from "./../applan/abig/1.png"
import two2 from "./../applan/abig/2.png"

import corner1 from "./../applan/corner/1.png"
import corner2 from "./../applan/corner/2.png"

const TabCard = ({ id, tabs }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("2d");

  return (
    <div className="card">
      <div className="card-header">
        <h3>{t(`design.${id}`)}</h3>
      </div>

      <div className="tabs">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className={activeTab === key ? "tab active" : "tab"}
            onClick={() => setActiveTab(key)}
          >
            {t(`design.${key}.label`)}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <img
          src={tabs[activeTab].image}
          alt={t(`design.${activeTab}.title`)}
          loading="lazy"
          decoding="async"
        />
        <h4>{t(`design.${activeTab}.title`)}</h4>
        <p>{t(`design.${activeTab}.description`)}</p>
      </div>
    </div>
  );
};

export const DesignCards = () => {
  const { t } = useTranslation();

  const cardData = [
    { id: "studio", tabs: { "2d": {}, "3d": {} } },
    { id: "oneBedroom", tabs: { "2d": {}, "3d": {} } },
    { id: "twoBedroom", tabs: { "2d": {}, "3d": {} } },
    { id: "corner", tabs: { "2d": {}, "3d": {} } },
  ];

  // Inject image URLs dynamically for simplicity (can move to translations if needed)
  const images = {
    "studio": {
      "2d": studio1,
      "3d": studio2
    },
    "oneBedroom": {
      "2d": one1,
      "3d": one2
    },
    "twoBedroom": {
      "2d": two1,
      "3d": two2
    },
    "corner": {
      "2d": corner1,
      "3d": corner2
    },
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        paddingTop: "6rem",
        paddingBottom: "4rem",
      }}
    >
      <div className="heading_container text-center mb-5">
        <h2>{t("design.title")}</h2>
      </div>

      <div className="card-container">
        {cardData.map((card, idx) => (
          <TabCard
            key={idx}
            id={card.id}
            tabs={{
              "2d": { image: images[card.id]["2d"] },
              "3d": { image: images[card.id]["3d"] },
            }}
          />
        ))}
      </div>
    </div>
  );
};
