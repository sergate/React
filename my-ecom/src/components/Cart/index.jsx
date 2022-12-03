import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const pedido = {
		buyer: {
			name: "Pablo",
			email: "Pablo@gmail.com",
			phone: "123123",
			address: "asdd",
		},
		items: cart.map((product) => ({
			id: product.id,
			nombre: product.nombre,
			precio: product.precio,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const pedidoCollection = collection(db, "pedidos");
		addDoc(pedidoCollection, pedido).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<>
			<h2>NO AGREGASTE PRODUCTOS AL CARRITO</h2>
			<h3>Mira nuestro productos artesanales haciendo <Link to="/">click aqui</Link></h3>
		  	</>
	)}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
			<Link to="/checkout">
				<button onClick={handleClick}>Emitir compra</button>
			</Link>
			
		</>
	);
};

export default Cart;