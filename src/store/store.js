import {createSlice,configureStore} from '@reduxjs/toolkit';

const authSlice=createSlice({
    name:"auth",
    initialState:{
        token:localStorage.getItem("token") || "",
        isLoggedIn:!!localStorage.getItem("token"),
        expenseArray:[],
        isPremium:false,
        isDarkTheme:false,
    },
    reducers:{
        login(state,action)
        {
            const token=action.payload;
            state.token=token;
            state.isLoggedIn=true;
            localStorage.setItem("token",token);
        },
        logout(state)
        {
            state.token="";
            state.isLoggedIn=false;
            localStorage.removeItem("token");
        },
        addData(state,action)
        {
            
            state.expenseArray=action.payload;
        },
        deleteData(state,action)
        {
            const idDelete=action.payload;
            state.expenseArray=state.expenseArray.filter(item=>item.id!==idDelete)
        },
        activatePremium(state) {
              state.isPremium = true;
              console.log("Premium activated");
            
          },
        toggleTheme(state){
            state.isDarkTheme=!state.isDarkTheme;
            console.log("Toggle")
        }
    }
});


const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
    }
});

export const authaction=authSlice.actions;
export default store;
