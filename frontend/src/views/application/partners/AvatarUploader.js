import React from "react";
import { Avatar, Button, Typography, Box } from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";

const AvatarUploader = ({ avatar, onImageChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 1.5, // Espaciado entre elementos
      }}
    >
      {/* Avatar */}
      <label htmlFor="avatar-upload">
        <input
          type="file"
          id="avatar-upload"
          style={{ display: "none" }}
          onChange={onImageChange}
          accept="image/*"
        />
        <Avatar
          src={avatar || "https://via.placeholder.com/100"} // Imagen predeterminada
          sx={{
            width: 100,
            height: 100,
            cursor: "pointer",
          }}
          alt="Avatar"
        />
      </label>

      {/* Botón para subir una foto */}
      <Button
        variant="outlined"
        color="primary"
        component="label"
        startIcon={<AddPhotoAlternate />}
      >
        Elegir foto
        <input
          type="file"
          hidden
          onChange={onImageChange}
          accept="image/*"
        />
      </Button>

      {/* Texto de ayuda */}
      <Typography variant="caption">
        Haga clic en el avatar para elegir una foto
      </Typography>
    </Box>
  );
};

export default AvatarUploader;
