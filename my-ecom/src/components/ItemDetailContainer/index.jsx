import React, {useEffect, useState} from 'react';

import ItemDetail from '../ItemDetail';

const cakeshop = {
      id: 1,
      nombre: 'Desayuno Dia de la Madre',
      descripcion: 'Desayuno para el dia de la madre. Incluye bandeja y taza.',
      tipo: 'desayunos',
      precio: 2500,
      imagen: "https://i.ibb.co/1b37jwL/desayuno-6.webp",
      stock: 10,
    };

export const ItemDetailContainer = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = new Promise(resolve => {
			setTimeout(() => {
				resolve(cakeshop);
			}, 2000);
		});

		getData.then(res=> setData(res));
	}, []);

	return (
		<ItemDetail data={data} />
	);
}

export default ItemDetailContainer;