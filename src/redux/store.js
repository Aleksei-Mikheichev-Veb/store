import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./slices/productsSlice"
import basketReducer from "./slices/basketSlice"
import favoritesReducer from "./slices/favoritesSlice"

export const store = configureStore({
    reducer:{
        products: productsReducer,
        basket: basketReducer,
        favorites: favoritesReducer
    }
})