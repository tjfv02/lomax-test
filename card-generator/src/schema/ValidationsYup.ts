import * as Yup from 'yup';

export const BusinessCardSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio'),
  jobTitle: Yup.string().required('El cargo es obligatorio'),
  email: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
  phone: Yup.string().required('El teléfono es obligatorio'),
  logoUrl: Yup.string().url('Debe ser una URL válida').required('La URL del logo es requerida'),
});
