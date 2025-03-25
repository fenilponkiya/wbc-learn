"use client";
import { DialogBlockProps } from "@/models/DVM/components.dvm";
import React, { FC } from "react";

const DialogBlock: FC<DialogBlockProps> = ({
  children,
  showModal,
  closeModal,
}) => {
  return (
    <div
      onClick={closeModal}
      className={`${
        showModal ? "block" : "hidden"
      } fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
      >
        {children}
      </div>
    </div>
  );
};

export default DialogBlock;
