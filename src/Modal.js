import React from "react";
import "./Modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Popup Modal</h2>
        <p>This is a simple modal popup.</p>
      </div>
    </div>
  );
};

export default Modal;
