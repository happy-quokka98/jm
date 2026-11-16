import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaEnvelope } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperOverrides.css";
import styles from "./Slider.module.css";

import AvtandilImg from "../../assets/images/avtandil_jumushadze.jpg";
import IaImg from "../../assets/images/IMG_4194.jpg";
import TamilaImg from "../../assets/images/20250521_122414.jpg";
import RusudanImg from "../../assets/images/DSC00019.jpg";
import NugzarImg from "../../assets/images/DSC00010.jpg";

const Staff = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image: AvtandilImg,
      name: t("staff.cardOne", "ავთანდილ ჯუმუშაძე"),
      role: t("staff.descriptionOne", "გენერალური დირექტორი"),
      dept: t("staff.deptOne", "ხელმძღვანელობა"),
    },
    {
      image: IaImg,
      name: t("staff.cardTwo", "ია ბერიძე"),
      role: t("staff.descriptionTwo", "ფინანსური დირექტორი"),
      dept: t("staff.deptTwo", "ხელმძღვანელობა"),
    },
    {
      image: TamilaImg,
      name: t("staff.cardThree", "თამილა ებრალიძე"),
      role: t("staff.descriptionThree", "მთავარი ბუღალტერი"),
      dept: t("staff.deptThree", "ფინანსები"),
    },
    {
      image: RusudanImg,
      name: t("staff.cardFour", "რუსუდან გვარიშვილი"),
      role: t("staff.descriptionFour", "გაყიდვების მენეჯერი"),
      dept: t("staff.deptFour", "გაყიდვები"),
    },
    {
      image: NugzarImg,
      name: t("staff.cardFive", "ნუგზარ ჯუმუშაძე"),
      role: t("staff.descriptionFive", "გაყიდვების მენეჯერი"),
      dept: t("staff.deptFive", "გაყიდვები"),
    },
  ];

  return (
    <section className={styles.staffSection}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          {t("staff.badge", "ჩვენი გუნდი")}
        </span>
        <h2 className={styles.title}>
          {t("staff.staff", "თანამშრომლები")}
        </h2>
        <p className={styles.subtitle}>
          {t(
            "staff.subtitle",
            "პროფესიონალები, რომლებიც თქვენს კომფორტზე და საიმედო პარტნიორობაზე ზრუნავენ"
          )}
        </p>
        <div className={styles.divider} />
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={3}
          slidesPerGroup={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            1100: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className={styles.cardImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.deptBadge}>{slide.dept}</span>
                </div>

                <div className={styles.cardContent}>
                  <div>
                    <h3 className={styles.cardTitle}>{slide.name}</h3>
                    <p className={styles.cardDescription}>{slide.role}</p>
                  </div>

                  <a href="/#contact" className={styles.contactBtn}>
                    <FaEnvelope />
                    <span>{t("contact.us", "დაკავშირება")}</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Staff;
