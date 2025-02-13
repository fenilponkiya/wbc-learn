import { CustomButton } from "@/modules/core/components/CustomButton";
import FormInputField from "@/modules/core/formComponents/InputForm/inputHookField";
import { FC } from "react";
import { errorMessage } from "../model/constants";
import { ForgotPasswordViewProps } from "../model/DVM";

const ForgotPasswordView: FC<ForgotPasswordViewProps> = ({
  onSubmit,
  control,
  setshowForgotPasswordModal,
}) => {
  return (
    <>
      <span className="font-bold text-xl">Forgot Password</span>
      <span className="block text-sm my-2 mb-4">
        To reset your password, you need to enter your email address.
      </span>

      <form onSubmit={onSubmit}>
        <FormInputField
          control={control}
          label="Email"
          name="email"
          placeholder="janedoe@mail.com"
          labelStyle="text-brand-dark text-sm"
          type="email"
          required
          isStarRequired
          errorMessage={errorMessage.login?.emailLogin}
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <CustomButton
            text="Proceed"
            type="submit"
            className="text-sm bg-primary-light text-brand-white"
            onClick={() => setshowForgotPasswordModal(false)}
          />
          <CustomButton
            className="text-sm"
            text="Back"
            type="button"
            onClick={() => setshowForgotPasswordModal(false)}
          />
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordView;
