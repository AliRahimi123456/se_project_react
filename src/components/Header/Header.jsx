import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import avatar from "../../assets/avatar.svg";
import { CurrentUserContext } from "../Contexts/CurrentUser";

function Header({ handleAddClick, weatherData, onSignUpClick, onLogInClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="WTWR logo" className="header__logo" />
      </Link>
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
          <p className="header__username">{currentUser?.name}</p>
          <img src={avatar} alt="User avatar" className="header__avatar" />
        </div>
      </Link>
      {!currentUser && (
        <div className="header__btn-container">
          <button onClick={onSignUpClick} className="header__btn">
            Sign Up
          </button>
          <button onClick={onLogInClick} className="header__btn">
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
