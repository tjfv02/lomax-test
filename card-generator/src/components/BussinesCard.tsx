import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

interface BusinessCardProps {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, jobTitle, email, phone }) => {
  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 300 }}>
      <Box textAlign="center" mb={2}>
        <img src="/path/to/logo.png" alt="Logo" width={100} />
      </Box>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {jobTitle}
      </Typography>
      <Typography variant="body1" mt={2}>
        📧 {email}
      </Typography>
      <Typography variant="body1">
        📞 {phone}
      </Typography>
    </Paper>
  );
};

export default BusinessCard;
