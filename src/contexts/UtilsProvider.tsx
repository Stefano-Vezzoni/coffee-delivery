import { ReactNode, createContext } from "react";
import { ICoffeeCard } from "../components/CoffeeCard";

interface IUtilsContextProvider {
    children: ReactNode
}

interface IUtilsContext {
    formatToReal: (value: number) => string;
    findIndexById: (id: number, CoffeeArray: ICoffeeCard[]) => number;
}

export const UtilsContext = createContext({} as IUtilsContext);

export function UtilsProvider({ children }: IUtilsContextProvider) {

    function formatToReal(value: number) {
        return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function findIndexById(id: number, CoffeeArray: ICoffeeCard[]) {
        return CoffeeArray.findIndex(coffee => coffee.id === id)
    }

    return (
        <UtilsContext.Provider
            value={
                { formatToReal, findIndexById }
            }
        >
            {children}
        </UtilsContext.Provider>
    )
}