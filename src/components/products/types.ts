export interface IProducts {
    products: Product[]
    total: number;
    skip: number;
    limit: number;
}

export interface Product {
    count: number
    id: number;
    title: string;
    category: string;
    brand: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
}