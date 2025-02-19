// TODO - import useContext from react
import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";
import ItemCard from "../../../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../../../contexts/CurrentTemperatureUnitContext";
// import { defaultClothingItems } from "../../../../utils/constants";

function Main({ weatherData, handleCardClick, clothingItems }) {
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
              console.log(item.weather, weatherData.type);
              return item.weather === weatherData.type;
            })
            .map((item) => {
              console.log(item);
              console.log("showing the items");
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
