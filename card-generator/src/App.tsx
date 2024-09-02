import React from 'react';
import { Container, Box } from '@mui/material';
import BusinessCardForm from './components/BusinessCardForm';

const App: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <BusinessCardForm />
      </Box>
    </Container>
  );
};

export default App;
