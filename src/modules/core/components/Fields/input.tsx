import { FC, useState } from "react";
import Image from "next/image";
import HidePasswordIcon from "../../../../../public/auth/hidePassword.svg";
import ShowPasswordIcon from "../../../../../public/auth/showPassword.svg";
import { FormInputFieldProps } from "@/models/DVM/components.dvm";

type InputFieldProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | undefined;
  errors?: Record<string, any>;
  inputRef?: React.Ref<HTMLInputElement> | React.RefCallback<HTMLInputElement>;
  readonly?: boolean;
  errorMessage?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  max?: string | number;
  className?: string;
  disabled?: boolean;
};

type InputFieldTypes = FormInputFieldProps & InputFieldProps;

const InputField: FC<InputFieldTypes> = ({
  name,
  type = "text",
  placeholder,
  onChange,
  value,
  inputRef,
  readonly = false,
  errors,
  onKeyDown,
  max,
  onClick,
  className,
  disabled,
}: InputFieldTypes) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className={"w-full relative"}>
        <input
          onClick={onClick}
          disabled={disabled}
          ref={inputRef}
          readOnly={readonly}
          id={name}
          max={type === "date" ? max : undefined}
          className={`border ${
            errors && errors.type ? "border-red-500" : "border-gray-500"
          } focus:outline-none rounded-md p-2 w-full text-normal placeholder:text-brand-gray-500 ${className}`}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          type={showPassword && type === "password" ? "text" : type}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={handleTogglePasswordVisibility}
          >
            <Image
              src={showPassword ? ShowPasswordIcon : HidePasswordIcon}
              alt="Toggle Password Visibility"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>

      {errors && errors?.type && (
        <p className="text-brand-red text-normal">{errors?.message}</p>
      )}
    </>
  );
};

export default InputField;
