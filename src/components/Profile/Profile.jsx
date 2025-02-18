import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ handleCardClick, clothingItems, onAddNewClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>

      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        onAddNewClick={onAddNewClick}
      />
    </div>
  );
}

export default Profile;
