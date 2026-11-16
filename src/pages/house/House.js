import React from "react";
import BlockA from "./../../assets/UNIVERSAMI00.jpg";
import BlockB from "./../../assets/UNIVERSAMI01.jpg";
import BlockC from "./../../assets/UNIVERSAMI02.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const House = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <section className="sale_section">
        <div className="container">
          <h2 className="section-title">{t("regular.discover")}</h2>
          <p className="section-subtitle">
            {t("regular.explore")
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}{" "}
          </p>
          <div className="card-container">
            <div
              className="card"
              onClick={() => navigate("/blocka", { state: { block: "A" } })}
            >
              <img
                src={BlockA}
                alt="Apartment A"
                loading="lazy"
                decoding="async"
              />
              <div className="card-content">
                <h3>{t("regular.blockaa")}</h3>
                <p>{t("regular.blocka")}</p>
              </div>
            </div>

            <div
              className="card"
              onClick={() => navigate("/blockb", { state: { block: "B" } })}
            >
              <img
                src={BlockB}
                alt="Apartment B"
                loading="lazy"
                decoding="async"
              />
              <div className="card-content">
                <h3>{t("regular.blockbb")}</h3>
                <p>{t("regular.blockb")}</p>
              </div>
            </div>

            <div
              className="card"
              onClick={() => navigate("/blockc", { state: { block: "C" } })}
            >
              <img
                src={BlockC}
                alt="Apartment C"
                loading="lazy"
                decoding="async"
              />
              <div className="card-content">
                <h3>{t("regular.blockcc")}</h3>
                <p>{t("regular.blockc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default House;
