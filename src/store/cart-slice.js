import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
  name:"cart",
  initialState:{
    items:[],
    totalQuantity:0,
},
reducers:{
    addItemToCart(state,action){
        const newitem=action.payload;
        const existingItem=state.items.find(item=>item.id===newitem.id)
       state.totalQuantity++;
        if(!existingItem)
        {
            state.items.push({
                id:newitem.id,
                price:newitem.price,
                quantity:1,
                totalPrice:newitem.price,
                name:newitem.title
                })
          
        }else{
            existingItem.quantity++;
            existingItem.totalPrice=existingItem.totalPrice+newitem.price;
        }
    },
    removeToCart(state,action){
        const id=action.payload;
        state.totalQuantity--;
        const existingItem=state.items.find(item=>item.id===id)
        if(existingItem.quantity===1)
        {
            state.items=state.item.filter(item=>item.id!==id)
        }else{
            existingItem.quantity--;
        }
    }
} 
});
export const cartAction=cartSlice.actions;
export default cartSlice;