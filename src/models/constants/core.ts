export const REGX_CONST = {
  MOBILE: /^[+\d]{0,1}[\d]{0,15}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  URL: /^(https?):\/\/[^\s/$.?#].[^\s]*$/,
  TRIMMED: /\s/,
};
