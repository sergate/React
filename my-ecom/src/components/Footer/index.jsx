import React from "react";
import Box from "@mui/material/Box";
import "./Footer.css";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "00b8d4" }} className="footer">
        <Box fontSize={"medium"} className="txt"  textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
        Copyright &copy; &reg; {new Date().getFullYear()} "Mara Bollo - Pasteleria Creativa". Todos los Derechos Reservados.
        </Box>
    </div>
  );
}
