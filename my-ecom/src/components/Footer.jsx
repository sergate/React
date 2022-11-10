import React from "react";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      FOOTER
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
        <br />
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
        Todos los Derechos Reservados &reg; {new Date().getFullYear()}
        </Box>
      </ul>
    </div>
  );
}
