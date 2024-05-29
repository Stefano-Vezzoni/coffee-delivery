import { ReactNode, createContext, useState } from "react";
import { FormFields, IFormData } from "../pages/checkout/Checkout";

interface IOrderListProvider {
    children: ReactNode
}

interface IOrderListContext {
    orderList: IFormData[];
    addToOrderList: (id: string, data: FormFields) => void;
    getOrderById: (id: string | undefined) => IFormData;
}

export const OrderListContext = createContext({} as IOrderListContext);

export function OrderListProvider({ children }: IOrderListProvider) {
    const [orderList, setOrderList] = useState<IFormData[]>([]);

    function addToOrderList(id: string, data: FormFields) {
        setOrderList((prev) => [...prev, { id, formFields: data }])
    }

    function getOrderById(id: string | undefined) {
        const orderFound = orderList.find(order => order.id === id);
        if (orderFound) {
            return orderFound;
        } else {
            throw new Error("Order id not found!");
        }
    }

    return (
        <OrderListContext.Provider
            value={{
                orderList,
                addToOrderList,
                getOrderById
            }}>
            {children}
        </OrderListContext.Provider>
    )
}