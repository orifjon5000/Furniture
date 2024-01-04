import { Products } from "src/interfaces/product";


export interface CardProps {
	item: Products;
	onAdd: (item: Products) => void;
}
