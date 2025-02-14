import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile(handleCardClick) {
    return (
        <div className="profile">
            <section className="profile__sidebar">
            <SideBar />
            </section>
            <section className="profile__clothing-items"></section>
            <ClothesSection handleCardClick={handleCardClick}/>
        </div>
    );
}

export default Profile;