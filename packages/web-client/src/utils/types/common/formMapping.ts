import { EMAIL_VALIDATION_REGEX } from "./constants";

export const updateFormModel = [
  {
    name: "first_name",
    rhfProps: {
      required: "First Name is required",
    },
    tfProps: {
      placeholder: "Your First Name",
    },
  },
  {
    name: "last_name",
    rhfProps: {
      required: "Last Name is required",
    },
    tfProps: {
      placeholder: "Your Last Name",
    },
  },
  {
    name: "email",
    tfProps: {
      placeholder: "Enter your email",
      disabled: true,
    },
  },
  {
    name: "nickname",
    tfProps: {
      placeholder: "Your nickname",
    },
  },
  {
    name: "address",
    tfProps: {
      placeholder: "Your home address",
    },
  },
  {
    name: "phoneNumber",
    rhfProps: {
      maxLength: 13,
      pattern: {
        value: /^[0-9]+$/,
        message: "Enter valid Ph No.",
      },
    },
    tfProps: {
      placeholder: "Enter your Phone No",
    },
  },
];

export const createFormModel = [
  {
    name: "first_name",
    rhfProps: {
      required: "First Name is required",
    },
    tfProps: {
      placeholder: "Your First Name",
    },
  },
  {
    name: "last_name",
    rhfProps: {
      required: "Last Name is required",
    },
    tfProps: {
      placeholder: "Your Last Name",
    },
  },
  {
    name: "email",
    rhfProps: {
      required: "Email is required",
      pattern: {
        value: EMAIL_VALIDATION_REGEX,
        message: "Invalid email address",
      },
    },
    tfProps: {
      placeholder: "Enter your email",
    },
  },
  {
    name: "nickname",
    tfProps: {
      placeholder: "Your nickname",
    },
  },
  {
    name: "address",
    tfProps: {
      placeholder: "Your home address",
    },
  },
  {
    name: "phoneNumber",
    rhfProps: {
      maxLength: 13,
      pattern: {
        value: /^[0-9]+$/,
        message: "Enter valid Ph No.",
      },
    },
    tfProps: {
      placeholder: "Enter your Phone No",
    },
  },
];
