
import { ActionType } from './../actions/actionTypes';

export interface Category {
    id: number,
    name:string,
    products: Product[],
    typeProducts: TypeProduct[];
}
export interface Product {
    id: string;
    name: string;
    type: string;
    weight: string;
    quantity: number;
    imgUrl: string;
    price: number;
}
export interface TypeProduct {
    imgUrl: string;
    title: string;   
   
}
export interface Cart {
   quantity: number,
   item: Product;
}
export interface ICartAction{
  type: string;
  cart?: Cart;
  id?: string;
  weight: string;
}
export type ProductState = {
    categories: Category[],
}





export type ProductAction = ICartAction ;