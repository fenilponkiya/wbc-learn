"use client";

import { CustomButton } from "@/modules/core/components/CustomButton";
import { redirect } from "next/navigation";
import Image from "next/image";
import React, { FC } from "react";
import { RegisterViewProps } from "../model/DVM";
import { errorMessage } from "../model/constants";
import FormInputField from "@/modules/core/formComponents/InputForm/inputHookField";

const RegisterView: FC<RegisterViewProps> = ({
  control,
  handleSubmit,
  onSubmit,
}) => {
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
          <span>Create an account</span>
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

          <CustomButton
            type="submit"
            text="Register"
            className="bg-primary-light text-brand-white"
          />
        </form>
        <span className="text-sm ">
          Already have an account?{" "}
          <span
            className="text-primary-light cursor-pointer"
            onClick={() => redirect("/login")}
            // onClick={() => router.push("/register")}
          >
            Login
          </span>
        </span>
      </div>
    </>
  );
};

export default RegisterView;
