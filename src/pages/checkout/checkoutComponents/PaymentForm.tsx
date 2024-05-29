import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { FieldErrors, Control, Controller } from "react-hook-form";
import { FormFields, PaymentOptions } from "../Checkout";
import { PaymentButton } from "./PaymentButton";

interface IPaymentForm {
    control: Control<FormFields>;
    errors: FieldErrors<FormFields>;
}

export function PaymentForm({ control, errors }: IPaymentForm) {
    return (
        <div className="flex flex-col space-y-6 p-5 rounded-lg bg-neutral-100 xl:p-10 xl:space-y-8">
            <div className="flex gap-1 xl:gap-2">
                <CurrencyDollar className="w-7 h-7 xl:w-6 xl:h-6" color="#8047F8" />

                <span className="flex flex-col text-zinc-800">
                    <h2 className="text-sm xl:text-base">
                        Pagamento
                    </h2>

                    <p className="text-xs xl:text-sm">
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </p>
                </span>
            </div>

            <Controller
                name="paymentOption"
                control={control}
                render={({ field }) => (
                    <div className="flex gap-2 xl:gap-3">
                        <PaymentButton name={PaymentOptions.credito}
                            icon={<CreditCard className="h-5 w-5 text-violet-500" />}
                            props={`${field.value === PaymentOptions.credito ? 'bg-violet-100 border-violet-400' : 'bg-neutral-200'}`}
                            onClick={(e) => { e.preventDefault(); field.onChange(PaymentOptions.credito) }}
                        />

                        <PaymentButton name={PaymentOptions.debito}
                            icon={<Bank className="h-5 w-5 text-violet-500" />}
                            props={`${field.value === PaymentOptions.debito ? 'bg-violet-100 border-violet-400' : 'bg-neutral-200'}`}
                            onClick={(e) => { e.preventDefault(); field.onChange(PaymentOptions.debito) }}
                        />

                        <PaymentButton name={PaymentOptions.dinheiro}
                            icon={<Money className="h-5 w-5 text-violet-500" />}
                            props={`${field.value === PaymentOptions.dinheiro ? 'bg-violet-100 border-violet-400' : ''}`}
                            onClick={(e) => { e.preventDefault(); field.onChange(PaymentOptions.dinheiro) }}
                        />
                    </div>
                )} />
            {errors.paymentOption && (<span className="text-red-500">{errors.paymentOption.message}</span>)}
        </div>
    );
}