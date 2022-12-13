import React, { useContext, useState, useEffect } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import swal from 'sweetalert';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`cart`)) || []);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [tel, setTel] = useState("");
	const [adress, setAdress] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [orderCreated, setOrderCreated] = useState("");

	const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
	};

	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);
	
	useEffect(() => {
		localStorage.setItem(`cart`, JSON.stringify(cart));
	 });

	let validateEmail = (email) => {
		const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (emailReg.test(email) === false) {
		  swal({
			title: 'El mail ingresado no es valido',
			text: 'Necesitamos su correo para poder enviarle la informacion del pedido',
			icon: 'warning',
			dangerMode: false,
		  });
	
		  return false;
		}
		return true;
	  };

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));

	const handleClickBuyButton = () => {
		const order = { user: { nombre: name, apellido: surname, email: email, telefono: tel, direccion: adress, codigoPostal: postalCode }, carrito: cart, };
	
		const dataBase = getFirestore();
		const orders = collection(dataBase, 'orders');
		
		if (name === `` || surname === `` || email === `` || tel === `` || adress === `` || postalCode === ``) {
		  swal({
			title: 'Faltan ingresar datos!',
			text: 'Complete todos los campos para poder generar el pedido!',
			icon: 'warning',
			dangerMode: false,
		  });
		  return;
		}
		if (validateEmail(email) === false) {
		  return;
		}
	
		addDoc(orders, order).then((orderCreated) => {
		  setOrderCreated(orderCreated.id);
		});
		
		setTimeout(() => {
		  clearCart();
		});
	};
	const defaultUserData = () => {
		setName("");
		setSurname("");
		setEmail("");
		setTel("");
		setAdress("");
		setPostalCode("");
		setOrderCreated("");
	};	
	return (
		<CartContext.Provider
		value={{ clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts, cart, orderCreated, handleClickBuyButton, defaultUserData, name, surname, email, tel, adress, postalCode, setName, setSurname, setEmail, setTel, setAdress, setPostalCode, }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;