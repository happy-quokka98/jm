import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel, Container } from "react-bootstrap";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

import GeorgeImg from "../../assets/client_george.jpg";
import NinoImg from "../../assets/client_nino.jpg";
import LevanImg from "../../assets/client_levan.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("regular.testimonials.0.name", "გიორგი მაისურაძე"),
      role: t("regular.testimonials.0.role", "ბლოკი A • მე-14 სართულის მაცხოვრებელი"),
      text: t(
        "regular.testimonials.0.text",
        "თქვენი კომპანიის პროფესიონალიზმმა ჩვენი ოჯახის ოცნების სახლი რეალობად აქცია. მშენებლობის პროცესი იყო გამჭვირვალე და უპრობლემო, შედეგი კი გაცილებით აღემატება ჩვენს მოლოდინებს."
      ),
      image: GeorgeImg,
    },
    {
      name: t("regular.testimonials.1.name", "ნინო გელაშვილი"),
      role: t("regular.testimonials.1.role", "ბლოკი B • ბინის მესაკუთრე"),
      text: t(
        "regular.testimonials.1.text",
        "მოხარული ვარ, რომ ავირჩიე თქვენი კომპანია ჩემი სახლის ასაშენებლად. პროექტი დასრულდა დროულად, ბიუჯეტის ფარგლებში და ხარისხი ნამდვილად შესანიშნავია. მთელი პროცესი იყო მარტივი და სასიამოვნო."
      ),
      image: NinoImg,
    },
    {
      name: t("regular.testimonials.2.name", "ლევან ბერიძე"),
      role: t("regular.testimonials.2.role", "კომერციული ფართის ინვესტორი"),
      text: t(
        "regular.testimonials.2.text",
        "როგორც ბიზნესის მფლობელმა, დიდად ვაფასებ თქვენი გუნდის პუნქტუალობას და პროფესიონალიზმს. ჩვენი კომერციული შენობა ზუსტად ისეთი გამოვიდა, როგორიც წარმოგვედგინა, და მშენებლობა მიმდინარეობდა ყოველგვარი დაბრკოლებების გარეშე."
      ),
      image: LevanImg,
    },
  ];

  return (
    <section className="testimonial-section" id="testimonials">
      <Container>
        <div className="testimonial-header text-center">
          <span className="testimonial-eyebrow">
            {t("testimonials.verified", "Reviews & Testimonials")}
          </span>
          <h2 className="testimonial-title">
            {t("regular.testimonials.title", "რას ფიქრობენ ჩვენი კლიენტები")}
          </h2>
          <p className="testimonial-subtitle">
            {t(
              "regular.testimonials.subtitle",
              "ჩვენი მაცხოვრებლებისა და ინვესტორების რეალური გამოხმაურებები"
            )}
          </p>
          <div className="testimonial-divider" />
        </div>

        <div className="testimonial-carousel-wrapper">
          <Carousel
            indicators={true}
            nextIcon={
              <span className="testimonial-arrow-btn next" aria-label="Next">
                <FaChevronRight />
              </span>
            }
            prevIcon={
              <span className="testimonial-arrow-btn prev" aria-label="Previous">
                <FaChevronLeft />
              </span>
            }
            interval={6000}
            pause="hover"
          >
            {testimonials.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon">
                    <FaQuoteLeft />
                  </div>

                  {/* 5-Star Rating & Verified Badge */}
                  <div className="testimonial-meta-top">
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                    <div className="testimonial-badge">
                      <FaCheckCircle className="badge-icon" />
                      <span>
                        {t(
                          "regular.testimonials.verified",
                          "ვერიფიცირებული მესაკუთრე"
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="testimonial-text">"{item.text}"</p>

                  {/* Author Footer */}
                  <div className="testimonial-author">
                    <div className="author-avatar-wrap">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="author-avatar"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{item.name}</h4>
                      <span className="author-role">{item.role}</span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
