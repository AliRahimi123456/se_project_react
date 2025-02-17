
import { Link } from "react-router-dom"

import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import avatar from "../../assets/avatar.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
     <Link to="/">
        <img src={logo} alt="WTWR logo" className="header__logo" />
      </Link>
      <img src={logo} alt="TripleTen logo" className="header__logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
    
        + Add Clothes
      </button>
      <Link to="/profile" className="header__link">  
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="User avatar" className="header__avatar" />
        </div>
      </Link>
    </header>
  );
}

export default Header;

