// src/core/usecases/alert/useAlertLogic.ts
import { AlertContent } from "../../core/types/alert";

export const prepareAlertContent = ({ title, message, listItems }: AlertContent) => {
  return {
    title,
    message: message || "There was an issue with your request.",
    listItems: listItems || [],
  };
};
