import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../utils/constants";
import Header from "./Header/Header";
import Main from "./Main/Main.jsx";
import ItemModal from "./ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import Footer from "./Footer/Footer.jsx";
import CurrentTemperatureUnitContext from "../context/CurrentTemperatureUnitContext";
import AddItemModal from "./AddItemModal/AddItemModal.jsx";
import Profile from "./Profile/Profile.jsx";
import {
  addItems,
  getItems,
  deleteItem,
  removeCardLike,
  addCardLike,
} from "../utils/api.js";
import RegisterModal from "../components/RegisterModal";
import LoginModal from "../components/LoginModal";
import { registerUser, loginUser, checkToken } from "../utils/auth";
import { CurrentUserContext } from "../context/CurrentUser.js";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // Checking for the existing token
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token).then((res) => {
        console.log(res);
        if (res.data) {
          setUser(res.data);
          setIsLoggedIn(true);
        }
      });
    }
  }, []);

  // Handling Registration
  const handleRegister = (userData) => {
    registerUser(userData).then((res) => {
      if (res.email) {
        handleLogin({ email: userData.email, password: userData.password });
        closeActiveModal();
      }
    });
  };

  // Handling Login
  const handleLogin = (credentials) => {
    loginUser(credentials).then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        checkToken(res.token).then((user) => setUser(user.data));
        closeActiveModal();
      }
    });
  };

  // Handling Sign Up Click
  const onSignUpClick = () => {
    console.log("is this onSignUpclick firing");
    setActiveModal("register-modal");
  };
  //Handling Log In modal
  const onLogInClick = () => {
    console.log("is this firing");
    setActiveModal("login-modal");
  };

  // Handling Logout
  const handleLogout = (e) => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUser(null);
  };

  // Handling card liking
  const handleCardLike = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // const apiCall = isLiked ? api.removeCardLike : api.addCardLike;

    if (isLiked) {
      removeCardLike(_id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === _id ? updatedCard.data : item))
          );
        })
        .catch(console.log);
    } else {
      addCardLike(_id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === _id ? updatedCard.data : item))
          );
        })
        .catch(console.log);
    }
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
    const token = localStorage.getItem("jwt");
    addItems(name, imageUrl, weather, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  // Fetch Weather Data
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  // Fetch Clothing Items
  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data.data);
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <CurrentUserContext.Provider value={user}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              onLogInClick={onLogInClick}
              onSignUpClick={onSignUpClick}
              handleAddClick={handleAddClick}
              weatherData={weatherData}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    onLogout={handleLogout}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onAddNewClick={handleAddClick}
                    handleCardLike={handleCardLike}
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
          <RegisterModal
            isOpen={activeModal === "register-modal"}
            onClose={closeActiveModal}
            onRegister={handleRegister}
            onLogInClick={onLogInClick}
          />
          <LoginModal
            isOpen={activeModal == "login-modal"}
            onClose={closeActiveModal}
            onSignUpClick={onSignUpClick}
            handleLogin={handleLogin}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
