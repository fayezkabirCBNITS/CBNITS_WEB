import { ToastsStore } from "react-toasts";

export const showToast = (message, type = "success", duration = 4000) => {
  ToastsStore[type](message, duration);
};