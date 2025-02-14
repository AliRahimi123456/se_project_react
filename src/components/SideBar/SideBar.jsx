import avatar from "../../assets/avatar.svg";


function SideBar() {
    return (
        <div className="sidebar">
          <img className="sidebar__avatar" src={avatar} alt="name-avatar"/>
          <p className="sidebar__username"></p>
        </div>
    );
}

export default SideBar;