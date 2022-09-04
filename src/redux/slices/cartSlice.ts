import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';

export type CartItem = {
    id: string;
    title: string;
    price?: number;
    price_obj?: number;
    imageUrl: string;
    type: string;
    size: number;
    count?: number;
};

const {items, totalPrice} = getCartFromLS()

const initialState = {
    totalPrice,
    items
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {            
            state.items.push(action.payload)

            state.totalPrice = calcTotalPrice(state.items)
        },

        removeItem(state, action) {
            state.items.splice(state.items.findIndex((arrow) => arrow.id_unique === action.payload.id_unique), 1);

            state.totalPrice = state.totalPrice - action.payload.price_obj
        },

        clearItems(state) {
            state.totalPrice = 0
            state.items = []
        },
    }
})

export const selectStateSort = state => state.filter.sort

export const { 
    addItem,
    clearItems,
    removeItem
} = cartSlice.actions;

export default cartSlice.reducer