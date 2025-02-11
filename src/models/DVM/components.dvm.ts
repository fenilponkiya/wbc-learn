import { ReactNode } from "react";
import { Control } from "react-hook-form";

export type FormInputFieldProps = {
  control?: Control<any>;
  labelStyle?: string;
  trimmed?: boolean;
  name: string;
  formValue?: string;
  errorMessage?: string;
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
  trigger?: (name: string) => void;
};
export interface DialogBlockProps {
  children: ReactNode;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}
