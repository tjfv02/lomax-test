import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { BusinessCardProps } from "../interfaces/CardData";

const BusinessCard: React.FC<BusinessCardProps> = ({
  name,
  jobTitle,
  email,
  phone,
  logoUrl,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 300,
        borderRadius: 2,
        background: "linear-gradient(145deg, #f0f0f0, #e0e0e0)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box textAlign="center" mb={2}>
        {logoUrl && <img src={logoUrl} alt="Logo" width={100} style={{ borderRadius: '50%' }} />} {/* Mostrar logo */}
      </Box>
      <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        sx={{ fontStyle: "italic", marginBottom: 2 }}
      >
        {jobTitle}
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        📧 {email}
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        📞 {phone}
      </Typography>
    </Paper>
  );
};

export default BusinessCard;
