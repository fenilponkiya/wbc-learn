import { FC, useEffect } from "react";
import { Controller } from "react-hook-form";
import { FormInputFieldProps } from "@/models/DVM/components.dvm";
import { REGX_CONST } from "@/models/constants/core";
import InputField from "../../components/Fields/input";

const FormInputField: FC<FormInputFieldProps> = ({
  name,
  control,
  label,
  labelStyle = "text-small text-brand-gray-500",
  type,
  placeholder,
  required,
  onKeyDown,
  errorMessage,
  onHandleChange,
  max,
  readonly,
  onClick,
  formValue,
  setValue,
  trigger,
  trimmed = false, // Default to false
  isCharacterValidation = true,
  isLinkValidation = false,
  className,
  isStarRequired = false,
}: FormInputFieldProps) => {
  useEffect(() => {
    if (readonly && formValue) {
      setValue?.(name, formValue);
      trigger?.(name);
    }
  }, [readonly, formValue, setValue, name]);

  let pattern;
  if (type === "email") {
    pattern = {
      value: REGX_CONST.EMAIL,
      message: "Please enter valid email address",
    };
  } else if (type === "password" && isCharacterValidation) {
    pattern = {
      value: REGX_CONST.PASSWORD,
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character",
    };
  } else if (isLinkValidation) {
    pattern = {
      value: REGX_CONST.URL,
      message: "Please enter valid link",
    };
  } else if (trimmed) {
    pattern = {
      value: /^\S+$/,
      message: "Spaces are not allowed in the event's short link.",
    };
  } else {
    pattern = undefined;
  }

  return (
    <div>
      <div className="flex">
        <label className={labelStyle}>{label}</label>
        {isStarRequired && <span className="text-brand-red">*</span>}
      </div>
      <Controller
        name={name}
        control={control}
        defaultValue={formValue || ""}
        rules={{
          required: required && errorMessage ? errorMessage : required,
          pattern: pattern,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputField
            onClick={onClick}
            name={name}
            label={label}
            value={value ?? formValue ?? ""}
            onChange={onChange || onHandleChange}
            type={type}
            className={className}
            readonly={readonly}
            placeholder={placeholder}
            errors={error}
            required={required}
            onKeyDown={onKeyDown}
            max={max}
          />
        )}
      />
    </div>
  );
};

export default FormInputField;
