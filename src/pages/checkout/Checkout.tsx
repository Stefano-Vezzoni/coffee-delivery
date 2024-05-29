import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartProvider";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { OrderListContext } from "../../contexts/OrderListProvider";
import uuid from 'react-uuid'
import { AddressForm } from "./checkoutComponents/AddressForm";
import { useForm } from "react-hook-form";
import { PaymentForm } from "./checkoutComponents/PaymentForm";
import { SelectedCoffees } from "./checkoutComponents/SelectedCoffees";
import { getLocalStorage, setLocalStorage } from "../../hooks/useLocalStorage";

export interface IFormData {
    id: string;
    formFields: FormFields;
}

// eslint-disable-next-line react-refresh/only-export-components
export enum PaymentOptions {
    credito = "Cartão de Crédito",
    debito = "Cartão de Débito",
    dinheiro = "Dinheiro",
}

const schema = z.object({
    cep: z.coerce.number().min(8),
    rua: z.string().min(1),
    numero: z.coerce.number().min(1),
    complemento: z.string(),
    bairro: z.string().min(1),
    cidade: z.string().min(1),
    uf: z.string().min(2).max(2),
    paymentOption: z.enum([PaymentOptions.credito, PaymentOptions.debito, PaymentOptions.dinheiro])
})

export type FormFields = z.infer<typeof schema>;

export function Checkout() {
    const { setShoppingCart } = useContext(ShoppingCartContext);
    const { addToOrderList } = useContext(OrderListContext);

    function loadAddressForm() {
        const existingData = getLocalStorage();

        if (existingData.AddressForm) {
            return existingData.AddressForm;
        } else {
            return null
        }
    }
    const storedDefaultValues = loadAddressForm();
    console.log(storedDefaultValues);


    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        defaultValues: storedDefaultValues || {}
    })

    const navigate = useNavigate();

    function onSubmit(data: FormFields) {
        const id = uuid();
        addToOrderList(id, data)
        navigate(`/success/${id}`)

        setLocalStorage({ AddressForm: data })

        //reset shoppingCart
        setShoppingCart([])
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 pt-7 space-y-10 xl:flex xl:gap-8 xl:px-40 xl:space-y-0">
            <div className="space-y-5">
                <AddressForm register={register} errors={errors} />
                <PaymentForm control={control} errors={errors} />
            </div>

            <SelectedCoffees />
        </form >
    );
}