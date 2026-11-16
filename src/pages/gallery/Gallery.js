import React, { useState } from "react";
import "../../css/gallery.css";

import ft1 from "../../assets/ft1.jpg";
import ft2 from "../../assets/ft2.jpg";
import ft3 from "../../assets/ft3.jpg";
import ft4 from "../../assets/ft4.jpg";
import ft5 from "../../assets/ft5.jpg";
import ft6 from "../../assets/ft6.jpg";
import ft7 from "../../assets/ft7.jpg";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [ft1, ft2, ft3, ft4, ft5, ft6, ft7];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`Feature ${index + 1}`}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <button className="nav-button prev" onClick={handlePrevImage}>
              &#8249;
            </button>
            <div className="modal-content">
              <img src={images[selectedIndex]} alt="Enlarged view" />
            </div>
            <button className="nav-button next" onClick={handleNextImage}>
              &#8250;
            </button>
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
