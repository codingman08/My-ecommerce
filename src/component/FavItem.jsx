import React from "react";
import { Link } from "react-router-dom";
import  {FaRegStar} from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import "./FavItem.css"

function FavItem ({data,favItem,addItem,setFavItem}){
    const deleteItem = (data)=> {
        const isHere = favItem.find((f)=> f.id === data.id)
        if (isHere){
            setFavItem(favItem.filter((f)=> f.id !== data.id))
        }
    }
    return (
        <div>
            <center><h1>Your Favourites</h1></center>
            <div className="favCardContainer">
                {favItem.map((f)=>{
                    return (
                        <div key={f.id}>
                            <div className="card card-box">
                                <button onClick={()=>deleteItem(data)} className="heart-icon"><FaTrash/></button>
                                <Link to={`/${f.id}`}><img src={f.image} className="card-img-top image" alt=""/></Link>
                                <div className="card-body">
                                    <h6 className="card-title">{f.title}</h6>
                                    <div><h5 className="valueOfPrice">${f.price}</h5></div>
                                        <div className="starContainer">
                                            <FaRegStar className="star"/>
                                            <FaRegStar className="star"/>
                                            <FaRegStar className="star"/>
                                            <FaRegStar className="star"/>
                                            <FaRegStar className="star"/>
                                        </div>
                                        <center>
                                            <button onClick={()=>addItem(data)} className="addToButton ">Add To Cart</button>
                                        </center>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>         
        </div>
    )
}

export default FavItem;