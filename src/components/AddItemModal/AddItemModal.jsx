import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", imageUrl: "", weather: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Promise.resolve(onAddItemModalSubmit(values))
      .then(() => {
        setValues({ name: "", imageUrl: "", weather: "" });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        console.log("Form submission process completed.");
      });
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image URL
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          value={values.imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            name="weather"
            type="radio"
            className="modal__radio-input"
            value="hot"
            onChange={handleChange}
            checked={values.weather === "hot"}
          />
          Hot
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            name="weather"
            type="radio"
            className="modal__radio-input"
            value="warm"
            onChange={handleChange}
            checked={values.weather === "warm"}
          />
          Warm
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="weather"
            type="radio"
            className="modal__radio-input"
            value="cold"
            onChange={handleChange}
            checked={values.weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
