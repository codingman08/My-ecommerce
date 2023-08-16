import React from "react";
import "./Product.css"
import { Link } from "react-router-dom";
import { memo } from "react";
import  {FaRegStar} from "react-icons/fa";
import  {FaRegHeart} from "react-icons/fa";



function Product ({data,addItem,addToFav}){
    console.log("render code")
    return(     
        <div className="productContainer">
              <div className="card card-box">
                    <button className="heart-icon" onClick={()=>addToFav(data)}><FaRegHeart/></button>
                    <Link to={`/${data.id}`}><img src={data.image} className="card-img-top image" alt=""/></Link>
                    <div className="card-body">
                       <h6 className="card-title">{data.title}</h6>
                       <div><h5 className="valueOfPrice">${data.price}</h5></div>
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
}

export default memo(Product);