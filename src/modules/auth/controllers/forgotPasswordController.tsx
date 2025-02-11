import Loading from "@/components/ui-components/loading";
import { isLoading, isStopLoading } from "@/redux/slices/loadingStore";
import { RootState } from "@/redux/store/store";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createApi } from "../../../../api/api";
import ForgotPasswordView from "../components/forgotPasswordView";
import {
  ForgotPasswordControllerProps,
  ForgotPasswordFormType,
} from "../model/DVM";

const ForgotPasswordController: FC<ForgotPasswordControllerProps> = ({
  setshowForgotPasswordModal,
}) => {
  const { handleSubmit, control } = useForm<ForgotPasswordFormType>();
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();
  const submit = async (data: ForgotPasswordFormType) => {
    try {
      dispatch(isLoading());
      const response = await createApi("/auth/forgotpassword", data);
      console.log("API Response:", response);

      if (response?.status === 200) {
        setshowForgotPasswordModal(false);
        toast("Mail sent successfully");
      }
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      dispatch(isStopLoading());
    }
  };
  return loading === true ? (
    <Loading />
  ) : (
    <ForgotPasswordView
      onSubmit={handleSubmit(submit)}
      control={control}
      setshowForgotPasswordModal={setshowForgotPasswordModal}
    />
  );
};

export default ForgotPasswordController;
