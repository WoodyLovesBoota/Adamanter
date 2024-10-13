// import { VALIDATION } from "@/constants/form/validation.constant";
import { COMMON_FORM_TYPE } from "@/constants/form.constant";
import FormOptionBuilder from "@/models/form/Options";
import * as yup from "yup";

export const DEFAULT_FORM_KEYS = {
  ID: "id",
  PASSWORD: "password",
} as const;

export type DefaultFormType = {
  [DEFAULT_FORM_KEYS.ID]: string;
  [DEFAULT_FORM_KEYS.PASSWORD]: string;
};

/** ID 아이디 */
export const ID = (() => {
  return new FormOptionBuilder()
    .type(COMMON_FORM_TYPE.ID)
    .key(DEFAULT_FORM_KEYS.ID)
    .validation(
      yup.string().required("id require message").max(20, "id max message").min(3, "id min message")
    )
    .build();
})();

/** 비밀번호 */
export const PASSWORD = (() => {
  return new FormOptionBuilder()
    .type(COMMON_FORM_TYPE.PASSWORD)
    .key(DEFAULT_FORM_KEYS.PASSWORD)
    .validation(
      yup
        .string()
        .required("password require message")
        .max(20, "password max message")
        .min(3, "password min message")
    )
    .build();
})();
