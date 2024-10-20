/** 파일 업로드 형식 */
export const FILE_UPLOAD_TYPE = {
  /** 파일 */
  FILE: "file",
  /** 파일들 */
  FILES: "files",
  /** 이미지 */
  IMAGE: "image",
  /** 이미지들 */
  IMAGES: "images",
};

/** 체크박스 형식 */
export const OPTION_FORM_TYPE = {
  /** 체크박스 */
  CHECKBOX: "checkbox",
  /** 멀티 체크박스 */
  MULTI_CHECKBOX: "multiCheckbox",
  /** input type radio */
  RADIO: "radio",
  /** 약관 */
  TERM: "term",
};

/** 필드셋 형식 */
export const FIELDSET_TYPE = {
  /** 필드셋 */
  FIELDSET: "fieldset",
  /** 필드셋 EDIT */
  FIELDSET_EDIT: "fieldsetEdit",
  /** 필드셋 Nested */
  FIELDSET_NESTED: "fieldSetNested",
};

export const COMMON_FORM_TYPE = {
  ...FILE_UPLOAD_TYPE,
  ...OPTION_FORM_TYPE,
  ...FIELDSET_TYPE,
  /** input type text (defaultValue = '') */
  TEXT: "text",
  /** input type textarea (defaultValue = '') */
  TEXTAREA: "textarea",
  /** 사이즈 */
  SIZE: "size",
  /** 가격 조회 */
  PRICE: "price",
  /** 에디터 */
  EDITOR: "editor",
  /** 옵션 */
  OPTION: "option",
  /** 경고메시지 */
  WARNING_MESSAGE: "warningMessage",
  /** input type email (defaultValue = '') */
  EMAIL: "email",
  /** input type password (defaultValue = '')*/
  PASSWORD: "password",
  /** input type checkbox (defaultValue = '') include options */
  STRING_CHECKBOX: "strCheck",
  /** (dropdown) select & option element (defaultValue = '') */
  BOTTOM_SHEET_SELECT: "bottomSheetSelect",
  /** 날짜 */
  DATE: "date",
  /** 검색 */
  SEARCH: "search",
  /** (dropdown) select & option element (defaultValue = '') */
  SELECT: "select",
  /** (dropdown) select & option element (defaultValue = '') */
  MULTI_SELECT: "multiSelect",
  /** 번호 */
  NUMBER: "number",
  /** 아이디 */
  ID: "id",
  /** 방명록 */
  REPLY: "reply",
} as const;

export const COMMON_FORM_TYPE_DEFAULT_VALUE = {
  [COMMON_FORM_TYPE.PRICE]: "",
  [COMMON_FORM_TYPE.TEXT]: "",
  [COMMON_FORM_TYPE.SIZE]: "",
  [COMMON_FORM_TYPE.FIELDSET]: "",
  [COMMON_FORM_TYPE.TEXTAREA]: "",
  [COMMON_FORM_TYPE.EMAIL]: "",
  [COMMON_FORM_TYPE.OPTION]: undefined,
  [COMMON_FORM_TYPE.WARNING_MESSAGE]: undefined,
  [COMMON_FORM_TYPE.PASSWORD]: "",
  [COMMON_FORM_TYPE.CHECKBOX]: "",
  [COMMON_FORM_TYPE.STRING_CHECKBOX]: "0",
  [COMMON_FORM_TYPE.MULTI_CHECKBOX]: [],
  [COMMON_FORM_TYPE.BOTTOM_SHEET_SELECT]: "",
  [COMMON_FORM_TYPE.SELECT]: "",
  [COMMON_FORM_TYPE.MULTI_SELECT]: [],
  [COMMON_FORM_TYPE.RADIO]: "",
  [COMMON_FORM_TYPE.FILE]: "",
  [COMMON_FORM_TYPE.FILES]: [],
  [COMMON_FORM_TYPE.IMAGE]: "",
  [COMMON_FORM_TYPE.IMAGES]: [],
  [COMMON_FORM_TYPE.DATE]: "",
  [COMMON_FORM_TYPE.SEARCH]: "",
  [COMMON_FORM_TYPE.NUMBER]: 0,
  [COMMON_FORM_TYPE.ID]: "",
};

export const VALIDATION_REGEX = {
  /** 이메일 */
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  /** 비밀번호 (특수문자, 영문자 포함 8~16자) */
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*()+=-])(?=.*[0-9]).{8,16}$/,
  /** URL */
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  /** 전화번호 */
  PHONE: /^\d{3}-\d{3,4}-\d{4}$/,
  /** 국가코드 포함 전화번호 */
  PHONE_WITH_COUNTRY_CODE: /^\d{2,3}-\d{3,4}-\d{4}$/,
  /** 구 우편번호 */
  POSTAL_CODE: /^\d{3}-\d{3}$/,
  /** 신 우편번호 */
  ZIP_CODE: /^\d{5}$/,
  /** HTTP URL */
  HTTP: /^https?:\/\//,
  /** TWITTER URL */
  TWITTER: /(^https?:\/\/twitter.com\/[a-zA-Z0-9_]+\/?$)|^$/,
  /** INSTA URL */
  INSTAGRAM: /(^https?:\/\/www.instagram.com\/[a-zA-Z0-9_.]+\/?$)|^$/,
};
