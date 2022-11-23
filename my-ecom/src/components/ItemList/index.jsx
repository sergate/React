import React from "react";
import Item from "../Item";

const ItemList = ({ data = [] }) => {
	return data.map((cakeshop) => <Item key={cakeshop.id} info={cakeshop} />);
};

export default ItemList;