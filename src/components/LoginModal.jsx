import { useState } from "react";
import "./ModalWithForm/ModalWithForm.css";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
const LoginModal = ({ onClose, handleLogin, onSignUpClick, isOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(isOpen, "isopen login");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  const isValid = email.trim() !== "" && password.trim() !== "";

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign In"
      buttonText="Login"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      {/* <button
        type="button"
        className="modal__close-btn"
        onClick={onClose}
        aria-label="Close modal"
      ></button> */}
      {/* <h2>Log In</h2> */}
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            const inputText = event.target.value;
            setEmail(inputText);
          }}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            const inputText = event.target.value;
            setPassword(inputText);
          }}
        />
      </label>
      <div className="modal__button-container">
        <button
          type="submit"
          // className="modal__primary-btn"
          className={`modal__primary-btn ${
            !isValid ? "modal__primary-btn_disabled" : ""
          }`}
        >
          Log In
        </button>
        <button
          className="modal__secondary-btn"
          type="button"
          onClick={onSignUpClick}
        >
          or Sign Up
        </button>
      </div>

      {/* <button type="button" onclick={onClose}>
          Cancel
        </button> */}
    </ModalWithForm>
  );
};
export default LoginModal;
