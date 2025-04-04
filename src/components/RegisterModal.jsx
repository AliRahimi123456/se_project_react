import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import "./ModalWithForm/ModalWithForm.css";
const RegisterModal = ({ onClose, onRegister, isOpen, onLogInClick }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid =
    name.trim() !== "" && email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(onRegister);
    onRegister({ name, avatar, email, password });
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      title="SignUp"
      buttonText="SignUp"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      {/* <button
        type="button"
        className="modal__close-btn"
        onClick={onClose}
        aria-label="Close modal"
      ></button> */}
      {/* <h>Register</h> */}
      <label className="modal__label">
        {" "}
        Name
        <input
          className="modal__input"
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        {" "}
        Avatar URL
        <input
          className="modal__input"
          type="text"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <div className="modal__button-container">
        <button
          type="submit"
          className={`modal__primary-btn ${
            !isValid ? "modal__primary-btn_disabled" : ""
          }`}
          disabled={!isValid}
        >
          Sign Up
        </button>
        <button
          className="modal__secondary-btn"
          type="button"
          onClick={onLogInClick}
        >
          or Log In
        </button>
      </div>
      {/* <button type="button" onClick={onClose}>
          Cancel
        </button> */}
    </ModalWithForm>
  );
};

export default RegisterModal;
