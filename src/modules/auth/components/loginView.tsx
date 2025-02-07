import { CustomButton } from "@/modules/core/components/CustomButton";
import FormInputField from "@/modules/core/formComponents/InputForm/inputHookField";
import React from "react";
import { useForm } from "react-hook-form";
import { createApi } from "../../../../api/api";
import { errorMessage } from "../model/constants";

interface PayloadType {
  email: string;
  password: string;
}

const LoginView = () => {
  const { handleSubmit, control } = useForm<PayloadType>();

  const onSubmit = async (data: PayloadType) => {
    try {
      const response = await createApi("/auth/login", data);
      console.log("API Response:", response);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-10 "
    >
      <FormInputField
        control={control}
        label="Email"
        name="email"
        placeholder="janedoe@mail.com"
        type="email"
        required
        isStarRequired
        errorMessage={errorMessage.login?.emailLogin}
      />
      <FormInputField
        name="password"
        type="password"
        label="Password"
        placeholder="•••••••"
        control={control}
        required
        isStarRequired
        errorMessage={errorMessage.login?.passwordLogin}
      />
      <CustomButton type="submit" text="Login" />
    </form>
  );
};

export default LoginView;
