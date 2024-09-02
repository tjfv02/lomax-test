import { TextFieldVariants } from "@mui/material/TextField";
import { ReactNode } from "react";

export interface CustomButtonProps {
  children: ReactNode;
}

export interface CustomTextFieldProps {
  name: string;
  icon?: React.ReactNode;
  onChange?: (value: any) => void;
}

export interface ConfigTextField {
  fullWidth?: boolean;
  variant?: TextFieldVariants;
  error?: boolean;
  helperText?: string;
}
