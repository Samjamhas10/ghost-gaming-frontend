import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {};

  const onLogin = (event) => {
    event.preventDefault();
    handleLogin(true);
  };

  return (
    <ModalWithForm>
      <label className="login__modal">Email</label>
      <input
        className="modal__input"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
        required
      ></input>
      <label className="password__type">Password</label>
      <input
        className="modal__input"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
        required
      ></input>
      <div className="login__buttons">
        <button type="submit" className="modal__submit modal__submit-login">
          Log In
        </button>
        <button type="submit" className="modal__submit modal__submit-singup">
          Don't Have An Account? Sign Up Here
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
