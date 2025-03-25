import { Toast } from "../utils/altert";
import api from "./backend";

const getHeaders = () => {
  const userTimeZone = Intl.DateTimeFormat()?.resolvedOptions()?.timeZone;
  let headers = {
    headers: {
      "Content-type": "application/json",
      timeZone: userTimeZone,
      authorization: "Bearer " + (localStorage?.getItem("token") || null),
    },
  };
  return headers;
};

// export interface FindApiTypes {
//   payload: Record<string, unknown>;
// }

const apiErrorAlert = (status: Number, message: string) => {
  switch (status) {
    case 204:
      Toast.fire({ icon: "error", title: "Server not responding" });
      break;
    case 401:
      Toast.fire({ icon: "warning", title: message });
      break;
    case 400:
      Toast.fire({ icon: "warning", title: message });
      break;
    case 403:
      Toast.fire({ icon: "warning", title: "Please relogin." });
      break;
    case 404:
      Toast.fire({ icon: "error", title: message });
      break;
    case 405:
      Toast.fire({ icon: "warning", title: message });
      break;
    case 422:
      Toast.fire({ icon: "error", title: message, timer: undefined });
      break;
    case 502:
      Toast.fire({ icon: "error", title: "Server Error" });
      break;
    case 500:
      Toast.fire({ icon: "error", title: message });
      break;
    case 409:
      Toast.fire({ icon: "error", title: message });
      break;
    case 12023:
      Toast.fire({ icon: "error", title: message });
      break;
    default:
      Toast.fire({
        icon: "error",
        title: `Returned error request ${status}!. Please try again later`,
      });
      break;
  }
};
export const createApi = async (routeName: string, payload: any) => {
  return api
    .post(routeName, payload, getHeaders())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const status = err.response === undefined ? 12023 : err?.response?.status;
      const message =
        err.response === undefined
          ? "Server Maintenance!"
          : err?.response?.data?.message;
      apiErrorAlert(status, message ?? err?.response?.data?.error);
      return {
        data: {},
        status,
      };
    });
};

export const findApi = async (routeName: string) => {
  return api
    .get(routeName, getHeaders())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const status = err.response === undefined ? 12023 : err?.response?.status;
      const message =
        err.response === undefined
          ? "Server Maintenance!"
          : err?.response?.data?.message;
      apiErrorAlert(status, message ?? err?.response?.data?.error);
      return {
        data: {},
        status,
      };
    });
};

export const deleteApi = async (routeName: string) => {
  return api
    .delete(routeName, getHeaders())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const status = err.response === undefined ? 12023 : err?.response?.status;
      const message =
        err.response === undefined
          ? "Server Maintenance!"
          : err?.response?.data?.message;
      apiErrorAlert(status, message ?? err?.response?.data?.error);
    });
};

export const putApi = async (routeName: string, payload: any) => {
  return api
    .put(routeName, payload, getHeaders())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const status = err.response === undefined ? 12023 : err?.response?.status;
      const message =
        err.response === undefined
          ? "Server Maintenance!"
          : err?.response?.data?.message;
      apiErrorAlert(status, message ?? err?.response?.data?.error);
    });
};
