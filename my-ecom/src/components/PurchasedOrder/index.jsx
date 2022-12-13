import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function PurchasedOrder() {
  const { orderCreated, name, surname, tel, adress, postalCode, email } = useCartContext();
  const [dateOrder, setDateOrder] = useState('');
  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `${day} / ${month} / ${year}`;
    setDateOrder(date);
  }, [dateOrder]);
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{height: '50vh' }}>
            <h1 className="titulo">MUCHAS GRACIAS POR ELEGIRNOS</h1>
            <h2>Tu ID de pedido es: {orderCreated}</h2>
            <h3>
              <b>A continuacion, se encuentra el detalle de su pedido.</b>
            </h3>
            <ul>
              <li>
                Nombre y Apellido: {name} {surname}
              </li>
              <li>Telefono / Celular: {tel}</li>
              <li>Email: {email}</li>
              <li>
                Domicilio: {adress} - Codigo Postal: {postalCode}
              </li>
              <li>Fecha del Pedido: {dateOrder}</li>
            </ul>
            <Typography>Estaremos enviandole por mail toda la informacion para que pueda hacer el seguimiento de sus productos.</Typography>
            <div className="container-btnIndex">
              <Button variant="contained" color="success">
              <Link style={{ color: 'white', textDecoration: 'none' }} to="/"> Volver al Inicio</Link>
              </Button>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
