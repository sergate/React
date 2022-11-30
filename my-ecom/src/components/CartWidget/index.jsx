import React from 'react'
import { useCartContext } from "../../context/CartContext";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return (
      <>
        <ShoppingCartOutlinedIcon />
        <span>{totalProducts() || ""}</span>
      </>
    );
}

export default CartWidget;