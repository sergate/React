import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
          Pasteleria Creativa
        </Typography>
        <Stack direction='row' spacing={2}>
            <Button color='inherit'>Inicio</Button>
            <Button color='inherit'>Quienes Somos</Button>
            <Button color='inherit'>Productos</Button>
            <Button color='inherit'>Como Comprar</Button>
            <Button color='inherit'>Contacto</Button>
        </Stack>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
