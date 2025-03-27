import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  handleCardClick,
  clothingItems,
  onAddNewClick,
  onLogout,
  handleCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onLogout={onLogout} />
      </section>

      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        onAddNewClick={onAddNewClick}
        handleCardLike={handleCardLike}
      />
    </div>
  );
}

export default Profile;
