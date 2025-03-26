import { City } from "@/redux/slices/cityNameSlice";
import { Country } from "@/redux/slices/countryNameSlice";
import { State } from "@/redux/slices/stateNameSlice";
import {
  BaseSyntheticEvent,
  ChangeEvent,
  Dispatch,
  Ref,
  RefObject,
  SetStateAction,
} from "react";
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
export type locationType = "country" | "state" | "city";

export interface RegisterViewProps {
  control: Control<RegisterPayloadType>;
  handleSubmit: UseFormHandleSubmit<RegisterPayloadType, undefined>;
  onSubmit: (payload: RegisterPayloadType) => void;
  setValue: UseFormSetValue<RegisterPayloadType>;
  trigger: UseFormTrigger<RegisterPayloadType>;
  setImageForFileToUpload: Dispatch<
    SetStateAction<ChangeEvent<HTMLInputElement> | null>
  >;
  imageFile: string;
  setImageFile: Dispatch<SetStateAction<string>>;
  imageRef: RefObject<HTMLInputElement | null>;
  getFileHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  handleImageClick: () => void;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  locationValue: string;
  setLocationValue: Dispatch<SetStateAction<string>>;
  dialogTitle: string;
  setDialogTitle: Dispatch<SetStateAction<string>>;
  selectedCountryValue: Country | null;
  setSelectedCountryValue: Dispatch<SetStateAction<Country | null>>;
  selectedStateValue: State | null;
  setSelectedStateValue: Dispatch<SetStateAction<State | null>>;
  selectedCityValue: City | null;
  setSelectedCityValue: Dispatch<SetStateAction<City | null>>;
  countryData: Country[];
  setCountryData: Dispatch<SetStateAction<Country[]>>;
  stateData: State[];
  setStateData: Dispatch<SetStateAction<State[]>>;
  cityData: City[];
  setCityData: Dispatch<SetStateAction<City[]>>;
  locationBlockHandler: (title: locationType) => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    type: locationType
  ) => void;
}
