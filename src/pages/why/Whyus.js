import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";
import { FaBuilding, FaCity, FaUsers, FaAward } from "react-icons/fa";
import "./Whyus.css";

const Whyus = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <FaBuilding />,
      value: 1000,
      suffix: "+",
      label: t("regular.whyus.years", "ბინების რაოდენობა"),
      subtext: t("regular.whyus.subtext1", "უმაღლესი ხარისხის საცხოვრებელი ბინები"),
    },
    {
      icon: <FaCity />,
      value: 6,
      suffix: "+",
      label: t("regular.whyus.projects", "განხორციელებული პროექტები"),
      subtext: t("regular.whyus.subtext2", "თანამედროვე არქიტექტურული პროექტები"),
    },
    {
      icon: <FaUsers />,
      value: 10000,
      suffix: "+",
      label: t("regular.whyus.customers", "კმაყოფილი კლიენტები"),
      subtext: t("regular.whyus.subtext3", "მადლიერი და კმაყოფილი მაცხოვრებლები"),
    },
    {
      icon: <FaAward />,
      value: 1500,
      prefix: "$",
      suffix: "+",
      label: t("regular.whyus.rates", "ხელმისაწვდომი ფასები"),
      subtext: t("regular.whyus.subtext4", "საუკეთესო საინვესტიციო შეთავაზება"),
    },
  ];

  return (
    <section className="whyus-section" id="why-us">
      <Container>
        <div className="whyus-header">
          <span className="whyus-eyebrow">JM Tower Excellence</span>
          <h2 className="whyus-title">
            {t("regular.whyus.title")}
          </h2>
          <div className="whyus-divider" />
        </div>

        <Row className="g-4 justify-content-center">
          {stats.map((item, index) => (
            <Col lg={3} md={6} sm={6} xs={12} key={index}>
              <div className="whyus-card">
                <div className="whyus-icon-wrapper">
                  {item.icon}
                </div>

                <div className="whyus-number-wrap">
                  {item.prefix && (
                    <span className="whyus-plus" style={{ marginRight: "2px" }}>
                      {item.prefix}
                    </span>
                  )}
                  <span className="whyus-number">
                    <CountUp
                      end={item.value}
                      duration={2.2}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </span>
                  {item.suffix && (
                    <span className="whyus-plus">{item.suffix}</span>
                  )}
                </div>

                <h5 className="whyus-label">{item.label}</h5>
                <p className="whyus-subtext">{item.subtext}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Whyus;
