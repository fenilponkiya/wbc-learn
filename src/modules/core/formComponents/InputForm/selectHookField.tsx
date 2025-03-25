import React from "react";
import { Control, Controller } from "react-hook-form";
import SelectField from "../../components/Fields/select";
import { WBCSelectFormType } from "@/models/DVM/components.dvm";

interface FormControlProps {
  control: Control<any>;
}
type SelectFormProps = FormControlProps & WBCSelectFormType;

const FormSelectField: React.FC<SelectFormProps> = (props: SelectFormProps) => {
  const {
    label,
    SelectInputProps,
    name,
    placeholder,
    isFirstOptionDisabled,
    errorMessage,
    required,
    hasDefault = false,
    defaultOption,
    control,
    labelStyle = "text-small text-brand-gray-500",
    className,
    isStarRequired = false,
  } = props;
  return (
    <div>
      <div>
        <label className={`${labelStyle} text-gray-500`}>{label}</label>
        {isStarRequired && <span className="text-brand-red">*</span>}
      </div>

      <Controller
        name={name}
        control={control}
        rules={{ required: required && errorMessage ? errorMessage : required }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <SelectField
            onChange={onChange}
            value={value}
            className={className}
            errors={error}
            placeholder={placeholder}
            errorMessage={errorMessage}
            isFirstOptionDisabled={isFirstOptionDisabled}
            SelectInputProps={SelectInputProps}
            defaultOption={defaultOption}
            hasDefault={hasDefault}
            name={name}
          />
        )}
      />
    </div>
  );
};

export default FormSelectField;
