import { MdAutorenew } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { Products } from 'src/interfaces/product';
export const MainInfo: any = [
	{
		headTitle: 'Free Shipping',
		info: 'When order over $75',
		t: FaShippingFast,
	},
	{
		headTitle: '24/7 Support',
		info: 'Get support all day',
		t: FaPhoneVolume,
	},
	{
		headTitle: 'Refund',
		info: 'Get refund within 3 days!',
		t: MdAutorenew,
	},
];

export const navbar: any = ['news', 'store', 'contact', 'my-room', 'about'];

export const products: Products[] = [
	{
		id: 1,
		author: 'Usmon',
		model: 'Mehmonxona uchun divan',
		description:
			'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
		price: 300,
		sale: 20,
		year: 2024,
		isActive: true,
		top: false,
		image: '/utils/2.jpg',
	},
	{
		id: 2,
		author: 'Ali',
		model: 'Mehmonxona to\'plami',
		description:
			'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
		price: 240,
		sale: 10,
		year: 2023,
		isActive: true,
		top: false,
		image: '/utils/1.jpg',
	},
	{
		id: 3,
		author: 'Usmon',
		model: 'Ofis mebellari',
		description:
			'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
		price: 676,
		sale: 45,
		year: 2023,
		isActive: true,
		top: true,
		image: '/utils/3.jpg',
	},
	{
		id: 4,
		author: 'Usmon',
		model: 'Bir kishilik divan',
		description:
			'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
		price: 70,
		sale: 80,
		year: 2021,
		isActive: true,
		top: true,
		image: '/utils/4.jpg',
	},
	{
		id: 5,
		author: 'Olim',
		model: 'Oshxona uchun stul',
		description:
			'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
		price: 540,
		sale: 1,
		year: 2022,
		isActive: true,
		top: false,
		image: '/utils/5.jpg',
	},
	{
		id: 6,
		author: 'Usmon',
		model: 'Oshxona to\'plami',
		description:
			'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
		price: 644,
		sale: 23,
		year: 2024,
		isActive: true,
		top: false,
		image: '/utils/6.jpg',
	},
	{
		id: 7,
		author: 'Usmon',
		model: 'Oshxona stoli',
		description:
			'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
		price: 455,
		sale: 20,
		year: 2024,
		isActive: true,
		top: false,
		image: '/utils/7.jpg',
	},
	{
		id: 8,
		author: 'Usmon',
		model: 'Taxtalik mebel',
		description:
			'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design',
		price: 345,
		sale: 20,
		year: 2024,
		isActive: true,
		top: true,
		image: '/utils/8.jpg',
	},
];

export const selfData = [
	{
		_id: 12,
		title: 'Mahsulot turi',
		type: [
			{ id: 1, tip: "yog'och", price: 5 },
			{ id: 2, tip: 'temir', price: 9 },
			{ id: 3, tip: 'plastik', price: 12 },
			{ id: 4, tip: 'tilla', price: 22 },
			{ id: 5, tip: 'kumush', price: 11 },
		],
	},
	{
		_id: 13,
		title: 'Ishlab chiqarilgan davlat',
		type: [
			{ id: 1, tip: 'Koreya', price: 5 },
			{ id: 2, tip: 'Yaponiya', price: 9 },
			{ id: 3, tip: 'Angliya', price: 32 },
			{ id: 4, tip: 'Fransiya', price: 42 },
			{ id: 5, tip: 'Germaniya', price: 11 },
		],
	},
	{
		_id: 14,
		title: 'Ishlab chiqarilgan vaqti',
		type: [
			{ id: 1, tip: '2009', price: 25 },
			{ id: 2, tip: '2001', price: 29 },
			{ id: 3, tip: '2005', price: 52 },
			{ id: 4, tip: '2020', price: 42 },
			{ id: 5, tip: '1991', price: 21 },
		],
	},
];


export const news = [
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Муҳаммад',
		prof: 'Nurse Practitioner',
		image: 'https://bit.ly/dan-abramov',
		src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
	},
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Мустафо',
		prof: 'Software developer',
		image: 'https://bit.ly/code-beast',
		src: 'https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Имрон',
		prof: 'Marketing Manager',
		image: 'https://bit.ly/kent-c-dodds',
		src: 'https://images.pexels.com/photos/6707630/pexels-photo-6707630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Умар',
		prof: 'Marketing Manager',
		image: 'https://bit.ly/ryan-florence',
		src: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Иброҳим',
		prof: 'Physician',
		image: 'https://bit.ly/prosper-baba',
		src: 'https://images.pexels.com/photos/6707629/pexels-photo-6707629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Иброҳим',
		prof: 'Psychiatrist',
		image: 'https://bit.ly/code-beast',
		src: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Ислом',
		prof: 'IT Manager',
		image: 'https://bit.ly/sage-adebayo',
		src: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Ислом',
		prof: 'IT Manager',
		image: 'https://bit.ly/ryan-florence',
		src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		author: 'Азизбек',
		prof: 'IT Manager',
		image: 'https://bit.ly/code-beast',
		src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	// {
	// 	title: 'Home Delivery',
	// 	description:
	// 		'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
	// 	author: 'Сардор',
	// 	prof: 'IT Manager',
	// 	image: 'https://bit.ly/broken-link',
	// 	src: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	// },
];
