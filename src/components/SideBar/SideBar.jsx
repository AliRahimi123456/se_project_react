import avatar from "../../assets/avatar.svg";
import "./SideBar.css";

function SideBar({ onLogout }) {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={avatar} alt="name-avatar" />
        <p className="sidebar__username">Terrence Tegega</p>
      </div>
      <button className="sidebar__btn" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
}

export default SideBar;
