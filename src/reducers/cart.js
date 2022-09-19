import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import cartItems from '../cartItems';


const url='https://course-api.com/react-useReducer-cart-project';



const initialState = {
    cartItems:[],
    amount:4,
    total:0,
    isLoading:true,
}

export const getCartItems = createAsyncThunk('cart/getCartItems',
 ()=>{
   return fetch(url)
   .then(resp=>resp.json())
   .catch((error)=>console.log(error));
 });

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
     clearCart: (state)=>{ state.cartItems=[];},
     
     removeItem: (state,action)=>{
         console.log(action);
         const item_ID=action.payload ; /*Para tirar o valor do ID que passado como parametro */
         state.cartItems=state.cartItems.filter((item)=> item.id!==item_ID );
     },
     
     increaseItem:(state,{payload})=>{
        const cart_Item=state.cartItems.find(item=>item.id===payload); /*{payload} nao preciso de fazer action.payload */
        cart_Item.amount=cart_Item.amount+1;
     },
     
     decreaseItem:(state,{payload})=>{
         const cart_Item=state.cartItems.find(item=>item.id===payload);
         cart_Item.amount=cart_Item.amount-1;
     },
     calculateTotals:(state)=>{
      let amount_aux=0;
      let total_aux=0;

      state.cartItems.forEach(item=>{
         amount_aux+=item.amount;
         total_aux+=item.amount*item.price;
      })

      state.amount=amount_aux;
      state.total=total_aux;
     }
  },
  extraReducers:{
      [getCartItems.pending]:(state)=>{
         state.isLoading=true; 
      },
      [getCartItems.fulfilled]:(state,action)=>{
         
         state.isLoading=false;
         state.cartItems=action.payload;
         console.log(action); 
      },
      [getCartItems.rejected]:(state)=>{
         state.isLoading=false; 
      }
  }
}); 


export const {clearCart, removeItem,increaseItem,decreaseItem,calculateTotals} = cartSlice.actions

export default cartSlice.reducer

/**
 * const initialStateValue = {
    cartItems:cartItems,
    amount:4,
    total:0,
    isLoading:true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { value:{initialStateValue}},
  reducers:{
     clearCart: (state)=>{
        state.amount=0;
     }
  }
});
 */


/*
Este vai buscar os dados no ficheiro cartItems

import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../cartItems';


const initialState = {
    cartItems:cartItems,
    amount:4,
    total:0,
    isLoading:true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
     clearCart: (state)=>{ state.cartItems=[];},
     
     removeItem: (state,action)=>{
         console.log(action);
         const item_ID=action.payload ; Para tirar o valor do ID que passado como parametro 
         state.cartItems=state.cartItems.filter((item)=> item.id!==item_ID );
     },
     
     increaseItem:(state,{payload})=>{
        const cart_Item=state.cartItems.find(item=>item.id===payload); {payload} nao preciso de fazer action.payload 
        cart_Item.amount=cart_Item.amount+1;
     },
     
     decreaseItem:(state,{payload})=>{
         const cart_Item=state.cartItems.find(item=>item.id===payload);
         cart_Item.amount=cart_Item.amount-1;
     },
     calculateTotals:(state)=>{
      let amount_aux=0;
      let total_aux=0;

      state.cartItems.forEach(item=>{
         amount_aux+=item.amount;
         total_aux+=item.amount*item.price;
      })

      state.amount=amount_aux;
      state.total=total_aux;
     }
  }
}); 


*/