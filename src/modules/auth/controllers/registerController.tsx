"use client";

import React, { useState } from "react";
import RegisterView from "../components/registerView";
import { useForm } from "react-hook-form";
import { createApi } from "../../../../api/api";
import { toast } from "react-toastify";
import { RegisterPayloadType } from "../model/DVM";

const RegisterController = () => {
  const { handleSubmit, control } = useForm<RegisterPayloadType>();

  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (data: RegisterPayloadType) => {
    setLoading(true);
    try {
      const response = await createApi("/auth/register", data);

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
    />
  );
};

export default RegisterController;
