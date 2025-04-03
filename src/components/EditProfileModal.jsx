import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../context/CurrentUser";

const EditProfileModal = ({ onUpdateProfile, onClose, isOpen }) => {
  const currentUser = useContext(CurrentUserContext);

  // State for input fields
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [isOpen, currentUser]);

  const isValid = name.trim() !== "" && avatar.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onUpdateProfile({ name, avatar });
    }
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Edit Profile"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="profileModal">
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="modal__label">
          Avatar URL
          <input
            className="modal__input"
            type="url"
            placeholder="Avatar-Url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className={`modal__primary-btn ${
            !isValid ? "modal__primary-btn_disabled" : ""
          }`}
          disabled={!isValid}
        >
          Save
        </button>

        <button
          type="button"
          onClick={onClose}
          className="modal__secondary-btn"
        >
          Close
        </button>
      </form>
    </ModalWithForm>
  );
};

export default EditProfileModal;
