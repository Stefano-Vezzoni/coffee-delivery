import { MapPinLine } from "phosphor-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormFields } from "../Checkout";

interface IAdressForm {
    register: UseFormRegister<FormFields>;
    errors: FieldErrors<FormFields>;
}

export function AddressForm({ register, errors }: IAdressForm) {
    return (
        <div className="space-y-5">
            <h2 className="font-poetsen text-lg">
                Complete seu pedido
            </h2>

            <div className="space-y-6 p-5 rounded-lg bg-neutral-100 xl:p-10 xl:space-y-8">
                <div className="flex gap-1 xl:gap-2">
                    <MapPinLine className="w-6 h-6" color="#C47F17" />

                    <span className="flex flex-col text-zinc-800">
                        <h2 className="text-sm xl:text-base">
                            Endereço de Entrega
                        </h2>

                        <p className="text-xs xl:text-sm">
                            Informe o endereço onde deseja receber seu pedido
                        </p>
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                    <input className="p-3 max-w-40 rounded-md bg-neutral-200 xl:max-w-52"
                        placeholder="CEP"
                        type="input"
                        {...register('cep')}
                    />
                    {errors.cep && (<span className="text-red-500">{errors.cep.message}</span>)}

                    <input
                        className="p-3 rounded-md bg-neutral-200"
                        placeholder="Rua"
                        type="input"
                        {...register('rua')}
                    />
                    {errors.rua && (<span className="text-red-500">{errors.rua.message}</span>)}


                    <span className="flex gap-2">
                        <input
                            className="w-1/3 p-3 rounded-md bg-neutral-200 xl:max-w-52"
                            placeholder="Número"
                            type="input"
                            {...register('numero')}
                        />
                        {errors.numero && (<span className="text-red-500">{errors.numero.message}</span>)}

                        <input
                            className="p-3 rounded-md bg-neutral-200 xl:w-full"
                            placeholder="Complemento (Opcional)"
                            type="input"
                            {...register('complemento')}
                        />
                        {errors.complemento && (<span className="text-red-500">{errors.complemento.message}</span>)}
                    </span>

                    <span className="flex gap-2 flex-wrap space-y-1.5 xl:space-y-0">
                        <input
                            className="flex-grow p-3 rounded-md bg-neutral-200"
                            placeholder="Bairro"
                            type="input"
                            {...register('bairro')}
                        />
                        {errors.bairro && (<span className="text-red-500">{errors.bairro.message}</span>)}

                        <input
                            className="flex-grow p-3 rounded-md bg-neutral-200"
                            placeholder="Cidade"
                            type="input"
                            {...register('cidade')}
                        />
                        {errors.cidade && (<span className="text-red-500">{errors.cidade.message}</span>)}

                        <input
                            className="max-w-16 p-3 rounded-md bg-neutral-200"
                            placeholder="UF"
                            type="input"
                            {...register('uf')}
                        />
                        {errors.uf && (<span className="text-red-500">{errors.uf.message}</span>)}
                    </span>
                </div>
            </div>
        </div>
    );
}