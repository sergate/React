import DesayunoMadre from '../images/desayuno 6.webp';
import DesayunoAdolescente from '../images/desayuno 1.webp';
import Pastafrola from '../images/pastafrola.webp';
import MesaCasamiento from '../images/mesa 4.webp';
import MesaCumpleaños from '../images/mesa 2.webp';
import DesayunoPadre from '../images/box 2.webp';
import TortaNiños from '../images/cumple 2.webp';
import TortaAdultos from '../images/cumple 1.webp';

export const cakeshop = [
  {
    id: `Desayuno Dia de la Madre`,
    nombre: 'Desayuno Dia de la Madre',
    descripcion: 'Desayuno para el dia de la madre. Incluye bandeja y taza.',
    tipo: 'desayunos',
    precio: 2500,
    imagen: DesayunoMadre,
    stock: 10,
  },
  {
    id: `Desayuno Adolescente`,
    nombre: 'Desayuno Adolescente',
    descripcion: 'Desayuno para adolescentes. Incluye bandeja y taza.',
    tipo: 'desayunos',
    precio: 2200,
    imagen: DesayunoAdolescente,
    stock: 10,
  },
  {
    id: `Pastafrola`,
    nombre: 'Pastafrola',
    descripcion: 'Puede ser de membrillo o batata. Para disfrutar con unos mates.',
    tipo: 'varios',
    precio: 950,
    imagen: Pastafrola,
    stock: 10,
  },
  {
    id: `Mesa Tematica Casamiento`,
    nombre: 'Mesa Tematica Casamiento',
    descripcion: 'Realizadas con productos artesanales. Se pueden armar segun su necesidad. Precio por kilo.',
    tipo: 'Mesas Tematicas',
    precio: 1750,
    imagen: MesaCasamiento,
    stock: 10,
  },
  {
    id: `Mesa Tematica Cumpleaños`,
    nombre: 'Mesa Tematica Cumpleaños',
    descripcion: 'Realizadas con productos artesanales. Se pueden armar segun su necesidad. Precio por kilo.',
    tipo: 'Mesas Tematicas',
    precio: 2500,
    imagen: MesaCumpleaños,
    stock: 10,
  },
  {
    id: `Desayuno Dia del Padre`,
    nombre: 'Desayuno Dia del Padre',
    descripcion: 'Desayuno para el dia del Padre. Incluye bandeja, taza y foto personalida en la caja.',
    tipo: 'desayunos',
    precio: 2750,
    imagen: DesayunoPadre,
    stock: 10,
  },
  {
    id: `Torta de Cumpleaños Niños`,
    nombre: 'Torta de Cumpleaños Niños',
    descripcion: 'Torta de cumpleaños para Niños. Precio por kilo.',
    tipo: 'desayunos',
    precio: 1500,
    imagen: TortaNiños,
    stock: 10,
  },
  {
    id: `Torta de Cumpleaños Adultos`,
    nombre: 'Torta de Cumpleaños Adultos',
    descripcion: 'Torta de cumpleaños para adultos. Precio por kilo.',
    tipo: 'desayunos',
    precio: 2500,
    imagen: TortaAdultos,
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(cakeshop);
    }, 2000);
  });
};
