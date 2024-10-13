import * as Yup from "yup";

import {
  ERR_SHORT,
  ERR_LONG,
  ERR_REQUIRED,
  ERR_EMAIL,
  ERR_PHONE_INVALID,
  ERR_TIME_INVALID,
} from "./constants.js";

const phoneRegex = /^\+380\d{9}$/;
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const feedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, ERR_SHORT).max(50, ERR_LONG).required(ERR_REQUIRED),

  email: Yup.string().email(ERR_EMAIL).required(ERR_REQUIRED),

  phone: Yup.string()
    .matches(phoneRegex, ERR_PHONE_INVALID)
    .required(ERR_REQUIRED),

  time: Yup.string()
    .matches(timeRegex, ERR_TIME_INVALID)
    .required(ERR_REQUIRED),
});
