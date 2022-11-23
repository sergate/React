import React from "react";
import "./Item.css";

const Item = ({ info }) => {
	return (
		<a href="" className="cakeshop">
			<img src={info.imagen} alt="" />
			<p>{info.nombre}</p>
		</a>
	);
};

export default Item;