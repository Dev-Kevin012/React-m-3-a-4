import React from "react";
import { useAppContext } from "../hooks/useAppContext";

const Modal = () => {
  const { modal } = useAppContext();
  if (modal.open) {
    document.getElementById("error-modal").showModal();
  }
  return (
    <dialog id="error-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-xl text-center bg-red-400 text-white py-3 rounded-md">
          Invalid Input!
        </h3>
        <p className="py-4 text-lg font-semibold">{modal.message}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Okay</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
