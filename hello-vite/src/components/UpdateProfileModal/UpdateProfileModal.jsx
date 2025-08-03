import { useState } from "react";
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
          id=""
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
