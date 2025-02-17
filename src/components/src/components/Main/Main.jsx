import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";
import ItemCard from "../../../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../../../utils/constants";

function Main({ weatherData, handleCardClick, clothingItems }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
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
