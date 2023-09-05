import { RegisterOptions } from "react-hook-form";
import { TextFieldProps } from "@mui/material/TextField";

export interface FormTextFieldProps {
  textFieldProps?: TextFieldProps;
  name: string;
  defaultValue?: string | number;
  rules?: RegisterOptions;
}

export type StyledTextFieldProps = {
  isSuccess?: boolean;
} & TextFieldProps;
