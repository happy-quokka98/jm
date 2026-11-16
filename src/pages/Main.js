import React, { useEffect } from "react";

import { DesignCards } from "./designs/DesignCards .js";

import Testimonial from "./testimonial/Testimonial.js";
import Staff from "./staff/Staff.js";
import Contact from "./contact/Contact.js";
import Whyus from "./why/Whyus.js";
import Listing from "./listing/Listing.js";
import About from "./about/About.js";
import Hero from "./hero/Hero.js";
import Director from "./director/Director.js";
import House from "./house/House.js";

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".header_section");
      if (window.scrollY > 400) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="director">
        <Director />
      </section>

      <section id="listing">
        <Listing />
      </section>

      <section id="house">
        <House />
      </section>

      <section id="design">
        <DesignCards />
      </section>

      <section id="about">
        <About />

        <Whyus />
        <Testimonial />
      </section>

      <section id="staff">
        <Staff />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Main;
