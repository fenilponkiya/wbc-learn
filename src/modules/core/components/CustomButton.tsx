import React, { FC } from "react";
import { ButtonProps } from "./model/DVM/components.dvm";

export const CustomButton: FC<ButtonProps> = ({
  text,
  type,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      className={`bg-primary-light text-brand-white rounded-md p-2 w-full ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
