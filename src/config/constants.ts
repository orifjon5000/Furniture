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
		top: false,
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
