import { Cart } from './type';
import { ICartAction } from "../reducers/type"
import { ActionType } from '../actions/actionTypes';

  
export const cartReducer =(state : Cart[] = [], action: ICartAction) => {
    switch(action.type) {
        case ActionType.ADD_TO_CART:{
            if(!action.cart)
            return state;

            const temp = state.filter((cart) => {
                if (cart.item.id === action.cart?.item.id && cart.item.weight === action.cart.item.weight) {
                cart.quantity += action.cart.quantity;
                  return true;
                } else return false;
              });
              if(temp.length==0) state.push(action.cart)
              return state;
        }
        case ActionType.DELETE_CART :{
            if(!action.id || !action.weight) return state;
            //check id
            const temp = state.filter(item=> {
                if(item.item.id === action.id && item.item.weight ===action.weight)
                  return false;
                return true;
    
            })
            return temp;
        }
        default : 
        return state;
            
    }

}