import { useState } from "react";
import { checkResponse } from "../../utils/IGDBApi";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./UpdateProfileModal.css";

function UpdateProfileModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleProfile = (formData) => {
    const token = localStorage.getItem("token");

    const { username, bio, avatarUrl } = formData;

    // API call
    return fetch("http://localhost:3004/users", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ username, bio, avatarUrl }),
    }).then(checkResponse);
  };

  const onProfile = (event) => {
    event.preventDefault();
    handleProfile(formData);
    onClose();
  };

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} onSubmit={onProfile}>
      <label className="profile__modal">Username*</label>
      <input
        className="modal__input"
        name="username"
        id="username"
        value={formData.username}
        type="text"
        onChange={handleChange}
        placeholder="Username"
      ></input>
      <label className="profile__modal">Bio*</label>
      <input
        className="modal__input"
        name="bio"
        id="bio"
        value={formData.bio}
        type="text"
        onChange={handleChange}
        placeholder="Bio"
      ></input>
      <label className="profile__modal">AvatarUrl*</label>
      <input
        className="modal__input"
        name="avatarUrl"
        id="avatarUrl"
        value={formData.avatarUrl}
        type="url"
        onChange={handleChange}
        placeholder="Avatar URL"
      ></input>
      <button className="modal__submit modal__submit-profile">
        Save changes
      </button>
    </ModalWithForm>
  );
}

export default UpdateProfileModal;
