import { useContext, useState } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../context/CurrentUser";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  console.log(item);

  const handleCardClick = () => {
    console.log(item);
    onCardClick(item);
  };

  function isLiked(value, array) {
    return array.indexOf(value) > -1;
  }
  const toggleLike = () => {
    handleCardLike({
      _id: item._id,
      isLiked: isLiked(currentUser?._id, item.likes),
    });
  };

  console.log(isLiked(currentUser?._id, item.likes));

  return (
    <li className="card">
      <div className="card__like-container">
        <h2 className="card__name">{item.name}</h2>
        <button
          onClick={toggleLike}
          className={`like-button ${
            isLiked(currentUser?._id, item.likes) ? "liked" : ""
          }`}
        >
          {isLiked(currentUser?._id, item.likes) ? "❤️" : "🤍"}
        </button>
      </div>

      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
