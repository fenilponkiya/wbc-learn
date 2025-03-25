import { RegisterPayloadType } from "@/modules/auth/model/DVM";
import { OptionHTMLAttributes, ReactNode } from "react";
import { Control, UseFormTrigger } from "react-hook-form";

export type FormInputFieldProps = {
  control?: Control<any>;
  labelStyle?: string;
  trimmed?: boolean;
  name: string;
  formValue?: string;
  errorMessage?: string | null;
  onHandleChange?: (e: any) => void;
  isStarRequired?: boolean;
  label?: string;
  type: "text" | "password" | "email" | "number" | "date";
  placeholder?: string;
  errors?: Object | undefined;
  readonly?: boolean;
  max?: string | number | undefined;
  isCharacterValidation?: boolean;
  isLinkValidation?: boolean;
  className?: string;
  required?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  setValue?: (
    name: string,
    value: string,
    options?: {
      shouldValidate?: boolean;
      shouldDirty?: boolean;
      shouldTouch?: boolean;
    }
  ) => void;
  trigger?: UseFormTrigger<RegisterPayloadType>;
};
export interface DialogBlockProps {
  children: ReactNode;
  showModal: boolean;
  closeModal: () => void;
}
export type NextSelectOptionInputType = OptionHTMLAttributes<HTMLOptionElement>;

export type WBCSelectOptionType = NextSelectOptionInputType & {};

export type WBCSelectInputType = {
  selectOptions: WBCSelectOptionType[];
};
export type WBCSelectFormType = {
  SelectInputProps: WBCSelectInputType;
  name: string;
  hasDefault?: boolean;
  className?: string;
  defaultOption?: string;
  isFirstOptionDisabled?: boolean;
  label?: ReactNode;
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
  value?: string;
  isStarRequired?: boolean;
  labelStyle?: string;
};
