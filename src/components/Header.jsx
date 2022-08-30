import "../assets/styles/header.css";
import logo from "../assets/images/logodg.svg";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="header">
        <img src={logo} alt="" className="header-logo" />

        <div className="header-menus">
          <div className="header-single-menu">
            <Link to="/" className="my-href">
              Bosh sahifa
            </Link>
          </div>
          <div className="header-single-menu">
            <Link to="/all-news" className="my-href">
              Barcha yangiliklar
            </Link>
          </div>
          <div className="header-single-menu">
            <Link to="/meetings" className="my-href">
              Uchrashuvlar
            </Link>
          </div>
          <div className="header-single-menu">
            <Link to="/oromgoh" className="my-href">
              IT oromgoh
            </Link>
          </div>
          <div className="header-single-menu">
            <Link to="/oav" className="my-href">
              OAV
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        <img src={logo} alt="" className="header-logo" />
        <HiMenu
          className="menu-hamburger"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        />
        <div
          className={
            isMenuOpen ? "mob-menu menu-active" : "mob-menu menu-deactive"
          }
        >
          <img src={logo} alt="" className="header-logo" />

          <CgClose
            className="menu-exit-btn"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
          <div className="mob-menu-sections">
            <div className="header-single-menu" onClick={closeMenu}>
              <Link to="/" className="my-href">
                Bosh sahifa
              </Link>
            </div>
            <div className="header-single-menu" onClick={closeMenu}>
              <Link to="/all-news" className="my-href">
                Barcha yangiliklar
              </Link>
            </div>
            <div className="header-single-menu" onClick={closeMenu}>
              <Link to="/meetings" className="my-href">
                Uchrashuvlar
              </Link>
            </div>
            <div className="header-single-menu" onClick={closeMenu}>
              <Link to="/oromgoh" className="my-href">
                IT oromgoh
              </Link>
            </div>
            <div className="header-single-menu" onClick={closeMenu}>
              <Link to="/oav" className="my-href">
                OAV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
