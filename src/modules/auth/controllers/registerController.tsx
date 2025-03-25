"use client";

import React, { useState } from "react";
import RegisterView from "../components/registerView";
import { useForm } from "react-hook-form";
import { createApi } from "../../../../api/api";
import { toast } from "react-toastify";
import { RegisterPayloadType } from "../model/DVM";

const RegisterController = () => {
  const { handleSubmit, control, setValue, getValues, trigger } =
    useForm<RegisterPayloadType>();
  console.log(getValues("country"));
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (data: RegisterPayloadType) => {
    const payloadData = { ...data, role: "user" };
    setLoading(true);
    try {
      const response = await createApi("/auth/register", payloadData);

      if (response.status === 201) {
        toast("User Created Successfully");
      }
    } catch (error) {
      console.error("Register Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <RegisterView
      control={control}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      setValue={setValue}
      trigger={trigger}
    />
  );
};

export default RegisterController;
