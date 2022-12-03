import './ItemDetail.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
			setGoToCart(true);
			addProduct(data, quantity);
	};

	return (
		<div className="container">
			<div className="detail">
			{/* <h1>{data.nombre}</h1> */}
				<img className="detail__image" src={data.imagen} alt="" />
				<div className="content">
					<h1>{data.descripcion}</h1>
					<h1>Precio: $ {data.precio}</h1>
					<h1>Stock: {data.stock} Unidades</h1>
					{goToCart ? (
						<Link to="/cart"> Terminar la compra</Link>
					) : (
						<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;