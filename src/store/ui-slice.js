import {createSlice} from '@reduxjs/toolkit';
const uiSlice=createSlice({
 name:"UI",
 initialState:{
    cartIsVisible:false
 },
 reducers:{
    toggle(state){
        state.cartIsVisible=!state.cartIsVisible;
    }
 }
});
export const uiAction=uiSlice.actions;
export default uiSlice;