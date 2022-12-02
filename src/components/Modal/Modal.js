import { useState } from "react";
import "./_Modal.scss";

function Modal({ setShowModal }) {
  return (
    <>
      <div className="modal-container">
        <div className="modal-close">
          <span onClick={() => setShowModal(false)}>
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Modal;
