import { UseFormRegister } from "react-hook-form";
import { FieldConfig, UserForm } from "utils/types";

export interface FormMapperCompProps {
  model: FieldConfig[];
  isLoading: boolean;
  register: UseFormRegister<UserForm>;
  buttonName: string;
}
