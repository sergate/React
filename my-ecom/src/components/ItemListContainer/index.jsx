import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useEffect, useState} from "react";

const cakeshop = [
  {
    id: 1,
    nombre: 'Desayuno Dia de la Madre',
    descripcion: 'Desayuno para el dia de la madre. Incluye bandeja y taza.',
    tipo: 'desayunos',
    precio: 2500,
    imagen: "https://i.ibb.co/1b37jwL/desayuno-6.webp",
    stock: 10,
  },
  {
    id: 2,
    nombre: 'Desayuno Adolescente',
    descripcion: 'Desayuno para adolescentes. Incluye bandeja y taza.',
    tipo: 'desayunos',
    precio: 2200,
    imagen: "https://i.ibb.co/sgxQhTM/desayuno-1.webp",
    stock: 10,
  },
  {
    id: 3,
    nombre: 'Pastafrola',
    descripcion: 'Puede ser de membrillo o batata. Para disfrutar con unos mates.',
    tipo: 'varios',
    precio: 950,
    imagen: "https://i.ibb.co/DGbRmNk/pastafrola.webp",
    stock: 10,
  },
  {
    id: 4,
    nombre: 'Mesa Tematica Casamiento',
    descripcion: 'Realizadas con productos artesanales. Se pueden armar segun su necesidad. Precio por kilo.',
    tipo: 'Mesas Tematicas',
    precio: 1750,
    imagen: "https://i.ibb.co/JQFBW51/mesa-4.webp",
    stock: 10,
  },
  {
    id: 5,
    nombre: 'Mesa Tematica Cumpleaños',
    descripcion: 'Realizadas con productos artesanales. Se pueden armar segun su necesidad. Precio por kilo.',
    tipo: 'Mesas Tematicas',
    precio: 2500,
    imagen: "https://i.ibb.co/KrfTpGW/mesa-2.webp",
    stock: 10,
  },
  {
    id: 6,
    nombre: 'Desayuno Dia del Padre',
    descripcion: 'Desayuno para el dia del Padre. Incluye bandeja, taza y foto personalida en la caja.',
    tipo: 'desayunos',
    precio: 2750,
    imagen: "https://i.ibb.co/dgsjth0/box-2.webp",
    stock: 10,
  },
  {
    id: 7,
    nombre: 'Torta de Cumpleaños Niños',
    descripcion: 'Torta de cumpleaños para Niños. Precio por kilo.',
    tipo: 'desayunos',
    precio: 1500,
    imagen: "https://i.ibb.co/vzRKN8J/cumple-2.webp",
    stock: 10,
  },
  {
    id: 8,
    nombre: 'Torta de Cumpleaños Adultos',
    descripcion: 'Torta de cumpleaños para adultos. Precio por kilo.',
    tipo: 'desayunos',
    precio: 2500,
    imagen: "https://i.ibb.co/26NnP0n/cumple-1.webp",
    stock: 10,
  },
];


export const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(cakeshop);
      }, 2000);
    });
    getData.then(res => setData(res));
    
  }, [])

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
    
  }

  return (
    <>
      <h1 style={{ backgroundColor: "orange" }}>{greeting}</h1>;
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  )
};
