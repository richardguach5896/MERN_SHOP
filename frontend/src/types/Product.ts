export interface Product{
    name: string;
    image: string;
    description: string;
    richDescription?: string;
    images?: string[];
    brand?: string;
    stock?: number;
    price: number;
    category?: string;
    countInStock?: number;
    rating?: number;
    isFeatured?: boolean;
    dateCreated?: Date;
  
}