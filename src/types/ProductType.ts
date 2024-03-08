export type ProductType = {
    category: string;
    description: string;
    id: string;
    image: string;
    name: string;
    price: number;
    sale: number;
    stock: number;
    } | { [field: string]: any; }

export type  CartItemType = ProductType & {count: number}