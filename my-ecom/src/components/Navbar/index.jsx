import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

const pages = [
  { label: "INICIO", link: "/" },
  { label: "NOSOTROS", link: "/Nosotros" },
  { label: "TORTAS", link: "/categoria/tortas" },
  { label: "DESAYUNOS", link: "/categoria/desayunos" },
  { label: "MESAS TEMATICAS", link: "/categoria/mesas" },
  { label: "CONTACTO", link: "/Contacto" },
  { label: "CARRITO", link: "/Cart" },
];

function Navbar() {

    const [anchorElNav, setAnchorElNav]= useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

  return (
    <div className="App">
     <Box sx={{flexGrow: 1, marginBottom: 3}}>
        <AppBar position="static" style={{ background: '#00b8d4' }}>
            <Toolbar>
                <Typography
                    noWrap
                    component="div"
                    sx={{mr: 2, display: {xs: "none", md: "flex"}}}
                >  
                    <img src="https://i.ibb.co/vcHptxy/logo-definitivo-Mara-Bollo.webp" style={{width: 200, height: 120}} alt="LOGO MB"/>
                </Typography>
                <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'white' }} to={page.link}>{page.label}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{ textDecoration: 'none', color: 'white' }} to={page.link}>{page.label}</Link>
              </Button>
            ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <CartWidget />
            </Box>
          </Toolbar>
        </AppBar>
     </Box>
    </div>
  );
}

export default Navbar;