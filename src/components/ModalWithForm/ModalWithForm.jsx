import { useEffect } from "react";
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
  const closeModalOverlay = (evt) => {
    evt.stopPropagation(); // prevents modal from closing when clicking inside it
  };

  useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`} onClick={onClose}>
      <div
        className={`modal__content ${contentClass}`}
        onClick={closeModalOverlay}
      >
        <h2 style={titleStyles} className={titleClass}>
          {title}
        </h2>
        <button className="modal__close" type="button" onClick={onClose}>
          X
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
