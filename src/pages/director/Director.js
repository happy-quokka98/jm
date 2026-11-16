import React from "react";
import { useTranslation } from "react-i18next";
import AvtandilImg from "../../assets/images/avtandil_jumushadze.jpg";
import styles from "./Director.module.css";

const Director = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.directorSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* მარცხნივ: გენერალური დირექტორის ფოტო */}
          <div className={styles.imageCol}>
            <img
              src={AvtandilImg}
              alt={t("director.name", "ავთანდილ ჯუმუშაძე")}
              className={styles.directorImage}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* მარჯვნივ: აღწერა */}
          <div className={styles.contentCol}>
            <span className={styles.companyTag}>
              {t("director.company", "JM Tower")}
            </span>

            <h2 className={styles.name}>
              {t("director.name", "ავთანდილ ჯუმუშაძე")}
            </h2>

            <p className={styles.role}>
              {t("director.role", "გენერალური დირექტორი")}
            </p>

            <div className={styles.divider} />

            <p className={styles.description}>
              {t(
                "director.quote",
                "ჩვენი მიზანია შევქმნათ არა მხოლოდ საცხოვრებელი სივრცე, არამედ ახალი ცხოვრების სტანდარტი, სადაც უმაღლესი სამშენებლო ხარისხი, თანამედროვე არქიტექტურა და მყუდრო გარემო ერთმანეთს ერწყმის. JM Tower-ის თითოეული დეტალი დაგეგმილია თქვენი და თქვენი ოჯახის უსაფრთხო, კომფორტული და მშვიდი მომავლისთვის."
              )}
            </p>

            <p className={styles.description}>
              {t(
                "director.paragraph2",
                "ჩვენთვის უმთავრესია თითოეული მობინადრის ნდობა და საიმედოობა. პროექტში გამოყენებულია ევროპული სტანდარტების ეკოლოგიური მასალები და ინოვაციური საინჟინრო გადაწყვეტილებები."
              )}
            </p>

            <div className={styles.actionRow}>
              <a href="/#contact" className={styles.contactBtn}>
                {t("director.contactBtn", "დაგვიკავშირდით")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
