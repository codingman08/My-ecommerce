import {  Link, useParams } from "react-router-dom";
import "./SingleProduct.css"
import { useQuery } from "react-query";
import axios from "axios";
import { memo } from "react";
function SingleProduct ({addItem}){
    const {id} = useParams();
    
    const {data:product,isError} = useQuery(["detail"], async ()=> {
        return axios.get(`https://fakestoreapi.com/products/${id}`).then(res => res.data)
    })

    if(isError){
        return <h1>error....</h1>
    }

    return (
        <div className="product-container">
            <div className="image-container">
                <img className="detail-image" src={product?.image} alt="" />
            </div>
            <div className="product-detail">
                <div className="category"><h4>{product?.category}</h4></div>
                <div className="title"><h2>{product?.title}</h2></div>
                <h2>$ {product?.price}</h2>
                <div className="description">{product?.description}</div>
                <div className="button-container">
                <button onClick={()=>addItem(product)} className="addToButton">Add To Cart</button>
                <button className="addToButton"><Link to="/cart" className="cart-link">Go To Cart</Link></button>
                </div>
                <div>
                    <Link className= "linkInfo" to="/"> Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default memo(SingleProduct);