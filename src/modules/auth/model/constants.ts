type ObjectKeyType = "login" | "register";
type keytype =
  | "emailLogin"
  | "passwordLogin"
  | "firstName"
  | "lastName"
  | "gender"
  | "country"
  | "state"
  | "city"
  | "mobileNumber"
  | "birthDate"
  | "username";
type ErrorMessageType = {
  [key in ObjectKeyType]?: Record<keytype, string>;
};

export const errorMessage: ErrorMessageType = {
  login: {
    emailLogin: "Email is required",
    passwordLogin: "Password is required",
    firstName: "First Name is Required",
    lastName: "Last Name is Required",
    gender: "Gender is Required",
    country: "Country is Required",
    state: "State is Required",
    city: "City is Required",
    mobileNumber: "Mobile Number is Required",
    birthDate: "Birthdate is Required",
    username: "Username is Required",
  },
};
