// FormDataContext.js
import React, { createContext, useState, useContext,useEffect } from 'react';
import axios from 'axios';
const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formDataList, setFormDataList] = useState([]);
  const [cartlist,setcartlist]=useState([])


  useEffect(()=>{
    const fetchdata=async()=>{
   try{
    const response=await axios.get('https://crudcrud.com/api/5943da8d23da47c0892d48e5c41b0f2d/candylist')
    console.log(response.data)
    setFormDataList(response.data)
  }
    catch (error){
      console.log(error)
    }}
    fetchdata() 
  },[])


  useEffect(()=>{
    const fetchfinal=async()=>{
      try{
        const response=await axios.get('https://crudcrud.com/api/5943da8d23da47c0892d48e5c41b0f2d/finalcandylist')
        setcartlist(response.data)
      }
      catch(error){
        console.log(error)
      }
    };fetchfinal()
  },[])
  const addFormData = (newFormData) => {
    console.log(newFormData);
    setFormDataList((prevList) => [...prevList, newFormData]);
  };
  const listhandl2=(data)=>{
    setcartlist((prevlist)=>[...prevlist,data])
  }

  const contextValue = {
    formDataList,
    addFormData,
    listhandl2,
    cartlist,
  };

  return (
    <FormDataContext.Provider value={contextValue}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  return useContext(FormDataContext);
};
