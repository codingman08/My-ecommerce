import React, { useState } from "react";
import Product from "./Product";

function Clothes ({data}) {
    const [clothes,setClothes] = useState({})
    console.log(clothes)
    const showItem = (itemName) => {
        const update = data.filter((x)=> x.category === itemName)
        setClothes(update);
    }
    return (
        <div>
            men clothing
            {showItem}
        </div>
    )
}

export default Clothes;