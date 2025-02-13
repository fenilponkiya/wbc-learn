import Loading from "@/components/ui-components/loading";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
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
  const [loading, setLoading] = useState<boolean>(false);
  const submit = async (data: ForgotPasswordFormType) => {
    setLoading(true);
    try {
      const response = await createApi("/auth/forgotpassword", data);
      console.log("API Response:", response);

      if (response?.status === 200) {
        setshowForgotPasswordModal(false);
        toast("Mail sent successfully");
      }
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
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
