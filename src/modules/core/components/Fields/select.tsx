import React from "react";
import SelectInputOtionWBC from "../../formComponents/InputForm/selectInputOption";
import {
  WBCSelectFormType,
  WBCSelectOptionType,
} from "@/models/DVM/components.dvm";

interface FormControlProps {
  errors: Record<string, any> | undefined;
  onChange: (e: any) => void;
}
type SelectFieldProps = FormControlProps & WBCSelectFormType;

const SelectField: React.FC<SelectFieldProps> = ({
  className,
  errors,
  placeholder,
  isFirstOptionDisabled,
  SelectInputProps,
  defaultOption,
  hasDefault = false,
  onChange,
  name,
  value,
  errorMessage,
}) => {
  return (
    <>
      <select
        defaultValue=""
        value={value}
        onChange={onChange}
        className={`${className ? className : ""} border text-small ${
          errors && errors?.type ? "border-red-500" : "border-gray-500"
        } focus:outline-none rounded-md p-2 w-full text-gray-500`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {SelectInputProps.selectOptions.map(
          (option: WBCSelectOptionType, index: number) => (
            <SelectInputOtionWBC
              {...option}
              key={hasDefault ? index + 1 : index}
            />
          )
        )}
      </select>
      {errors && errors?.type && (
        <p className="text-red-500 text-normal">{errors?.message}</p>
      )}
    </>
  );
};

export default SelectField;
