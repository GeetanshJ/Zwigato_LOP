import { createContext,  useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    const totalPrice = () => {
        food_list.reduce((acc, item) => {
            return acc + (cartItems[item._id] ? item.price * cartItems[item._id] : 0);
        }, 0);
    }

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId] : 1}));
        }

        else{
            setCartItems((prev) => ({...prev,[itemId] : prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId] : 0}))
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        totalPrice
    }


    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;