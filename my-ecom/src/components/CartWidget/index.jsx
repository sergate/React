import React from 'react'
import { useCartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return (
      <>
        <Link to="/cart" size="large" aria-label="show 0 new items" style={{ textDecoration: 'none', color: 'white' }}>
            <ShoppingCartOutlinedIcon />
            <span>{totalProducts() || ""}</span>
        </Link>
      </>
    );
}

export default CartWidget;