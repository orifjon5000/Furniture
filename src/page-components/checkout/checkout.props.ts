import { CardItem } from 'src/interfaces/cart.interface';
import { Products } from 'src/interfaces/product';

export interface CheckoutProps {
	onDelete: (item: CardItem) => void;
	onRemove: (item: any) => void;
	onAdd: (i: any) => void;
	onDeleteAll: () => void;
	cartItems: CardItem[];

}

export interface InterfaceCustomer {
	name: string;
	mobilenumber: string;
	email: string;

}
