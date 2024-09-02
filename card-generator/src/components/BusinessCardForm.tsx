import { Formik, Form } from 'formik';
import { Grid, Button, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import { BusinessCardSchema } from '../schema/ValidationsYup';
import TextFieldWrapper from './general/TextFieldWrapper';
import ButtonWrapper from './general/ButtonWrapper';
import BusinessCard from './BussinesCard';

const INITIAL_VALUES = {
  name: '',
  jobTitle: '',
  email: '',
  phone: '',
};

const BusinessCardForm: React.FC = () => {
  const [cardData, setCardData] = useState(INITIAL_VALUES);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmit = (values: typeof INITIAL_VALUES) => {
    setCardData(values);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  useEffect(() => {
    if (isEditMode) {
      // Reset form to current card data when switching to edit mode
      setCardData(INITIAL_VALUES);
    }
  }, [isEditMode]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography fontWeight="bold" variant="h6">
            {isEditMode ? "Editar Tarjeta de Presentación" : "Nueva Tarjeta de Presentación"}
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Formik
        initialValues={cardData}
        enableReinitialize={true}
        validationSchema={BusinessCardSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldWrapper name="name" label="Nombre" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWrapper name="jobTitle" label="Cargo" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWrapper name="email" label="Correo Electrónico" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWrapper name="phone" label="Teléfono" />
            </Grid>
            <Grid item xs={12} className="form--actions-buttons">
              <Button
                style={{ marginRight: 4 }}
                variant="text"
                onClick={handleCancel}
                color="error"
                fullWidth={false}
              >
                Cancelar
              </Button>
              <ButtonWrapper>{isEditMode ? "Guardar" : "Crear"}</ButtonWrapper>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <br />
      {!isEditMode && (
        <BusinessCard
          name={cardData.name}
          jobTitle={cardData.jobTitle}
          email={cardData.email}
          phone={cardData.phone}
        />
      )}
    </>
  );
};

export default BusinessCardForm;
