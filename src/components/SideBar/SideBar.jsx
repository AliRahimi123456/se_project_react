import avatar from "../../assets/avatar.svg";
import "./SideBar.css";


function SideBar() {
    return (
        <div className="sidebar">
          <img className="sidebar__avatar" src={avatar} alt="name-avatar"/>
          <p className="sidebar__username">Terrence Tegega</p>
        </div>
    );
}

export default SideBar;