import { ReactNode } from "react"
import { CoffeeListProvider } from "./CoffeeListProvider"
import { ShoppingCartProvider } from "./ShoppingCartProvider"
import { UtilsProvider } from "./UtilsProvider"
import { OrderListProvider } from "./OrderListProvider"

interface UseContextProviderProps {
    children: ReactNode
}

export function UseContextHook({ children }: UseContextProviderProps) {
    return (
        <>
            <UtilsProvider>
                <OrderListProvider>
                    <CoffeeListProvider>
                        <ShoppingCartProvider>
                            <CoffeeListProvider>
                                {children}
                            </CoffeeListProvider>
                        </ShoppingCartProvider>
                    </CoffeeListProvider>
                </OrderListProvider>
            </UtilsProvider>
        </>
    )
}