import React from 'react';

const createContext=React.createContext({
    items:[],
    totalAmounnt:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
});
export default createContext;