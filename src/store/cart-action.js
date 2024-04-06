import { uiAction } from "./ui-slice";
import { cartActions } from "./cart-slice";
 export const fetchCartData=()=>{
    return async dispatch=>{
        const fetchData=async()=>{
            const response=await fetch('https://desire-acb3b-default-rtdb.firebaseio.com/cart.json')
           if(!response.ok){
            throw new Error("Could not fetch cart data!")
           }
            const data=await response.json();
            return data;
        };
        try{
        const cartData= await fetchData();
        dispatch(cartActions.replaceCart(cartData))
        }catch(error){
            dispatch(
                uiAction.showNotification({
                  status:"error",
                  title:"Error",
                  message:"fetching cart data failed!",
                })
              )
        }
       
    };
};



export const sendCartData=(cart)=>{
    return async(dispatch)=>{
      dispatch(uiAction.showNotification({
        status:'pending',
        title:'Sending...',
        message:"Sending Cart data...."
      }));
      
  const sendRequest=async()=>{
    const response=await fetch('https://desire-acb3b-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart),
    });
    if(!response.ok){ 
    throw new Error("Sending cart data failed.") 
    }
  };
  try{
    await sendRequest();
    dispatch(
      uiAction.showNotification({
        status:"success",
        title:"Success",
        message:"Send cart data successfully!",
      })
    )
  } catch(error){
    dispatch(
      uiAction.showNotification({
        status:"error",
        title:"Error",
        message:"Sending cart data failed!",
      })
    )
  }
   }
}