"use client";

import Loading from "@/components/ui-components/loading";
import { isLoading, isStopLoading } from "@/redux/slices/loadingStore";
import { RootState } from "@/redux/store/store";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createApi } from "../../../../api/api";
import LoginView from "../components/loginView";
import { PayloadType } from "../model/DVM";

const LoginController = () => {
  const { handleSubmit, control } = useForm<PayloadType>();
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();
  const onSubmit = async (data: PayloadType) => {
    dispatch(isLoading());
    try {
      const response = await createApi("/auth/login", data);
      console.log("API Response:", response);
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      dispatch(isStopLoading());
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
