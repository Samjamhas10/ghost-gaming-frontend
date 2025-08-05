import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./UpdateProfileModal.css";

function UpdateProfileModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    username: "gamer12",
    bio: "I love to game, mostly at night.",
    avatarUrl:
      "https://images.unsplash.com/photo-1646950887163-25b5bff58eed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onProfile = (event) => {
    event.preventDefault();
    handleProfile(formData);
    onClose();
  };

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} onSubmit={onProfile}>
      <label>
        <input
          name="username"
          id="username"
          value={formData.username}
          type="text"
          onChange={handleChange}
          placeholder="Username"
        ></input>
        <input
          name="bio"
          id="bio"
          value={formData.bio}
          type="text"
          onChange={handleChange}
          placeholder="Bio"
        ></input>
        <input
          name="avatarUrl"
          id="avatarUrl"
          value={formData.avatarUrl}
          type="url"
          onChange={handleChange}
          placeholder="Avatar URL"
        ></input>
      </label>
      <button className="modal__submit modal__submit-profile">
        Save changes
      </button>
    </ModalWithForm>
  );
}

export default UpdateProfileModal;
