// TODO - import useContext from react
import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext.js";
// import { defaultClothingItems } from "../../../../utils/constants";

function Main({ weatherData, handleCardClick, clothingItems, handleCardLike }) {
  // TODOS: call useContext and destructure the currentTemperatureUnit
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
          {currentTemperatureUnit}. You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              // console.log(item);

              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  handleCardLike={handleCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
