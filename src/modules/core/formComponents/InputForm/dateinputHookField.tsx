import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";

export interface DatePickerTypes {
  control: Control<any>;
  name: string;
  label: string;
  labelStyle?: string;
  startTime?: Date | null;
  endTime?: Date | null;
  required?: boolean;
  errorMessage?: string;
  isStarRequired?: boolean;
  placeHolder?: string;
  onDateChange?: (date: Date) => void;
}

const DatePickerField: FC<DatePickerTypes> = ({
  control,
  name,
  label,
  labelStyle = "text-small text-brand-gray-500",
  required,
  errorMessage,
  startTime,
  isStarRequired,
  placeHolder,
  endTime,
}) => {
  return (
    <>
      <div className="flex">
        <label className={`${labelStyle} text-gray-500`}>{label}</label>
        {isStarRequired && <span className="text-brand-red">*</span>}
      </div>
      <Controller
        control={control}
        name={name}
        rules={{
          required:
            required && errorMessage
              ? { value: true, message: errorMessage }
              : false,
          validate: {},
        }}
        render={({ field: { onChange, value }, formState: { errors } }) => {
          const fieldError = errors[name];
          return (
            <div>
              <DatePicker
                selected={value ? new Date(value) : null}
                className={`border ${
                  fieldError ? "border-red-500" : "border-gray-500"
                } focus:outline-none rounded-md p-2 w-full text-normal placeholder:text-brand-gray-500`}
                // showTimeSelect
                // timeIntervals={15}
                // dateFormat="MMMM d, yyyy h:mm aa"
                // timeFormat="HH:mm"
                // timeCaption="time"
                placeholderText={placeHolder}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                onFocus={(e) =>
                  ((e.target as HTMLInputElement).readOnly = true)
                }
                onChange={(date) => {
                  console.log(date);
                  onChange(date?.toISOString().split("T")[0]);
                }}
                wrapperClassName="datePicker"
              />
              {fieldError && errorMessage && (
                <span className="text-brand-red text-normal">
                  {errorMessage}{" "}
                </span>
              )}
            </div>
          );
        }}
      />
    </>
  );
};

export default DatePickerField;
