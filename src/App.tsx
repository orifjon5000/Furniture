import React from 'react';

import './App.css';
import { Box } from '@chakra-ui/react';
import { Footer, Navbar } from './components';
import {  Route, Routes } from 'react-router-dom';
import { Contact, Main, News, Store, StoreRoom } from './page-components';

function App() {
	return (
		<Box className='app'>
			<Navbar />

			<Routes>
				<Route path='/self-calculation' element={<StoreRoom />} />
				<Route path='/store' element={<Store />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/news' element={<News />} />
				<Route path='/my-room' element={<StoreRoom />} />
				<Route path='/' element={<Main />} />
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
