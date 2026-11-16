import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.png";

const MenuButton = styled.button`
  display: none;
  background: rgba(11, 19, 32, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 8px;
  z-index: 100001;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 18px;
    top: 18px;
    width: 44px;
    height: 40px;
  }

  span {
    display: block;
    width: 24px;
    height: 2.5px;
    margin: 2.5px 0;
    position: relative;
    background: #f8fafc;
    border-radius: 2px;
    z-index: 1;
    transform-origin: 50% 50%;
    transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &.open {
    border-color: #dfb743;
    background: rgba(11, 19, 32, 0.95);
  }

  &.open span:first-child {
    transform: rotate(45deg) translate(5px, 5px);
    background: #dfb743;
  }

  &.open span:nth-child(2) {
    opacity: 0;
    transform: scale(0);
  }

  &.open span:last-child {
    transform: rotate(-45deg) translate(5px, -5px);
    background: #dfb743;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(8, 14, 24, 0.75);
    backdrop-filter: blur(4px);
    z-index: 99998;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;

    &.open {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  background: linear-gradient(180deg, #0b1320 0%, #080e18 100%);
  border-left: 1px solid rgba(212, 175, 55, 0.25);
  transition: right 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: -15px 0 45px rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  padding: 85px 20px 40px;
  z-index: 99999;
  display: flex;
  flex-direction: column;

  &.open {
    right: 0;
  }

  .menu-header {
    margin-bottom: 25px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    text-align: center;
  }

  .mobile-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-logo .navbar-logo {
    height: 42px;
    width: auto;
    object-fit: contain;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-grow: 1;
  }

  li {
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  a {
    font-family: 'Plus Jakarta Sans', 'Noto Sans Georgian', sans-serif;
    color: #f1f5f9;
    text-decoration: none;
    display: block;
    padding: 14px 10px;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    position: relative;
    overflow: hidden;
    transition: color 0.25s ease, padding-left 0.25s ease;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #dfb743, #c59b27);
      transition: left 0.3s ease;
    }

    &:hover {
      color: #dfb743;
      padding-left: 16px;

      &:after {
        left: 0;
      }
    }
  }

  .mobile-language-switcher {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f1f5f9;
    font-family: 'Plus Jakarta Sans', 'Noto Sans Georgian', sans-serif;
    font-size: 14px;
    font-weight: 600;

    .language-label {
      color: #94a3b8;
    }

    .language-select {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(212, 175, 55, 0.35);
      color: #dfb743;
      padding: 6px 14px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      font-size: 13px;
      outline: none;
      transition: all 0.25s ease;

      &:focus, &:hover {
        background: rgba(255, 255, 255, 0.16);
        border-color: #dfb743;
      }

      option {
        background: #0b1320;
        color: #f8fafc;
        padding: 8px;
      }
    }
  }
`;

const MobileMenu = ({ links }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toggleMenu(); // Close menu after language change
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  };

  if (!isMobile) return null;

  const drawerContent = (
    <>
      <Overlay className={isOpen ? "open" : ""} onClick={toggleMenu} />
      <NavMenu className={isOpen ? "open" : ""}>
        <div className="menu-header">
          <div className="mobile-logo">
            <img src={Logo} alt={t("common.logo")} className="navbar-logo" />
          </div>
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={toggleMenu}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-language-switcher">
          <span className="language-label">{t("common.language")}</span>
          <select
            className="language-select"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="ka">KA</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </NavMenu>
    </>
  );

  return (
    <>
      <MenuButton
        className={isOpen ? "open" : ""}
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>

      {createPortal(drawerContent, document.body)}
    </>
  );
};

export default MobileMenu;
