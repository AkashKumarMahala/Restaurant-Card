import React from 'react'
import './style.css'
const MenuCard = ({menuData}) => {
    return (    
        <section className="main-card--cointainer">
            {menuData.map((el) => {
                const { id, name, category, image, description } = el
            return(
                <>
                <div className="card-container" key={el.id}>
                <div className="card">
                <div className="card-body">
                        <span className="card-number card-circle subtle">{id}</span>
                        <span className="card-author subtle">{category}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">
                            { description }
                        </span>
                        <div className="card-read">Read</div>
                </div>
                <img src={image} alt="" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
            </div>
            </div>   
            </>  
            )
            })
}
         </section>
        
    
    
    )
}

export default MenuCard
