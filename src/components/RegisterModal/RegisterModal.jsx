import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ openLoginModal, isOpen, onClose, handleSignUp }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onRegister = (event) => {
    event.preventDefault();
    handleSignUp(data);
  };

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} onSubmit={onRegister}>
      <label className="register__modal">Email*</label>
      <input
        className="modal__input"
        id="email-register"
        name="email"
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
        required
      />
      <label className="register__modal">Password*</label>
      <input
        className="modal__input"
        id="password-register"
        name="password"
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
        required
      />
      <label className="register__modal">Name*</label>
      <input
        className="modal__input"
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
        required
      />
      <label className="register__modal">AvatarUrl</label>
      <input
        className="modal__input"
        id="avatarUrl"
        name="avatarUrl"
        type="url"
        placeholder="AvatarUrl"
        value={data.avatarUrl}
        onChange={handleChange}
      />
      <div className="register__buttons">
        <button type="submit" className="modal__submit modal__submit-signup">
          Sign Up
        </button>
        <button
          type="button"
          className="modal__submit modal__submit-signin"
          onClick={openLoginModal}
        >
          Already Have An Account? Log In Here
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
