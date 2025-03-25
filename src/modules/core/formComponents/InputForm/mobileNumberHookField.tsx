import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import MobileNumberInputField from "../../components/Fields/mobileNumberField";
export type MobileNumberFieldProps = {
  label: string;
  subLabel?: string;
  name: string;
  control: Control<any>;
  required?: boolean;
  placeHolder: string;
  className?: string;
  errorMessage?: string;
  isStarRequired?: boolean;
};
const MobileNumberField: FC<MobileNumberFieldProps> = ({
  label,
  subLabel,
  name,
  control,
  required,
  className,
  placeHolder,
  errorMessage,
  isStarRequired,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-small  text-gray-500 pb-1 w-full">
        {label}
        <span className="text-exrtaSmall ml-1 font-normal">{subLabel}</span>
        {isStarRequired && <span className="text-brand-red">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required && errorMessage ? errorMessage : required,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <MobileNumberInputField
            value={value}
            onChange={onChange}
            errors={error}
            className={className}
            name={name}
            placeHolder={placeHolder}
          />
        )}
      />
    </div>
  );
};

export default MobileNumberField;
