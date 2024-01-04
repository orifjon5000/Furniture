import React, { useState } from 'react';

import './index.css';
import { Box } from '@chakra-ui/react';
import { Footer, Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import {
	About,
	Checkout,
	Contact,
	Main,
	News,
	Store,
	StoreRoom,
} from './page-components';
import { CardItem } from './interfaces/cart.interface';
import { Products } from './interfaces/product';

function App() {
	//INITIALIZATIONS
	const cartJson: any = localStorage.getItem('cart_data');
	const current_cart: CardItem[] = JSON.parse(cartJson) ?? [];
	const [cardItems, setCardItems] = useState<CardItem[]>(current_cart);

	//HANDLERS
	const onAdd = (product: Products) => {
		const exist: CardItem | undefined = cardItems.find(
			(item: CardItem) => item.id === product.id
		);
		if (exist) {
			const cart_updated = cardItems.map((item: CardItem) =>
				item.id === product.id
					? { ...exist, quantity: exist.quantity + 1 }
					: item
			);
			setCardItems(cart_updated);
			localStorage.setItem('cart_data', JSON.stringify(cart_updated));
		} else {
			const new_item: CardItem = {
				id: product.id,
				quantity: 1,
				name: product.model,
				price: product.price,
				image: product.image,
			};
			const cart_updated = [...cardItems, { ...new_item }];
			setCardItems(cart_updated);
			localStorage.setItem('cart_data', JSON.stringify(cart_updated));
		}
	};

	const onRemove = (item: Products) => {
		const item_data: any = cardItems.find(
			(ele: CardItem) => ele.id === item.id
		);
		if (item_data?.quantity === 1) {
			const cart_updated = cardItems.filter(
				(ele: CardItem) => ele.id !== item.id
			);
			setCardItems(cart_updated);
			localStorage.setItem('cart_data', JSON.stringify(cart_updated));
		} else {
			const cart_updated = cardItems.map((ele: CardItem) =>
				ele.id === item.id
					? { ...item_data, quantity: item_data.quantity - 1 }
					: ele
			);
			setCardItems(cart_updated);
			localStorage.setItem('cart_data', JSON.stringify(cart_updated));
		}
	};

	const onDelete = (item: CardItem) => {
		const cart_updated = cardItems.filter(
			(ele: CardItem) => ele.id !== item.id
		);
		setCardItems(cart_updated);
		localStorage.setItem('cart_data', JSON.stringify(cart_updated));
	};

	const onDeleteAll = () => {
		setCardItems([]);
		localStorage.removeItem('cart_data');
	};
	return (
		<Box className='app'>
			<Navbar cartItems={cardItems} />

			<Routes>
				<Route path='/self-calculation' element={<StoreRoom />} />
				<Route path='/store' element={<Store onAdd={onAdd} />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/news' element={<News />} />
				<Route path='/my-room' element={<StoreRoom />} />
				<Route path='/about' element={<About />} />
				<Route
					path='/checkout'
					element={
						<Checkout 
						onAdd={onAdd}
						cartItems={cardItems}
							onDelete={onDelete}
							onRemove={onRemove}
							onDeleteAll={onDeleteAll}
						/>
					}
				/>
				<Route path='/' element={<Main />} />
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
