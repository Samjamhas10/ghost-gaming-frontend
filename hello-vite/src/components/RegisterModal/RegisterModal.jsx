import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {};

  const onRegister = (event) => {
    event.preventDefault();
    handleRegister(true);
  };

  return (
    <ModalWithForm>
      <label className="register__modal">Email</label>
      <input
        className="modal__input"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
        required
      />
      <label className="register__modal">Password</label>
      <input
        className="modal__input"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
        required
      />
      <label className="register__modal">Name</label>
      <input
        className="modal__input"
        id="name"
        name="name"
        type="name"
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
        type="avatarUrl"
        placeholder="AvatarUrl"
        value={data.avatarUrl}
        onChange={handleChange}
        required
      />
      <div className="register__buttons">
        <button type="submit" className="modal__submit modal__submit-signup">
          Sign Up
        </button>
        <button type="submit" className="modal__submit modal__submit-login">
          Already Have An Account? Log In Here
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
