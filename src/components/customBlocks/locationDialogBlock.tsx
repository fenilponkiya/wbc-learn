import { CustomButton } from "@/modules/core/components/CustomButton";
import { Country } from "@/redux/slices/countryNameSlice";
import { State } from "@/redux/slices/stateNameSlice";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import DialogBlock from "../ui-components/dialog";
import { City } from "@/redux/slices/cityNameSlice";

interface LocationDialogBlockProps<T> {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  locationData: T[];
  setLocationValue: Dispatch<SetStateAction<string>>;
  setSelectedLocationValue: Dispatch<SetStateAction<T | null>>;
}

const LocationDialogBlock = <T extends Country | State | City>({
  showModal,
  setShowModal,
  title,
  value,
  handleChange,
  locationData,
  setLocationValue,
  setSelectedLocationValue,
}: LocationDialogBlockProps<T>) => {
  return (
    <DialogBlock
      showModal={showModal}
      closeModal={() => {
        setShowModal(false);
        setLocationValue("");
      }}
    >
      <p className="font-medium text-lg block mb-2">Select {title}</p>
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={`Search ${title}`}
        className="block p-1 py-2 w-full focus:outline-none border border-black rounded-md mb-2 text-sm"
      />
      <ul className="p-2 h-36 overflow-auto">
        {locationData?.length > 0 ? (
          locationData?.map((item) => (
            <li
              onClick={() => {
                setSelectedLocationValue(item);
                setShowModal(false);
                setLocationValue("");
              }}
              key={item._id}
              className="border-b p-2 cursor-pointer text-sm hover:bg-pink-100"
            >
              {item.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-sm text-center">No results found.</p>
        )}
      </ul>

      <CustomButton
        type="button"
        text="Close"
        className="button text-sm font-medium bg-primary-light text-brand-white px-4 py-2 rounded-md max-w-max  mx-auto flex"
        onClick={() => setShowModal(false)}
      />
    </DialogBlock>
  );
};

export default LocationDialogBlock;
