"use client";

import LocationDialogBlock from "@/components/customBlocks/locationDialogBlock";
import { CustomButton } from "@/modules/core/components/CustomButton";
import DatePickerField from "@/modules/core/formComponents/InputForm/dateinputHookField";
import FormInputField from "@/modules/core/formComponents/InputForm/inputHookField";
import MobileNumberField from "@/modules/core/formComponents/InputForm/mobileNumberHookField";
import FormSelectField from "@/modules/core/formComponents/InputForm/selectHookField";
import { City } from "@/redux/slices/cityNameSlice";
import { Country } from "@/redux/slices/countryNameSlice";
import { State } from "@/redux/slices/stateNameSlice";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC } from "react";
import { RegisterViewProps } from "../model/DVM";
import { errorMessage } from "../model/constants";

const RegisterView: FC<RegisterViewProps> = ({
  control,
  handleSubmit,
  onSubmit,
  setValue,
  trigger,
  imageFile,
  imageRef,
  handleImageClick,
  getFileHandler,
  showModal,
  setShowModal,
  locationValue,
  setLocationValue,
  dialogTitle,
  selectedCountryValue,
  setSelectedCountryValue,
  selectedStateValue,
  setSelectedStateValue,
  selectedCityValue,
  setSelectedCityValue,
  countryData,
  stateData,
  cityData,
  locationBlockHandler,
  handleChange,
}) => {
  return (
    <div>
      <Image
        src={"../home/header-logo.svg"}
        alt="header-logo"
        width={"120"}
        height={"120"}
        className="mx-auto mb-8"
      />
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mb-4 "
        >
          <span className="font-semibold text-lg">Create an account</span>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex justify-center items-center h-full w-full">
              <div
                className="border rounded-lg border-brand-dark flex items-center justify-center h-32 w-full cursor-pointer overflow-hidden"
                onClick={handleImageClick}
              >
                <input
                  type="file"
                  hidden
                  ref={imageRef}
                  onChange={getFileHandler}
                  accept="image/*"
                />

                {imageFile ? (
                  <Image
                    src={imageFile}
                    alt="Profile Image"
                    width={300}
                    height={300}
                    className="rounded-lg w-full h-full "
                    objectFit="cover"
                  />
                ) : (
                  // </div>
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-primary-light group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mt-2 text-sm text-brand-dark">
                      Upload Profile
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <FormInputField
                control={control}
                label="First Name"
                name="firstName"
                placeholder="Jane"
                type="text"
                required
                isStarRequired
                errorMessage={errorMessage?.login?.firstName}
              />
              <FormInputField
                control={control}
                label="Last Name"
                name="lastName"
                placeholder="Doe"
                type="text"
                required
                isStarRequired
                errorMessage={errorMessage?.login?.lastName}
              />
            </div>
          </div>
          <FormInputField
            control={control}
            label="Email"
            name="email"
            placeholder="janedoe@mail.com"
            type="email"
            required
            isStarRequired
            errorMessage={errorMessage?.login?.emailLogin}
          />
          <FormInputField
            name="password"
            type="password"
            label="Password"
            placeholder="•••••••"
            control={control}
            required
            isStarRequired
            errorMessage={errorMessage?.login?.passwordLogin}
          />
          <div className="grid grid-cols-2 gap-2">
            <FormSelectField
              control={control}
              name="gender"
              label="Gender"
              isStarRequired
              placeholder="Select Gender"
              required
              hasDefault
              defaultOption="Please Select"
              isFirstOptionDisabled
              errorMessage={errorMessage?.login?.gender}
              SelectInputProps={{
                selectOptions: [
                  { children: "Male", value: "Male" },
                  { children: "Female", value: "Female" },
                ],
              }}
            />
            <FormInputField
              control={control}
              name="country"
              type="text"
              label="Country"
              isStarRequired
              placeholder="Select country"
              required
              errorMessage={errorMessage?.login?.country}
              formValue={selectedCountryValue?.name}
              trigger={trigger}
              setValue={() =>
                setValue("country", selectedCountryValue?.name ?? "")
              }
              readonly={true}
              className="cursor-pointer"
              onClick={() => {
                locationBlockHandler("country");
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <FormInputField
              control={control}
              name="state"
              type="text"
              label="State"
              isStarRequired
              placeholder="Select state"
              required
              readonly
              trigger={trigger}
              errorMessage={errorMessage?.login?.state}
              formValue={selectedStateValue?.name}
              setValue={() => setValue("state", selectedStateValue?.name ?? "")}
              className="cursor-pointer"
              onClick={() => {
                selectedCountryValue?.iso2 && locationBlockHandler("state");
              }}
            />
            <FormInputField
              control={control}
              name="city"
              type="text"
              label="City"
              isStarRequired
              placeholder="Select city"
              required
              readonly
              className="cursor-pointer"
              trigger={trigger}
              errorMessage={errorMessage?.login?.city}
              formValue={selectedCityValue?.name}
              setValue={() => setValue("city", selectedCityValue?.name ?? "")}
              onClick={() => {
                selectedCountryValue?.iso2 &&
                  selectedStateValue?.iso2 &&
                  locationBlockHandler("city");
              }}
            />
          </div>
          <div className=" w-full">
            <MobileNumberField
              label={"Mobile No."}
              subLabel={"(Please select country code)"}
              name={"contactNo"}
              control={control}
              required={true}
              errorMessage={errorMessage?.login?.mobileNumber}
              placeHolder="Enter Mobile Number"
              isStarRequired
            />
          </div>
          <div className="w-full">
            <DatePickerField
              control={control}
              label="Birthdate"
              name="birthDate"
              placeHolder="dd-mm-yyyy"
              errorMessage={errorMessage?.login?.birthDate}
              required={true}
              isStarRequired
            />
          </div>
          <div className="w-full">
            <FormInputField
              control={control}
              name="userName"
              type="text"
              label="Username"
              errorMessage={errorMessage?.login?.username}
              isStarRequired
              placeholder="John_doe"
              required
            />
          </div>
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
          >
            Login
          </span>
        </span>
      </div>
      {dialogTitle === "country" && (
        <LocationDialogBlock<Country>
          showModal={showModal}
          setShowModal={setShowModal}
          title="country"
          value={locationValue}
          setLocationValue={setLocationValue}
          handleChange={(e) => handleChange(e, "country")}
          locationData={countryData}
          setSelectedLocationValue={setSelectedCountryValue}
        />
      )}

      {dialogTitle === "state" && (
        <LocationDialogBlock<State>
          showModal={showModal}
          setShowModal={setShowModal}
          title="state"
          value={locationValue}
          setLocationValue={setLocationValue}
          handleChange={(e) => handleChange(e, "state")}
          locationData={stateData}
          setSelectedLocationValue={setSelectedStateValue}
        />
      )}
      {dialogTitle === "city" && (
        <LocationDialogBlock<City>
          showModal={showModal}
          setShowModal={setShowModal}
          title="city"
          value={locationValue}
          setLocationValue={setLocationValue}
          handleChange={(e) => handleChange(e, "city")}
          locationData={cityData}
          setSelectedLocationValue={setSelectedCityValue}
        />
      )}
    </div>
  );
};

export default RegisterView;
