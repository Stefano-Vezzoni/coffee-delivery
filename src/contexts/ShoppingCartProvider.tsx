import { ReactNode, createContext, useContext, useState } from "react";
import { ICoffeeCard } from "../components/CoffeeCard";
import { UtilsContext } from "./UtilsProvider";

interface IShoppingCartContextProvider {
    children: ReactNode
}

interface IShoppingCart {
    shoppingCart: ICoffeeCard[];
    setShoppingCart: React.Dispatch<React.SetStateAction<ICoffeeCard[]>>;
    addToShoppingCart: (coffee: ICoffeeCard) => void;
}

export const ShoppingCartContext = createContext({} as IShoppingCart);

export function ShoppingCartProvider({ children }: IShoppingCartContextProvider) {
    const { findIndexById } = useContext(UtilsContext);

    const [shoppingCart, setShoppingCart] = useState<ICoffeeCard[]>([]);

    function addToShoppingCart(coffee: ICoffeeCard) {
        const coffeeFound = findIndexById(coffee.id, shoppingCart);

        if (coffeeFound != -1) {
            setShoppingCart((prev) => {
                const newArray = [...prev];
                const updatedCoffee = newArray[coffeeFound]

                updatedCoffee.quantity = updatedCoffee.quantity + (coffee.quantity);
                newArray[coffeeFound] = updatedCoffee;

                return newArray;
            })
        } else {
            setShoppingCart((prev) => [...prev, coffee])
        }
    }

    return (
        <ShoppingCartContext.Provider
            value={
                { shoppingCart, setShoppingCart, addToShoppingCart }
            }
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}