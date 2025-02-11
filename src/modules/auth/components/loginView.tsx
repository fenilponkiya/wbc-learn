"use client";

import { CustomButton } from "@/modules/core/components/CustomButton";
import FormInputField from "@/modules/core/formComponents/InputForm/inputHookField";
import { FC, useState } from "react";
import { errorMessage } from "../model/constants";
import { LoginViewProps } from "../model/DVM";
import DialogBlock from "@/components/ui-components/dialog";
import ForgotPasswordController from "../controllers/forgotPasswordController";
import Image from "next/image";

const LoginView: FC<LoginViewProps> = ({ control, handleSubmit, onSubmit }) => {
  const [showForgotPasswordModal, setshowForgotPasswordModal] =
    useState<boolean>(false);
  return (
    <>
      <Image
        src={"../home/header-logo.svg"}
        alt="header-logo"
        width={"150"}
        height={"150"}
        className="mx-auto"
      />
      <div className="p-10 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mb-4 "
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
          <span
            className="text-sm text-brand-dark ml-auto cursor-pointer"
            onClick={() => setshowForgotPasswordModal(true)}
          >
            Forgot Password
          </span>
          <CustomButton
            type="submit"
            text="Login"
            className="bg-primary-light text-brand-white"
            onClick={() => {}}
          />
        </form>
        <span className="text-sm ">
          Don't have an account?{" "}
          <span className="text-primary-light">Register</span>
        </span>
      </div>
      <DialogBlock
        showModal={showForgotPasswordModal}
        setShowModal={setshowForgotPasswordModal}
      >
        <ForgotPasswordController
          setshowForgotPasswordModal={setshowForgotPasswordModal}
        />
      </DialogBlock>
    </>
  );
};

export default LoginView;
