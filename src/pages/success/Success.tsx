import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import motorbikeDelivery from "../../assets/motorbike-delivery.svg";
import RoundedIcon from "../../components/RoundedIcon";
import { useParams } from "react-router-dom";
import { OrderListContext } from "../../contexts/OrderListProvider";
import { useContext } from "react";

export function Success() {
    const { id } = useParams<{ id: string }>();
    const { getOrderById } = useContext(OrderListContext);
    const order = getOrderById(id);

    return (
        <div className="p-5 xl:flex xl:px-40 xl:py-20 xl:gap-28 xl:items-end">
            <div className="space-y-4 p-2 xl:flex xl:flex-col xl:gap-10">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-yellow-600 xl:text-[32px]">
                        Uhu! Pedido confirmado
                    </h1>

                    <p className="text-sm xl:text-xl">
                        Agora é só aguardar que logo o café chegará até você
                    </p>
                </div>

                <div className="p-px bg-gradient-to-br from-amber-500 to-violet-700 rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg border-zinc-600">

                    <div className="space-y-5 p-4 text-zinc-600 border-[1px] rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg bg-white xl:p-10 xl:space-y-8">

                        <div className="flex gap-3">
                            <RoundedIcon
                                icon={<MapPin className="h-4 w-4 fill-slate-50" weight="fill" />}
                                bgColor="bg-violet-500"
                            />

                            <span>
                                <p>
                                    Entrega em <strong className="text-zinc-700">
                                        {order.formFields.rua}, {order.formFields.numero}
                                    </strong>
                                </p>

                                <p>
                                    {order.formFields.bairro} - {order.formFields.cidade}, {order.formFields.uf}
                                </p>
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <RoundedIcon
                                icon={<Timer className="h-4 w-4 fill-slate-50" weight="fill" />}
                                bgColor="bg-yellow-500"
                            />

                            <span>
                                <p>
                                    Previsão de entrega
                                </p>

                                <p>
                                    <strong className="text-zinc-700">
                                        20 min - 30 min
                                    </strong>
                                </p>
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <RoundedIcon
                                icon={<CurrencyDollar className="h-4 w-4 fill-slate-50" weight="fill" />}
                                bgColor="bg-yellow-600"
                            />

                            <span>
                                <p>
                                    Pagamento na entrega
                                </p>

                                <p>
                                    <strong className="text-zinc-700">
                                        {order.formFields.paymentOption}
                                    </strong>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <img className="hidden xl:block" src={motorbikeDelivery} />
        </div>
    );
}