import React from "react";
import "./Cart.css"
import { FaTrash } from "react-icons/fa";

function Cart ({cartItem,addItem,removeItem,decreseItem}){
   const price = cartItem.reduce((a,c)=>{
    return a + c.qty * c.price;
   },0)
    return(
        <div>
            <div className="item-container">
                {cartItem.length === 0 ? <h1>No item is added here......</h1> :
                 <div>
                    <div>
                        <div><h3>Your Item</h3></div>
                    </div>
                        {cartItem.map((x)=>{
                            return (
                        <div key={x.id} className="cart-wholeContainer">
                            <div className="cart-items">
                                <div>
                                    <img className="cart-image" src={x.image} alt="" />
                                    <div>{x.title}</div>
                                </div>
                                <div>
                                    <button className="plus-button" onClick={()=>addItem(x)}>+</button>
                                    <button className="minus-button" onClick={()=>decreseItem(x)}>-</button>
                                </div>
                                <div>
                                    <span>{x.qty}</span>
                                </div>
                                <div>
                                    <button className="trash-button" onClick={()=>removeItem(x)}><FaTrash/></button>
                                </div>
                                <div>
                                    <div>Price- ${x.price * x.qty}</div>
                                </div>
                            </div>
                            <hr />  
                        </div>
                     )
                 })}
             </div>}
              <div>{cartItem.length !== 0 && (
                <div>
                 <h1>Subtotal - $ {price}</h1>
                 <button className="check-out-button" onClick={()=> alert(`Completed the check out and your total is $ ${price}`)}>Check Out</button>
                </div>
              )}</div>
            </div>
        </div>
    )
}

export default Cart;