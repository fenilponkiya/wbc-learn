"use client";

import { AppDispatch, RootState } from "@/redux/store/store";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import RegisterView from "../components/registerView";
import { locationType, RegisterPayloadType } from "../model/DVM";
import { createApi } from "../../../../api/api";
import { toast } from "react-toastify";
import { uploadFileHandler } from "@/redux/slices/uploadFileSlice";
import { Country, fetchCountryList } from "@/redux/slices/countryNameSlice";
import { fetchStateList, State } from "@/redux/slices/stateNameSlice";
import { City, fetchCityList } from "@/redux/slices/cityNameSlice";

const RegisterController = () => {
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [stateData, setStateData] = useState<State[]>([]);
  const [cityData, setCityData] = useState<City[]>([]);
  const [selectedCountryValue, setSelectedCountryValue] =
    useState<Country | null>(null);
  const [selectedStateValue, setSelectedStateValue] = useState<State | null>(
    null
  );
  const [selectedCityValue, setSelectedCityValue] = useState<City | null>(null);
  const [locationValue, setLocationValue] = useState<string>("");
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageForFileUpload, setImageForFileToUpload] =
    useState<ChangeEvent<HTMLInputElement> | null>(null);
  const [imageFile, setImageFile] = useState<string>("");

  const imageRef = useRef<HTMLInputElement | null>(null);

  const { handleSubmit, control, setValue, trigger, reset } =
    useForm<RegisterPayloadType>();
  const dispatch = useDispatch<AppDispatch>();
  const { uploadFile } = useSelector((uploadFile: RootState) => uploadFile);
  const { country, state, city } = useSelector((state: RootState) => state);

  const { countryList } = country;
  const { stateList } = state;
  const { cityList } = city;
  const { url } = uploadFile;

  useEffect(() => {
    dispatch(fetchCountryList());
  }, [dispatch]);

  useEffect(() => {
    setSelectedStateValue(null);
    setSelectedCityValue(null);
    setValue("state", "");
    setValue("city", "");
    if (selectedCountryValue?.iso2) {
      dispatch(fetchStateList(selectedCountryValue?.iso2));
    }
  }, [selectedCountryValue, dispatch, setValue]);

  useEffect(() => {
    setSelectedCityValue(null);
    setValue("city", "");

    if (selectedStateValue?.iso2 && selectedCountryValue?.iso2) {
      dispatch(
        fetchCityList({
          countryIso2: selectedCountryValue.iso2,
          stateIso2: selectedStateValue.iso2,
        })
      );
    }
  }, [selectedStateValue, selectedCountryValue, dispatch]);

  useEffect(() => {
    setCountryData(countryList);
  }, [countryList]);
  useEffect(() => {
    setStateData(stateList);
  }, [stateList]);
  useEffect(() => {
    setCityData(cityList);
  }, [cityList]);

  const locationBlockHandler = (title: locationType) => {
    setDialogTitle(title);
    setShowModal(true);

    if (title === "country") {
      setCountryData(countryList ?? []);
    } else if (title === "state") {
      setStateData(stateList ?? []);
    } else {
      setCityData(cityList ?? []);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: locationType
  ) => {
    const value = event.target.value.toLowerCase();
    setLocationValue(value);

    const locationMap = {
      country: countryList,
      state: stateList,
      city: cityList,
    };

    const filteredLocationData = locationMap[type]?.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    if (type === "country") setCountryData(filteredLocationData as Country[]);
    if (type === "state") setStateData(filteredLocationData as State[]);
    if (type === "city") setCityData(filteredLocationData as City[]);
  };

  const getFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setImageForFileToUpload(event);
      setImageFile(URL.createObjectURL(event.target.files?.[0]));
    }
  };

  const handleImageClick = () => {
    imageRef?.current?.click();
  };

  const onSubmit = async (data: RegisterPayloadType) => {
    let payloadData;

    if (imageForFileUpload) {
      const file = imageForFileUpload?.target?.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        await dispatch(uploadFileHandler(formData));
        payloadData = { ...data, role: "user", img_profile: url };
      }
    } else {
      payloadData = { ...data, role: "user" };
    }
    try {
      const response = await createApi("/auth/register", payloadData);

      if (response?.status === 201) {
        toast("User Created Successfully");
      }
      reset();
      setImageFile("");
    } catch (error) {
      console.error("Register Error:", error);
    } finally {
      payloadData = "";
    }
  };

  return (
    <RegisterView
      control={control}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      setValue={setValue}
      trigger={trigger}
      setImageForFileToUpload={setImageForFileToUpload}
      imageFile={imageFile}
      setImageFile={setImageFile}
      imageRef={imageRef}
      getFileHandler={getFileHandler}
      handleImageClick={handleImageClick}
      showModal={showModal}
      setShowModal={setShowModal}
      locationValue={locationValue}
      setLocationValue={setLocationValue}
      dialogTitle={dialogTitle}
      setDialogTitle={setDialogTitle}
      selectedCountryValue={selectedCountryValue}
      setSelectedCountryValue={setSelectedCountryValue}
      selectedStateValue={selectedStateValue}
      setSelectedStateValue={setSelectedStateValue}
      selectedCityValue={selectedCityValue}
      setSelectedCityValue={setSelectedCityValue}
      countryData={countryData}
      setCountryData={setCountryData}
      stateData={stateData}
      setStateData={setStateData}
      cityData={cityData}
      setCityData={setCityData}
      locationBlockHandler={locationBlockHandler}
      handleChange={handleChange}
    />
  );
};

export default RegisterController;
