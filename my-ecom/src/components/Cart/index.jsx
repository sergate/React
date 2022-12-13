import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";


const Cart = () => {
	const { cart, totalPrice, defaultUserData } = useCartContext();
	const pedido = [...cart];

	if (cart.length === 0) {
		return (
			<>
			<h2>NO AGREGASTE PRODUCTOS AL CARRITO</h2>
			<h3>Mira nuestros productos artesanales haciendo <Link to="/">click aqui</Link></h3>
		  	</>
	)}

	return (
		<>
			{pedido.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
			<Link to="/checkout" onClick={() => defaultUserData()}>
				<button>Emitir compra</button>
			</Link>
			
		</>
	);
};

export default Cart;
