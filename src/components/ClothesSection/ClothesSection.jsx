import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";


function ClothesSection({ weatherData }) {
    return (
      <div className="clothes-section">
        <div>
          <p>Your items</p>
          <button>+ Add New Items</button>
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