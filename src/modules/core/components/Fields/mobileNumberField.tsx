import "react-phone-number-input/style.css";
import React, { FC, memo } from "react";
import PhoneInput, {
  DefaultInputComponentProps,
} from "react-phone-number-input";

type WBCPhoneInputType = DefaultInputComponentProps & {};

const MobileNumberInputField: FC<WBCPhoneInputType> = (
  props: WBCPhoneInputType
) => {
  const { onChange, className, placeHolder, name, errors, ...rest } = props;
  return (
    <>
      <PhoneInput
        id="PhoneInputInput"
        international={true}
        countryCallingCodeEditable={true}
        className={`PhoneInputInput-force-custom border py-2 placeholder:text-brand-gray-500 ${
          errors && errors.type ? "border-red-500" : "border-gray-500"
        } `}
        onChange={onChange}
        placeholder={placeHolder}
        {...rest}
      />
      {errors && errors.type && (
        <p className="text-red-500 text-normal">{errors?.message}</p>
      )}
    </>
  );
};

export default memo(MobileNumberInputField);
