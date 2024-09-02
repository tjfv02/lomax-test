import TextField from '@mui/material/TextField';
import { useField } from 'formik';
import React, { useMemo } from 'react';
import { ConfigTextField, CustomTextFieldProps } from '../../interfaces/Form';

const TextFieldWrapper: React.FC<CustomTextFieldProps> = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);


  // Configura el TextField con las propiedades de Formik y otras propiedades adicionales
  const configTextField: ConfigTextField = useMemo(() => {
    const config: ConfigTextField = {
      ...field,
      fullWidth: true,
      variant: 'outlined',
      ...otherProps,
    };

    if (meta && meta.touched && meta.error) {
      config.error = true;
      config.helperText = meta.error;
    }

    return config;
  }, [field, meta, otherProps]);

  return (
    <TextField
      {...configTextField}
      inputProps={{ maxLength: 150 }}
    />
  );
};

export default TextFieldWrapper;