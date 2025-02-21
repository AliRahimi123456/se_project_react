import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../utils/constants";
import Header from "./Header/Header";
import Main from "./Main/Main.jsx";
import ItemModal from "./ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import Footer from "./Footer/Footer.jsx";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx";
import AddItemModal from "./AddItemModal/AddItemModal.jsx";
import Profile from "./Profile/Profile.jsx";
import { defaultClothingItems } from "../utils/constants";
import { addItems, getItems, deleteItem } from "../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  console.log(currentTemperatureUnit);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    console.log(card);
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteClick = (cardId) => {
    deleteItem(cardId)
      .then(() => {
        setClothingItems(clothingItems.filter((item) => item._id !== cardId));
        closeActiveModal();
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addItems(name, imageUrl, weather)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  onAddNewClick={handleAddClick}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItemModalSubmit={handleAddItemModalSubmit}
        />
        {activeModal === "preview" && (
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            handleDeleteClick={handleDeleteClick}
          />
        )}
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
