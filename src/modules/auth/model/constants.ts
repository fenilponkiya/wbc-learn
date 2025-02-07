type ObjectKeyType = "login" | "register";
type keytype = "emailLogin" | "passwordLogin";
type ErrorMessageType = {
  [key in ObjectKeyType]?: Record<keytype, string>;
};

export const errorMessage: ErrorMessageType = {
  login: {
    emailLogin: "Email is required",
    passwordLogin: "Password is required",
  },
};
