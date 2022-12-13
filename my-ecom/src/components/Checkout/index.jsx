import React from 'react';
import { useCartContext } from "../../context/CartContext";
import Form from "../Form";
import PurchasedOrder from "../PurchasedOrder";
import { Watch } from 'react-loader-spinner';

export default function Checkout() {
  const { cart, orderCreated } = useCartContext();

  return (
    <>
      {cart.length !== 0 ? (
        <>
          <h1 className="titleCheckout">FINALIZA TU COMPRA</h1>
          <div className="checkoutContainer">
            <div className="formContainer">
              <Form />
            </div>
          </div>
        </>
      ) : orderCreated !== '' ? (
        <>
          <PurchasedOrder />
        </>
      ) : (
        <>
          <div className="watchContainer">
            <Watch height="250" width="250" radius="48" color="red" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
          </div>
        </>
      )}
    </>
  );
}