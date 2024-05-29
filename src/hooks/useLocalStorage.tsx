import { FormFields } from "../pages/checkout/Checkout";

const localKey = "@Coffee-Delivery";

export function getLocalStorage() {
    return JSON.parse(localStorage.getItem(localKey) || "{}");
}

export function setLocalStorage(data: { AddressForm: FormFields }) {
    const existingData = getLocalStorage();

    const formattedData = {
        ...(existingData || {}),
        ...data
    }

    localStorage.setItem(localKey, JSON.stringify(formattedData))
}