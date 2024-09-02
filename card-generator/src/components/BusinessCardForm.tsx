import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Grid, Button, Typography, Paper, Box, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { BusinessCardSchema } from '../schema/ValidationsYup';
import TextFieldWrapper from './general/TextFieldWrapper';
import ButtonWrapper from './general/ButtonWrapper';
import BusinessCard from './BussinesCard';
import { CardData } from '../interfaces/CardData';


const INITIAL_VALUES: Omit<CardData, 'id'> = {
  name: '',
  jobTitle: '',
  email: '',
  phone: '',
  logoUrl: '',
  title: ''
};

const BusinessCardForm: React.FC = () => {
  const [cardDataList, setCardDataList] = useState<CardData[]>([]);
  const [currentCardData, setCurrentCardData] = useState<CardData | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmit = (values: Omit<CardData, 'id'>) => {
    if (isEditMode && currentCardData) {
      // Edit existing card
      setCardDataList(prev => prev.map(card => 
        card.id === currentCardData.id ? { ...card, ...values } : card
      ));
    } else {
      // Add new card
      const newCard = { id: Date.now(), ...values };
      setCardDataList(prev => [...prev, newCard]);
    }

    setIsEditMode(false);
    setCurrentCardData(null);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setCurrentCardData(null);
  };

  const handleEdit = (id: number) => {
    const cardToEdit = cardDataList.find(card => card.id === id);
    if (cardToEdit) {
      setCurrentCardData(cardToEdit);
      setIsEditMode(true);
    }
  };

  return (
    <Grid container spacing={4} sx={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <Grid item xs={12} md={4}>
        <Box sx={{ padding: 4 }}>
          <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
            <Typography fontWeight="bold" variant="h5" align="center" gutterBottom>
              {isEditMode ? "Editar Tarjeta de Presentación" : "Nueva Tarjeta de Presentación"}
            </Typography>

            <Formik
              initialValues={currentCardData || INITIAL_VALUES}
              enableReinitialize={true}
              validationSchema={BusinessCardSchema}
              onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm();
              }}
            >
              <Form>
                <Grid container spacing={3}>
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
                  <Grid item xs={12}>
                    <TextFieldWrapper name="logoUrl" label="URL del Logo" />
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  {isEditMode ? (
                    <Button
                      variant="outlined"
                      onClick={handleCancel}
                      color="error"
                      sx={{ textTransform: 'none', width: '48%' }}
                    >
                      Cancelar
                    </Button>

                  ) : (<></>)}
                    <ButtonWrapper variant="contained" color="primary" sx={{ width: `${ isEditMode ? '48%' : '100%'}` }}>
                      {isEditMode ? "Guardar" : "Crear"}
                    </ButtonWrapper>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Paper>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Box sx={{ padding: 4, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {cardDataList.map(card => (
            <Box key={card.id} sx={{ position: 'relative', maxWidth: 300, width: '100%' }}>
              <IconButton
                sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
                onClick={() => handleEdit(card.id)}
              >
                <EditIcon />
              </IconButton>
              <BusinessCard
                name={card.name}
                jobTitle={card.jobTitle}
                email={card.email}
                phone={card.phone}
                logoUrl={card.logoUrl}
              />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default BusinessCardForm;
