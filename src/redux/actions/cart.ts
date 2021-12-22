import { Cart } from "../reducers/type"
import { ActionType } from "./actionTypes"


export const addToCart = (cart: Cart) => 
{
 return {
     type: ActionType.ADD_TO_CART,
     payload: cart
 }
}

export const deleteCart =(cart: Cart) =>{
    return {
        type: ActionType.DELETE_CART,
        payload: cart
    }
}