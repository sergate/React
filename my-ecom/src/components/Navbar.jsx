import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mara Bollo - Pasteleria Creativa
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Quienes Somos</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Como Comprar</Button>
          <Button color="inherit">Contacto</Button>
        </Stack>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};
