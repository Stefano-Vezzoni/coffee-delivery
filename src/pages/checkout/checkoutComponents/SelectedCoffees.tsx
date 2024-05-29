import { useContext, useMemo } from 'react';
import { CoffeeCard } from '../../../components/CoffeeCard';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartProvider';
import { UtilsContext } from '../../../contexts/UtilsProvider';

export function SelectedCoffees() {
    const { shoppingCart } = useContext(ShoppingCartContext);
    const { formatToReal } = useContext(UtilsContext);

    const deliveryPrice = 3.5;

    function totalItensPrice() {
        const totalItensPrice = shoppingCart.reduce((total, coffee) => {
            return total + coffee.price * coffee.quantity
        }, 0)

        return totalItensPrice;
    }
    const memoizedTotalItensPrice = useMemo(totalItensPrice, [shoppingCart]);

    return (
        <div className="space-y-5">
            <h2 className="font-poetsen text-lg">
                Cafés selecionados
            </h2>

            <div className="space-y-6 p-5 pt-6 rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg bg-neutral-100 xl:p-10 xl:min-w-[440px]">
                {shoppingCart.map(coffee =>
                    <div
                        className="space-y-6"
                        key={coffee.id + coffee.name}
                    >
                        <CoffeeCard
                            id={coffee.id}
                            name={coffee.name}
                            description={coffee.description}
                            price={coffee.price}
                            coffeeImg={coffee.coffeeImg}
                            tags={coffee.tags}
                            quantity={coffee.quantity}
                            simplified={true}
                        />
                        <hr className="border-neutral-200" />
                    </div>
                )}

                <div className="flex flex-col gap-4 px-2 xl:px-0">
                    <div className="space-y-3 text-zinc-600 text-sm">
                        <span className="flex justify-between">
                            <p>
                                Total de itens
                            </p>

                            <p className="text-zinc-700">

                                R$ {formatToReal(memoizedTotalItensPrice)}
                            </p>
                        </span>

                        <span className="flex justify-between">
                            <p>
                                Entrega
                            </p>

                            <p className="text-zinc-700">
                                R$ {formatToReal(deliveryPrice)}
                            </p>
                        </span>

                        <span className="flex justify-between">
                            <p className="text-lg font-bold text-zinc-700 xl:text-xl">
                                Total
                            </p>

                            <p className="text-lg font-bold text-zinc-700 xl:text-xl">
                                R$ {formatToReal(deliveryPrice + memoizedTotalItensPrice)}
                            </p>
                        </span>

                    </div>

                    <button className="text-sm h-9 py-3 rounded-md text-slate-50 bg-[#DBAC2C] hover:bg-[#C47F17] xl:h-11">
                        CONFIRMAR PEDIDO
                    </button>
                </div>
            </div>
        </div>
    );
}
