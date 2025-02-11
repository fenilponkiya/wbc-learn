import { BaseSyntheticEvent } from "react";
import { Control, UseFormHandleSubmit } from "react-hook-form";

export interface PayloadType {
  email: string;
  password: string;
}
export interface LoginViewProps {
  control: Control<PayloadType>;
  handleSubmit: UseFormHandleSubmit<PayloadType, undefined>;
  onSubmit: (payload: PayloadType) => void;
}
export interface ForgotPasswordFormType {
  email: string;
}
export interface ForgotPasswordControllerProps {
  setshowForgotPasswordModal: (showForgotPasswordModal: boolean) => void;
}
export interface ForgotPasswordViewProps {
  control: Control<ForgotPasswordFormType>;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  setshowForgotPasswordModal: (showForgotPasswordModal: boolean) => void;
}
