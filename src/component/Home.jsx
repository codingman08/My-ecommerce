
import "./Home.css"
import Product from "./Product";
import { memo } from "react";

function Home({data,addItem,addToFav}){
    return(
        <div>
            <div className="shoppingImageContainer">
                <img src="https://burst.shopifycdn.com/photos/man-in-suit-on-stairs.jpg?width=1200&format=pjpg&exif=1&iptc=1" className="shoppingImage" alt="" />
            </div>
            <div className="featureContainer">
                <div><h2 className="head-title">FEATURED COLLECTION</h2><hr/></div>
                <div className="product-container">
                    {data?.map((data)=>{
                    return <Product key={data.id} data={data} addItem={addItem} addToFav={addToFav}/>
                    })} 
                </div>
            </div>
        </div>
    )
}

export default memo(Home);