import { EMAIL_VALIDATION_REGEX } from "./constants";

export const updateFormModel = [
  {
    name: "first_name",
    rhfProps: {
      required: "First Name is required",
    },
    tfProps: {
      label: "First Name",
      placeholder: "Your First Name",
    },
  },
  {
    name: "last_name",
    rhfProps: {
      required: "Last Name is required",
    },
    tfProps: {
      label: "Last Name",
      placeholder: "Your Last Name",
    },
  },
  {
    name: "email",
    tfProps: {
      label: "Email",
      placeholder: "Enter your email",
      disabled: true,
    },
  },
  {
    name: "nickname",
    tfProps: {
      label: "Nickname",
      placeholder: "Your nickname",
    },
  },
  {
    name: "address",
    tfProps: {
      label: "Address",
      placeholder: "Your home address",
    },
  },
  {
    name: "phoneNumber",
    rhfProps: {
      maxLength: 13,
      pattern: {
        value: /^[0-9]+$/,
        message: "Enter valid Ph No. with max 13 digits only",
      },
    },
    tfProps: {
      label: "Phone Number",
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
      label: "First Name",
      placeholder: "Your First Name",
    },
  },
  {
    name: "last_name",
    rhfProps: {
      required: "Last Name is required",
    },
    tfProps: {
      label: "Last Name",
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
      label: "Email",
      placeholder: "Enter your email",
    },
  },
  {
    name: "nickname",
    tfProps: {
      label: "Nickname",
      placeholder: "Your nickname",
    },
  },
  {
    name: "address",
    tfProps: {
      label: "Address",
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
      label: "Phone Number",
      placeholder: "Enter your Phone No",
    },
  },
];
