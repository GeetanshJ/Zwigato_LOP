import { createContext,  useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = ({children}) => {
    const [cartItems,setCartItems] = useState({});

    const getTotalCartAmount = () => {
        let totalPrice = food_list.reduce((acc, item) => {
            return acc + (cartItems[item._id] ? item.price * cartItems[item._id] : 0);
        }, 0);

        return totalPrice;
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
        getTotalCartAmount
    }


    return(
        <StoreContext.Provider value = {contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;