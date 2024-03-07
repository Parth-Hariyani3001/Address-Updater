/* eslint-disable react/prop-types */
import { useState } from "react";

function Modal({ title, children, dispatch }) {
  const [showModal, setShowModal] = useState(true);

  return (
    
    <div
      className={
        showModal
          ? "fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg"
          : "hidden"
      }
    >
      <div
        className="bg-white rounded-lg p-6 w-96 max-w-full shadow-lg transform transition-all duration-300"
        style={{ opacity: showModal ? 1 : 0 }}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4 mb-5">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            onClick={() => {
              dispatch({ type: "close" });
              setShowModal(false);
            }}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
