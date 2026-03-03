import { ProductInterface } from "../product/product.interface";

export interface BrandInterface {
    id?: number;
    name: string;
    image: string;
}

export interface BrandParams {
    page?: number;
    limit?: number;
    search?: string;
    
}
