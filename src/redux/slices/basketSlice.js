import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
        totalPrice: 0,
        totalPriceDiscount: 0,
    },
    reducers: {
        addToBasket: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice += action.payload.price || 0;
            state.totalPriceDiscount += action.payload.price_discount || 0;
        },
        removeFromBasket: (state, action) => {
            const itemToRemove = state.items.find(item => item.id === action.payload);
            if (itemToRemove) {
                state.items = state.items.filter(item => item.id !== action.payload);
                state.totalPrice -= itemToRemove.price || 0;
                state.totalPriceDiscount -= itemToRemove.price_discount || 0;
            }
        },
        clearBasket: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalPriceDiscount = 0;
        },
    },
});
export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;