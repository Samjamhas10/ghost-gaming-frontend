import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./UpdateProfile.css";

function UpdateProfile() {
  return (
    <ModalWithForm>
      <button type="submit" className="modal__submit modal__submit-profile">
        Save changes
      </button>
    </ModalWithForm>
  );
}

export default UpdateProfile;
