import { CartItem } from "../redux/slices/cartSlice"

export const calcTotalPrice = (items: CartItem[]) => {

    return items.reduce((sum, obj) => {                 
        return obj.price_obj + sum
    }, 0)
}

