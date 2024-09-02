import React from 'react';
import { Container, Box } from '@mui/material';
import BusinessCardForm from './components/BusinessCardForm';

const App: React.FC = () => {
  return (
    <Container>
      <Box my={4} display="flex" flexDirection="column" alignItems="center">
        <BusinessCardForm />
      </Box>
    </Container>
  );
};

export default App;
