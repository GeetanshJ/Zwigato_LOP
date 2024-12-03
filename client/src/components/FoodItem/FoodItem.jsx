import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import "./FoodItem.css"
const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)
    return (
        <div className='food-item'>
            {
                cartItems && cartItems[id] !== undefined ? (
                    <div className="food-item-counter">
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                ) : (
                    <img className="add" src={assets.add_icon_white} alt="" onClick={() => addToCart(id)} />
                )
            }


            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>

                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
