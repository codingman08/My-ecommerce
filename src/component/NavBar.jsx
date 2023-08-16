import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { FaShoppingCart } from "react-icons/fa";
import {auth} from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { FaHeart } from "react-icons/fa";


function NavBar({cartItem}){
    const [user] = useAuthState(auth);
    const LogOut = async ()=> {
        try {
            alert("Are You sure to Logout?")
            setTimeout( async()=>{
                signOut(auth)
                alert("logout successfully")
            },1000)
        }catch (err){
            console.log(err)
        }
    }
    return(
        <header className="header-container">
            <div className="innerContainer">
                <div><Link className="li-link" to="/"><h3 className="headLetter">Ecommerce</h3></Link></div>
                <div>
                    <button className="cart-icon-button">
                        <Link className="li-link" to="/cart">          
                            <FaShoppingCart className="cart-icon"/>
                            <div className="count">{cartItem.length}</div>
                        </Link>
                    </button>
                </div>
                <div>
                    <Link to="/yourFav"><FaHeart className="cart-icon"/></Link>
                </div>
               {!user ? (
                 <div>
                 <button className="signInButton" >
                    <Link className="li-signIn" to="/login">Sign In</Link>
                 </button>
             </div>
               ) :(
                <div>
                    <div>
                        <center>
                            {user?.photoURL ? (
                            <Link to="/login"><img src={user?.photoURL} className="acc-photo" alt="" /></Link>
                            ) : (
                            <Link to="/login"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAb1BMVEX///8jHyAAAAAhHB3y8vIdGBr5+fkHAAAMAgYpJieRkJBsa2vc3NwSCw0eGhv19fUXERO5ubk5NjexsbHm5uagoKDAv7/Ozc1kY2MvLCwjIiIODAzU09ObmptdW1usq6x4d3eGhYVAPj5SUFBIR0eaFV1ZAAAEUUlEQVR4nO2b6Y6jOhBGSQGxWewGs2eahizv/4wXbiYZkgwQChdBGo7UihTlx9dlu1bbMDY2NjY2Njb+TeIsKl3XLaMs/rASv/IEAHAuOG8+hVf5n5KyD3MHhLn7gynAycP9B7R8JQUEXSm/BQVQJF9LiwkV2C9SrtigwkW1WHmvlque3FpOTHgQA1paxGEx80SDhrmZJ1pGjAujWlrAXZGYZeRU74pp5FTUYkL26mP6MBnxVrZ+ybfF7HbyF+1Bz8eO9iMipxQTvr9prgDhWu2LcUfziF3QxdCETRSz27GESsxeTTVNYxxFZZxo6q5pIYsQPwFCTfBDI8Z33nd8fzAdmuQUtVBkS+VN83w3hEeiBmeaxjgUYiy0Gopg9Y1W802gBrmJibZxiVZTEqhxOVINp8hINzX9rGvfrOtMrcvfrMsXG4BJKJqUgiROrSyGryu/WVfut668eHql2UJWbX6h6imyBumqak1EsUlXahqIQ07bi5zoAYk83w2LTeptMeIm9qRTTtlLurKqnqhhHN/uFx/pxaysl944QRjfyhLo3N4ToT1WP3B7wRGV5Y3Mp7wF51MNUdHreSQrFpoGdUhUz1xTLbZjDL++T72t8HwA0bWQFHA4h/dFimvieXQFcEg72ipvBw2MsfZj9zAPTw9A6v/8c1PFyKctGn9HSemWSfT9cFeg2eiyqV4uZOZJnWsEZ2r8X67UNTMTu3T0tyiOd6cnQQ3eCNiH6v5bkyRAfNXdgGCzU9J3iSOuTqzrjaDWnhrv86foJIF71auguPLYc+CAXHM6av28xgIzYFx5SerHcWw1f36aeIqzvzgh/qPVNe+9nrhtC4DAUafTSTkBgOiJF+DptE6fmN9GktKWcrAsBo0JcoJt3XTkaAsX6XwxjRxNfic2p9QJfUhTz7UuZBfpGT211YQiYRgdITQudKxTiyzmr1U9vS/RB6vnivF1rVMLzE0vaj1b+IqYaZxMp2ka42Sz1Gg63TfmnfIY2T/vw2RzjlWJnUn1wWdMh/bn6U3QYewzPrVAD4H6mTEecvV5vhsM30e56F6oZqkuWDG4Mccw+CGIlizrGXTWRbBtZmwc1ARoDPSEyNaV2XSRNk4Mesg7DHIErDW16ajBHSrN2cRdDS6rQA0O31CD691qKxae1OBKBw317l/V4GrgdalBX3EZUYNrba/rhBsOiS92cGKMkiRqYjNjyyHIthx0CzDVXMC03eMZTaVEdz01r+H2ztDwfWaPF1Opr/YVcnbvLx5+1PY+NuQ6On/pRYMeGy6amqJWWDy+y5yKKaAINTb3s1qAjbzvZ4Oo5/VtXomjc8H55NtAghfniOQBcBweFQALhkcKN5PIgAGoY0j5FjlOXe/icGCid+FMWzDgzsVz0yVeRVt+Fh091b56bue9nP//Bppzdv2CK+8YZf6ytwUaYj9Lq6Rsn4e7blkmVZr5n34kvrGxsbGxsfEB/gOYPECmixIOZAAAAABJRU5ErkJggg==" className="acc-photo" alt="" /></Link>
                            )}
                        </center>
                        <span className="headLetter">{user?.email}</span>
                    </div>            
                </div>
               )}
               {user && (
                <div>
                     <span>
                        <button className="signOutButton" type="submit" onClick={LogOut}>Sign Out</button>
                    </span>  
                </div>
               )}
            </div>
        </header>
    )
}

export default NavBar;