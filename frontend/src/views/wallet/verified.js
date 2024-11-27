import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { motion } from "framer-motion";

const SuccessAnimation = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f9f9f9"
      padding={3}
    >
      {/* Icono animado */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "#97C703",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CheckCircleOutline style={{ fontSize: 60, color: "#fff" }} />
      </motion.div>

      {/* Texto de éxito */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#333" }}
        >
          ¡Cuenta Vinculada!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "#555", marginBottom: 4 }}
        >
          Tu billetera ha sido vinculada con éxito. Ahora puedes disfrutar de nuestros servicios.
        </Typography>
      </motion.div>

      {/* Botón de acción */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.href = "/dashboard"}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            background: "#333",
            "&:hover": { background: "#555" },
          }}
        >
          Ir al Dashboard
        </Button>
      </motion.div>
    </Box>
  );
};

export default SuccessAnimation;
