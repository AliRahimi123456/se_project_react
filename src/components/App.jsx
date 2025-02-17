import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../utils/constants";
import Header from "./Header/Header";

import Main from "./src/components/Main/Main";
// import ModalWithForm from "./src/components/ModalWithForm";
import ItemModal from "./src/components/ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import Footer from "./Footer/Footer.jsx";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx";
import AddItemModal from "./AddItemModal/AddItemModal.jsx";
import Profile from "./Profile/Profile.jsx";
import { defaultClothingItems } from "../utils/constants";
import { getItems } from "../utils/api.js";


function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [clothingItems, setClothingItems] = useState (defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  console.log(currentTemperatureUnit);


  const handleToggleSwitchChange = () =>  {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
    };


 
  const handleCardClick = (card) => {
    setActiveModal("preview");
    console.log(card);
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    //update clothingItems array
    setClothingItems([ { name, link: imageUrl, weather }, ...clothingItems]);
    //close the modal
    closeActiveModal();
  }
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
        // debugger;
      })
      .catch(console.error);

  }, []);
  useEffect(() => {
  getItems()
  .then((data) => {
    console.log(data)

    //set the clothing items
  })
  .catch(console.error);
      
  }, []);
  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Routes>
          <Route path="/" element=
          //pass clothingItems as a prop
          {<Main weatherData={weatherData} handleCardClick={handleCardClick} clothingItems={clothingItems}/>}/>
          <Route path="/profile" element={<Profile handleCardClick={handleCardClick}/>} />
        </Routes>
        
      </div>
      <Footer/>
   <AddItemModal 
   isOpen={activeModal === "add-garment"}
   onClose={closeActiveModal} onAddItemModalSubmit={handleAddItemModalSubmit}
   />
      {activeModal == "preview" && (
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      )}
    </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
