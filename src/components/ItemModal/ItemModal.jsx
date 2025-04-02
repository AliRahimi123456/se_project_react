import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUser";
import "./ItemModal.css";
function ItemModal({ activeModal, onClose, card, handleDeleteClick }) {
  console.log("Item Modal Received:", card);
  const user = useContext(CurrentUserContext);
  console.log(user);
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <img
          src={card?.imageUrl}
          alt={card?.name}
          className="modal__image"
        ></img>
        <div className="modal__footer">
          <div className="modal__footer-info">
            <h2 className="modal__caption">{card?.name}</h2>
            <p className="modal__weather">Weather: {card?.weather}</p>
          </div>
          {card.owner === user._id && (
            <button
              className="modal__delete-item"
              onClick={() => handleDeleteClick(card._id)}
            >
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
