import { WBCSelectOptionType } from "@/models/DVM/components.dvm";
import React from "react";

const SelectInputOtionWBC: React.FC<WBCSelectOptionType> = (
  props: WBCSelectOptionType
) => {
  const { value, children, ...restOptionProps } = props;
  return (
    <option value={value} {...restOptionProps}>
      {children}
    </option>
  );
};

export default SelectInputOtionWBC;
