"use client";
import { DialogBlockProps } from "@/models/DVM/components.dvm";
import React, { FC, ReactNode } from "react";

const DialogBlock: FC<DialogBlockProps> = ({
  children,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <div
        className={`${
          showModal ? "block" : "hidden"
        } fixed inset-0 flex items-center
                        justify-center bg-black bg-opacity-50`}
      >
        <div
          className="bg-white rounded-lg
                            shadow-lg p-6 max-w-md
                            w-full relative"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DialogBlock;
