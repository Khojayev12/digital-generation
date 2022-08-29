import "../assets/styles/header.css";
import logo from "../assets/images/logodg.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
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
  );
}
