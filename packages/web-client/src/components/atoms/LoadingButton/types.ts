import { ButtonProps } from '@mui/material';

export interface LoadingButtonProps {
  buttonProps?: ButtonProps;
  isLoading?: boolean;
  children: React.ReactNode;
}
