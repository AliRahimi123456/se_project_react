import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({
  clothingItems,
  currentUser,
  handleCardClick,
  onAddNewClick,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-btn" onClick={onAddNewClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems
          //TODO compare item.owner to currentUser._id
          .filter((item) => item.owner === currentUser?._id)
          // .filter((item) => item.weather === weatherData?.type)
          .map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
