import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ info }) => {
	return (
		<Link to={`/detalle/${info.id}`} className="cakeshop">
			<img src={info.imagen} alt="" />
			<p>{info.nombre}</p>
		</Link>
	);
};

export default Item;