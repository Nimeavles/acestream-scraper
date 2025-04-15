import { X } from "lucide-react";
import React, { JSX } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
}: ModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-start justify-center z-50"
      onClick={onClose}
    >
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div
        className="bg-white dark:bg-border p-4 rounded shadow-lg max-w-lg mx-4 mt-32 relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        >
          <X size={30} />
        </button>
        {children}
      </div>
    </div>
  );
};
