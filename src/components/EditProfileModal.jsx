import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  currentUser,
  onUpdateProfile,
  onClose,
  isOpen,
}) => {
  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  console.log(name);
  console.log(avatar);
  const isValid = name.trim() !== "" && avatar.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({ name, avatar });
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      title="OpenProfileModal"
      buttonText="OpenProfileModal"
      onSubmit={handleSubmit}
    >
      <div className="profileModal">
        {/* <form onSubmit={handleSubmit}> */}
        <label className="modal__label">
          {" "}
          Name
          <input
            className="modal__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="modal__label">
          Avatar
          <input
            className="modal__input"
            type="url"
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
        >
          Save
        </button>
        {/* </form> */}
        {/* <button onclick={onClose}>Close</button> */}
      </div>
    </ModalWithForm>
  );
};
export default EditProfileModal;
