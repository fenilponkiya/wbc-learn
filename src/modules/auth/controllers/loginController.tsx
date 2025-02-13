"use client";

import Loading from "@/components/ui-components/loading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createApi } from "../../../../api/api";
import LoginView from "../components/loginView";
import { LoginPayloadType } from "../model/DVM";

const LoginController = () => {
  const { handleSubmit, control } = useForm<LoginPayloadType>();

  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (data: LoginPayloadType) => {
    setLoading(true);
    try {
      const response = await createApi("/auth/login", data);

      if (response.status === 200) {
        toast("Login Successfully");
      }
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <LoginView
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      control={control}
    />
  );
};

export default LoginController;
