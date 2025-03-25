import { BaseSyntheticEvent } from "react";
import {
  Control,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

export interface LoginPayloadType {
  email: string;
  password: string;
}
export interface LoginViewProps {
  control: Control<LoginPayloadType>;
  handleSubmit: UseFormHandleSubmit<LoginPayloadType, undefined>;
  onSubmit: (payload: LoginPayloadType) => void;
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
  reset: any;
}
export interface RegisterPayloadType {
  email: string;
  password: string;
  country: string;
  state: string;
  city: string;
  firstName: string;
  lastName: string;
  gender: string;
  contactNo: string;
  birthDate: string;
  userName: string;
}
export interface RegisterViewProps {
  control: Control<RegisterPayloadType>;
  handleSubmit: UseFormHandleSubmit<RegisterPayloadType, undefined>;
  onSubmit: (payload: RegisterPayloadType) => void;
  setValue: UseFormSetValue<RegisterPayloadType>;
  trigger: UseFormTrigger<RegisterPayloadType>;
}
