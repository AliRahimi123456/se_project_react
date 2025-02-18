import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";


function ClothesSection({ weatherData }) {
    return (
      <div className="clothes-section">
        <div className="clothes-section__header">
          <p className="clothes-section__title">Your items</p>
          <button className="clothes-section__add-btn">+ Add New</button>
        </div>
        <ul className="clothes-section__items">
          {defaultClothingItems
            .filter((item) => item.weather === weatherData?.type) 
            .map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
        </ul>
      </div>
    );
  }
  
  export default ClothesSection;