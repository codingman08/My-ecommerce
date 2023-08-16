import React, { useState } from "react";
import {auth,googleProvider} from "../config/firebase"
import {  signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import './LogIn.css'
import { useNavigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import { FaGooglePlusG } from "react-icons/fa";

function LogIn() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const LogIn = async (e)=> {
        try{
            e.preventDefault();
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password);
            navigate("/")
            console.log(result)
        }catch(err){
            console.log(err.message)
        }
    }
    const GoogleLogIn = async()=> {
        try{
            const google = await signInWithPopup(auth,googleProvider)
            alert("Welcome to our shopping hello " + user?.displayName) 
            console.log(google)
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="login-container">
            <form className="form-container" onSubmit={LogIn}>
                <h2>Sign In</h2>
                <div className="yourEmail">
                    {user?.photoURL ? <img className="accImg" src={user?.photoURL} alt=""/> : <img className="accImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAb1BMVEX///8jHyAAAAAhHB3y8vIdGBr5+fkHAAAMAgYpJieRkJBsa2vc3NwSCw0eGhv19fUXERO5ubk5NjexsbHm5uagoKDAv7/Ozc1kY2MvLCwjIiIODAzU09ObmptdW1usq6x4d3eGhYVAPj5SUFBIR0eaFV1ZAAAEUUlEQVR4nO2b6Y6jOhBGSQGxWewGs2eahizv/4wXbiYZkgwQChdBGo7UihTlx9dlu1bbMDY2NjY2Njb+TeIsKl3XLaMs/rASv/IEAHAuOG8+hVf5n5KyD3MHhLn7gynAycP9B7R8JQUEXSm/BQVQJF9LiwkV2C9SrtigwkW1WHmvlque3FpOTHgQA1paxGEx80SDhrmZJ1pGjAujWlrAXZGYZeRU74pp5FTUYkL26mP6MBnxVrZ+ybfF7HbyF+1Bz8eO9iMipxQTvr9prgDhWu2LcUfziF3QxdCETRSz27GESsxeTTVNYxxFZZxo6q5pIYsQPwFCTfBDI8Z33nd8fzAdmuQUtVBkS+VN83w3hEeiBmeaxjgUYiy0Gopg9Y1W802gBrmJibZxiVZTEqhxOVINp8hINzX9rGvfrOtMrcvfrMsXG4BJKJqUgiROrSyGryu/WVfut668eHql2UJWbX6h6imyBumqak1EsUlXahqIQ07bi5zoAYk83w2LTeptMeIm9qRTTtlLurKqnqhhHN/uFx/pxaysl944QRjfyhLo3N4ToT1WP3B7wRGV5Y3Mp7wF51MNUdHreSQrFpoGdUhUz1xTLbZjDL++T72t8HwA0bWQFHA4h/dFimvieXQFcEg72ipvBw2MsfZj9zAPTw9A6v/8c1PFyKctGn9HSemWSfT9cFeg2eiyqV4uZOZJnWsEZ2r8X67UNTMTu3T0tyiOd6cnQQ3eCNiH6v5bkyRAfNXdgGCzU9J3iSOuTqzrjaDWnhrv86foJIF71auguPLYc+CAXHM6av28xgIzYFx5SerHcWw1f36aeIqzvzgh/qPVNe+9nrhtC4DAUafTSTkBgOiJF+DptE6fmN9GktKWcrAsBo0JcoJt3XTkaAsX6XwxjRxNfic2p9QJfUhTz7UuZBfpGT211YQiYRgdITQudKxTiyzmr1U9vS/RB6vnivF1rVMLzE0vaj1b+IqYaZxMp2ka42Sz1Gg63TfmnfIY2T/vw2RzjlWJnUn1wWdMh/bn6U3QYewzPrVAD4H6mTEecvV5vhsM30e56F6oZqkuWDG4Mccw+CGIlizrGXTWRbBtZmwc1ARoDPSEyNaV2XSRNk4Mesg7DHIErDW16ajBHSrN2cRdDS6rQA0O31CD691qKxae1OBKBw317l/V4GrgdalBX3EZUYNrba/rhBsOiS92cGKMkiRqYjNjyyHIthx0CzDVXMC03eMZTaVEdz01r+H2ztDwfWaPF1Opr/YVcnbvLx5+1PY+NuQ6On/pRYMeGy6amqJWWDy+y5yKKaAINTb3s1qAjbzvZ4Oo5/VtXomjc8H55NtAghfniOQBcBweFQALhkcKN5PIgAGoY0j5FjlOXe/icGCid+FMWzDgzsVz0yVeRVt+Fh091b56bue9nP//Bppzdv2CK+8YZf6ytwUaYj9Lq6Rsn4e7blkmVZr5n34kvrGxsbGxsfEB/gOYPECmixIOZAAAAABJRU5ErkJggg==" alt=""/>}
                    <div><h6 className="userName">{user?.displayName}</h6></div>
                </div>
                <div>
                    <input className="inputTag" placeholder="Enter user or email address" type="email" value={email} onChange={(e)=> {
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div>
                    <input className="inputTag" type="password" placeholder="Enter your password*" value={password} onChange={(e)=> {
                        setPassword(e.target.value)
                    }} />
                </div>
                <div className="spanContainer">
                    <span>
                        <button className="signInButtonClick" type="submit">Sign In</button>
                    </span>
                </div>
                <div >
                    <input type="checkbox" />
                    <span className="spanCheck">Remember me?</span>
                </div>
                <div>
                    <button className="btn" onClick={GoogleLogIn}><FaGooglePlusG className="googleIcon"/>Sign In with Google</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn;
