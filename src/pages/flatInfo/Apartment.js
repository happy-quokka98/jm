import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApartmentByNumber } from "../../utils/apartmentApi";
import "./Apartment.css";
import studio1 from "../applan/studio/1.png";
import studio2 from "../applan/studio/2.png";
import studio3 from "../applan/studio/3.png";

import abig1 from "../applan/abig/1.png";
import abig2 from "../applan/abig/2.png";
import abig3 from "../applan/abig/3.png";

import ahuge1 from "../applan/ahuge/1.png";
import ahuge2 from "../applan/ahuge/2.png";
import ahuge3 from "../applan/ahuge/3.png";

import bbig1 from "../applan/bbig1/1.png";
import bbig2 from "../applan/bbig1/2.png";
import bbig3 from "../applan/bbig1/3.png";

import abbig1 from "../applan/abbig/1.jpg";
import abbig2 from "../applan/abbig/2.jpg";
import abbig3 from "../applan/abbig/3.jpg";

import curve1 from "../applan/curve/curve1.png";
import curve2 from "../applan/curve/curve2.png";
import curve3 from "../applan/curve/curve3.png";
import curve4 from "../applan/curve/curve4.png";
import curve5 from "../applan/curve/curve5.png";

import bcurve1 from "../applan/bcurve/bcurve1.jpeg";
import bcurve2 from "../applan/bcurve/bcurve2.jpeg";
import bcurve3 from "../applan/bcurve/bcurve3.jpeg";

import csmall1 from "../applan/csmall/1.png";
import csmall2 from "../applan/csmall/2.png";
import csmall3 from "../applan/csmall/3.png";

import csix1 from "../applan/csix/1.png";
import csix2 from "../applan/csix/2.png";
import csix3 from "../applan/csix/3.png";

import c111 from "../applan/c11/NEW1.png";
import c112 from "../applan/c11/NEW2.png";
import c113 from "../applan/c11/NEW3.png";

import c121 from "../applan/c12/1.png";
import c122 from "../applan/c12/2.png";
import c123 from "../applan/c12/3.png";

import c131 from "../applan/c13/1.png";
import c132 from "../applan/c13/2.png";
import c133 from "../applan/c13/3.png";

import c141 from "../applan/c14/1.png";
import c142 from "../applan/c14/2.png";
import c143 from "../applan/c14/3.png";

import c151 from "../applan/c15/1.png";
import c152 from "../applan/c15/2.png";
import c153 from "../applan/c15/3.png";

import corner1 from "../applan/corner/1.png";
import corner2 from "../applan/corner/2.png";
import corner3 from "../applan/corner/3.png";


import mirror11 from "../applan/mirror1/1.jpeg";
import mirror12 from "../applan/mirror1/2.jpeg";
import mirror13 from "../applan/mirror1/3.jpeg";


import mirror21 from "../applan/mirror2/1.jpeg";
import mirror22 from "../applan/mirror2/2.jpeg";
import mirror23 from "../applan/mirror2/3.jpeg";
import mirror24 from "../applan/mirror2/4.jpeg";
import mirror25 from "../applan/mirror2/5.jpeg";
const Apartment = () => {
  const { apartmentNumber } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [chosenPhone, setChosenPhone] = useState(null);

  const lastTwoChars = apartmentNumber?.slice(-2);
  const blockLetter = apartmentNumber?.[0];

  const useStudioImages =
    (["02", "03", "05", "12"].includes(lastTwoChars) && blockLetter === "B") ||
    (blockLetter === "A" && ["04", "05", "06", "11"].includes(lastTwoChars)) ||
    (blockLetter === "C" &&
      ["02", "03", "04", "05", "09"].includes(lastTwoChars));

  const useABigImages =
    (blockLetter === "A" && ["01", "14"].includes(lastTwoChars)) ||
    (blockLetter === "B" && ["06", "11"].includes(lastTwoChars));

  const useABigImages1 =
    (blockLetter === "A" && ["03", "13"].includes(lastTwoChars)) ||
    (blockLetter === "B" && ["07", "10"].includes(lastTwoChars));


  const useABigImages2 =
    blockLetter === "A" && ["02", "12"].includes(lastTwoChars);


  const useAHugeImages = blockLetter === "A" && ["09"].includes(lastTwoChars);

  const useBHugeImages =
    blockLetter === "B" && ["08", "01"].includes(lastTwoChars);

  const abbig =
    (["04", "09"].includes(lastTwoChars) && blockLetter === "B") ||
    (blockLetter === "A" && ["07"].includes(lastTwoChars));

  const acurve =
    (["10"].includes(lastTwoChars) &&
      blockLetter === "A") ||
    (blockLetter === "B" &&
      ["13", "14"].includes(lastTwoChars));

  const bcurve = blockLetter === "A" && ["08"].includes(lastTwoChars);

  const csmall =
    blockLetter === "C" && ["01", "08", "10"].includes(lastTwoChars);

  const csix = blockLetter === "C" && ["06"].includes(lastTwoChars);

  const c11 = blockLetter === "C" && ["11"].includes(lastTwoChars);

  const c12 = blockLetter === "C" && ["12"].includes(lastTwoChars);

  const c13 = blockLetter === "C" && ["13"].includes(lastTwoChars);

  const c14 = blockLetter === "C" && ["14"].includes(lastTwoChars);

  const c15 = blockLetter === "C" && ["15"].includes(lastTwoChars);

  const corner = blockLetter === "C" && ["07"].includes(lastTwoChars);

  const imageUrls = useStudioImages
    ? [studio1, studio2, studio3]
    : useABigImages
    ? [abig1, abig2, abig3]
    : useAHugeImages
    ? [ahuge1, ahuge2, ahuge3]
    : useBHugeImages
    ? [bbig1, bbig2, bbig3]
    : abbig
    ? [abbig1, abbig2, abbig3]
    : acurve
    ? [curve1, curve2, curve3, curve4, curve5]
    : bcurve
    ? [bcurve1, bcurve2, bcurve3]
    : csmall
    ? [csmall1, csmall2, csmall3]
    : csix
    ? [csix1, csix2, csix3]
    : c11
    ? [c111, c112, c113]
    : c12
    ? [c121, c122, c123]
    : c13
    ? [c131, c132, c133]
    : c14
    ? [c141, c142, c143]
    : c15
    ? [c151, c152, c153]
    : corner
    ? [corner1, corner2, corner3]
    :useABigImages1
    ?[mirror11,mirror12,mirror13]
    :useABigImages2
    ?[mirror21,mirror22,mirror23,mirror24,mirror25]
    : [
        "https://placehold.co/800x500/31353b/ffffff?text=Living+Room",
        "https://placehold.co/800x500/3b3f46/ffffff?text=Bedroom",
        "https://placehold.co/800x500/2e3136/ffffff?text=Kitchen",
        "https://placehold.co/800x500/4a4f56/ffffff?text=Bathroom",
      ];

  const phoneNumbers = ["577550905", "555282865"]; // Without spaces for tel: links

  useEffect(() => {
    if (!apartmentNumber) return;

    let isMounted = true;
    const loadApartment = async () => {
      try {
        const data = await fetchApartmentByNumber(apartmentNumber);
        if (isMounted && data) {
          setApartmentData(data);
        }
      } catch (error) {
        console.error("Error fetching apartment data:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadApartment();
    return () => {
      isMounted = false;
    };
  }, [apartmentNumber]);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleCallLinkClick = (e) => {
    if (!chosenPhone) {
      const random =
        phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
      setChosenPhone(random);
    }
  };

  const calculateTotalPrice = () => {
    return apartmentData ? apartmentData.price * apartmentData.squareMeter : 0;
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!apartmentData)
    return <div className="not-found">Apartment not found.</div>;

  return (
    <div className="apartment-wrapper">
      <div className="slider-box">
        <img
          src={imageUrls[currentImage]}
          alt="Apartment"
          className="slider-image"
        />
        <div className="slider-controls">
          <button onClick={handlePrev}>&#10094;</button>
          <button onClick={handleNext}>&#10095;</button>
        </div>
      </div>

      <div className="apartment-card">
        <div className="info-block">
          <h2 className="apartment-title">
            Apartment {apartmentData.apartmentNumber}
          </h2>
          <div className="price">
            <h3>
              Price per m²: <span>${apartmentData.price}</span>
            </h3>
            <h3>
              Total Price: <span>${calculateTotalPrice()}</span>
            </h3>
          </div>
          <ul className="apartment-info">
            <li>
              <strong>Size:</strong> {apartmentData.squareMeter} m²
            </li>
            <li>
              <strong>Status:</strong>{" "}
              <span className={`status ${apartmentData.status}`}>
                {apartmentData.status}
              </span>
            </li>
          </ul>
        </div>

        <div className="action-block">
          <h3>Your Dream Apartment Awaits</h3>
          <p>
            Modern, comfortable, and stylish living — tailored to your
            lifestyle.
          </p>
          {/* <button className="btn primary">Book a Viewing</button> */}

          <a
            className="btn secondary"
            href={`tel:${
              chosenPhone ||
              phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)]
            }`}
            onClick={handleCallLinkClick}
          >
            Call Agent
          </a>

          {chosenPhone && (
            <p className="phone-number">
              Calling: <strong>{chosenPhone}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
