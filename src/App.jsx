import React from "react";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import NavBar from "./component/NavBar";
import PageNotFound from "./component/PageNotFound";
import SingleProduct from "./component/SingleProduct";
import { useQuery } from "react-query";
import axios from "axios";
import LogIn from "./authentication/LogIn";
import FavItem from "./component/FavItem";
import { useState } from "react";



function App() {
  const [cartItem,setCartItem] =useState([]);
  const [favItem,setFavItem] = useState([]);

  console.log(favItem)


  const getProductsItem = () => {
    return axios.get("https://fakestoreapi.com/products").then(respon => respon.data)
  }

  const {data,isLoading,isError} = useQuery(["productItem"],getProductsItem)


  if(isLoading){
    return <h1>Loading ......</h1>
  }

  if (isError){
    return <h1>sorry, there was an error in your page</h1>
  }

  const addItem =(data)=> {
    const exist = cartItem.find((x)=>x.id === data.id);
    if(exist){
      setCartItem(
        cartItem.map((x)=>x.id === data.id ? {...exist,qty : exist.qty + 1} : x)
      )
    }else {
      setCartItem(
        [...cartItem,{...data,qty : 1}]
      )
    }
  }

  const decreseItem = (data)=>{
    const exist = cartItem.find((x)=>x.id === data.id);
    if(exist.qty === 1){
      setCartItem(
        cartItem.filter((x)=>x.id !== data.id)
      )
    }else {
      setCartItem(
        cartItem.map((x)=>x.id === data.id ? {...exist,qty : exist.qty-1} : x
        )
      )
    }
  }

  const removeItem = (data)  =>{
    const exist = cartItem.find((x)=>x.id === data.id);
    if (exist){
      setCartItem(
        cartItem.filter((x)=>x.id !== data.id)
      )
    }
  }

  const addToFav = (data) => {
      const isHere = favItem.find((f)=> f.id === data.id);
      if (isHere){
          setFavItem(
            favItem.map((f)=> f.id === data.id ? {...isHere} : f)
          )
      }else {
          setFavItem(
            [...favItem,{...data}]
          )
      }
  }
  return (
    <main> 
      <BrowserRouter>
        <NavBar cartItem={cartItem} data={data}/>
        <Routes>
          <Route path="/" element={<Home data={data} addItem={addItem} getProductsItem={getProductsItem} addToFav={addToFav} />}/>
          <Route path="/:id" element={<SingleProduct addItem={addItem}/>}/>
          <Route path="/yourFav" element={<FavItem favItem={favItem} setFavItem={setFavItem} addItem={addItem} data={data}/>}/>
          <Route path="/cart" element={<Cart cartItem={cartItem} addItem={addItem} removeItem={removeItem} decreseItem={decreseItem}/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </main>
  )
}

export default App;
