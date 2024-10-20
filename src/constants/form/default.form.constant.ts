import { COMMON_FORM_TYPE } from "@/constants/form.constant";
import FormOptionBuilder from "@/models/form/Options";

export const DEFAULT_FORM_KEYS = {
  REPLY: "reply",
} as const;

export type DefaultFormType = {
  [DEFAULT_FORM_KEYS.REPLY]: string;
};

/** 방명록 */
export const REPLY = (() => {
  return new FormOptionBuilder().type(COMMON_FORM_TYPE.REPLY).key(DEFAULT_FORM_KEYS.REPLY).build();
})();
