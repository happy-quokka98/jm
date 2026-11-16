import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Listing1 from "../../assets/ft1image.jpg";
import Listing2 from "../../assets/ft4image.jpg";
import Listing3 from "../../assets/ft6image.jpg";
import styles from "./Listing.module.css";

const listings = [
  {
    id: 1,
    key: "firstApartment",
    image: Listing1,
  },
  {
    id: 2,
    key: "parkingLot",
    image: Listing2,
  },
  {
    id: 3,
    key: "mallSpace",
    image: Listing3,
  },
];

const Listing = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.listingSection} id="listing">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            {t("regular.listing.eyebrow", "JM TOWER")}
          </span>
          <h2 className={styles.title}>
            {t("regular.listing.recentListings", "ხელმისაწვდომი სივრცეები")}
          </h2>
          <p className={styles.subtitle}>
            {t(
              "regular.listing.exploreOptions",
              "გაეცანით პრემიუმ საცხოვრებელ, კომერციულ და საპარკინგე შეთავაზებებს"
            )}
          </p>
          <div className={styles.divider} />
        </div>

        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
          >
            {listings.map((item) => (
              <SwiperSlide key={item.id} className={styles.swiperSlide}>
                <div className={styles.card}>
                  {/* მარცხენა მხარე: სურათი */}
                  <div className={styles.imageCol}>
                    <img
                      src={item.image}
                      alt={t(`regular.listing.${item.key}.title`)}
                      className={styles.image}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* მარჯვენა მხარე: ტექსტი */}
                  <div className={styles.infoCol}>
                    <div>
                      <span className={styles.badge}>
                        {t(`regular.listing.${item.key}.badge`)}
                      </span>

                      <h3 className={styles.cardTitle}>
                        {t(`regular.listing.${item.key}.title`)}
                      </h3>

                      <h5 className={styles.cardSubtitle}>
                        {t(`regular.listing.${item.key}.agent`)}
                      </h5>

                      <p className={styles.cardDescription}>
                        {t(`regular.listing.${item.key}.description`)}
                      </p>

                      <ul className={styles.specsList}>
                        <li>{t(`regular.listing.${item.key}.f1`)}</li>
                        <li>{t(`regular.listing.${item.key}.f2`)}</li>
                        <li>{t(`regular.listing.${item.key}.f3`)}</li>
                        <li>{t(`regular.listing.${item.key}.f4`)}</li>
                      </ul>
                    </div>

                    <div className={styles.actionRow}>
                      <a href="/#contact" className={styles.ctaBtn}>
                        {t("regular.listing.contactNow", "დაგვიკავშირდით")}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Listing;
