export interface UserForm {
  first_name: string;
  last_name: string;
  email: string;
  nickname: string;
  address: string;
  phoneNumber: string;
}

export interface FieldConfig {
  name: keyof UserForm;
  rhfProps?: {
    required?: string;
    maxLength?: number;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  tfProps: {
    label: string;
    placeholder: string;
    disabled?: boolean;
  };
}
