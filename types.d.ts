declare type Order = {
    id: string;
    name: string;
    qty: number;
}

declare type Product = {
    id: string;
    name: string;
    price: string;
    price_before_discount: string;
    discount: string;
    quantity: string;
    img: string;
    category: string;
    img_lg: string;
    tags: string[]
}

declare type Category = {
    id: string;
    name: string;
} 