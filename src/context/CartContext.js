import { createContext, useState } from "react";

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    }

    const addToCart = (item, quantity) => {
        console.log(item)
        console.log(quantity)
        if (isInCart(item.id)) {
            const newCart = [...cart]
            for( const element of newCart){
                if(element.item.id === item.id) {
                    element.quantity = element.quantity + quantity
                }
            }
            setCart(newCart)
        } else {
        setCart(
            [
                ...cart,
                {
                    ...item,
                    quantity: quantity
                }
            ]
        )}
    }

    const isInCart = (id) => {
        return cart.find((element) => element.id === id);
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.id !== id);
        setCart(newCart)
    }

    const suma = () => {
        console.log(cart)
        return cart.reduce((acc, prod) => acc += prod.precio*prod.quantity, 0 )
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        suma
    }

    return  (
        <Provider value={context}>
            {children}
        </Provider>
    )
}