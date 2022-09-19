import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart';
import modalReducer from './reducers/modal';


export const store=configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer,
    },
});
