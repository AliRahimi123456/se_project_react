import { useContext } from "react";
import avatar from "../../assets/avatar.svg";
import { CurrentUserContext } from "../../context/CurrentUser";
import "./SideBar.css";

function SideBar({ onLogout, onEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);
  console.log(onEditProfileClick);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar}
          alt="name-avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__btns-container">
        <button className="sidebar__open-modal" onClick={onEditProfileClick}>
          Change Profile Data
        </button>
        <button className="sidebar__btn" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
