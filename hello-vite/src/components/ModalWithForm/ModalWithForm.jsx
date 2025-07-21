import { useState } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  onSubmit,
  isOpen,
  onClose,
  title,
  titleStyles,
  titleClass,
  contentClass,
}) {
  const [formData, setFormData] = useState("");
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className={`modal__content ${contentClass}`}>
        <h2 style={titleStyles} className={titleClass}>
          {title}
        </h2>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
