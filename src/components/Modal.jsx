"use client";

import { X } from "lucide-react";
import React from "react";
import CustomButton from "./buttons/CustomButton";

const Modal = ({ modalContent, setShowModal, onDelete }) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
      <div className="w-full max-w-[450px] h-auto min-h-[100px] bg-white rounded shadow-xl px-6 py-8 relative">
        <button
          onClick={() => setShowModal(null)}
          className="absolute right-2 top-2 cursor-pointer"
        >
          <X size={18} />
        </button>
        <p>{modalContent}</p>
        <div className="pt-12 flex items-center gap-4 justify-end">
          <CustomButton
            onClick={() => setShowModal(null)}
            label="Odustani"
            classNameBg="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-500 hover:from-slate-600 hover:via-slate-700 hover:to-slate-600"
          />
          <CustomButton
            label="Izbriši"
            classNameBg="bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-700 hover:via-red-800 hover:to-red-700"
            onClick={() => onDelete()}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
