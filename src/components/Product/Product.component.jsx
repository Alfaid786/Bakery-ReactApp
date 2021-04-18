import React from 'react'
import "./Product.component.css"

const Product = ({imgUrl,title}) => {
    return (
       <> <div className="menu-item">
           <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="menu-background">
            </div>
        </div>
            <h3>{title}</h3>
            </>
    )
}

export default Product
