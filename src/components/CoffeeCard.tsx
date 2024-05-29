import { ShoppingCart, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import coffeeExpresso from "../assets/coffee-expresso.svg";
import { ShoppingCartContext } from "../contexts/ShoppingCartProvider";
import { UtilsContext } from "../contexts/UtilsProvider";
import { CoffeeTag } from "./CoffeeTag";
import { Counter } from "./Counter";
import SquareButton from "./SquareButton";
import { toast } from "react-toastify";

export interface ICoffeeCard {
    id: number;
    name: string;
    description: string;
    price: number;
    coffeeImg: string;
    tags: string[];
    quantity: number;
    simplified?: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export enum EnumOperation {
    INCREMENT,
    DECREMENT
}

export function CoffeeCard({ id, name, description, price, coffeeImg, tags, quantity, simplified }: ICoffeeCard) {
    const { shoppingCart, setShoppingCart, addToShoppingCart } = useContext(ShoppingCartContext);
    const { formatToReal } = useContext(UtilsContext);

    const [counter, setCounter] = useState(1);

    const formattedPrice = formatToReal(price * counter);

    function handleCounterPlus() {
        setCounter(counter => counter + 1)
    }

    function handleCounterMinus() {
        if (counter > 1) {
            setCounter(counter => counter - 1)
        }
    }

    function handleQuantity(operation: EnumOperation) {
        const newShoppingCart = shoppingCart.map(coffee => {
            if (coffee.id === id) {
                if (operation === EnumOperation.INCREMENT) {
                    return { ...coffee, quantity: coffee.quantity + 1 };
                }
                if (operation === EnumOperation.DECREMENT && quantity > 1) {
                    return { ...coffee, quantity: coffee.quantity - 1 };
                }
                return coffee
            } else {
                return coffee
            }
        });

        setShoppingCart(newShoppingCart)
    }

    function handleAddToCart() {
        addToShoppingCart({
            id: id,
            name: name,
            description: description,
            price: price,
            coffeeImg: coffeeImg,
            tags: tags,
            quantity: counter,
        })
        toast.success('Café adicionado ao carrinho!')
    }

    function handleRemoveCoffee(id: number) {
        setShoppingCart(prev => prev.filter(coffee => coffee.id !== id))
    }

    return simplified ? (
        <div className="flex justify-between">
            <div className="flex gap-2.5 xl:gap-5">
                <img className="w-16 h-16 self-center" src={coffeeExpresso} />

                <span className="flex flex-col gap-2 text-sm text-zinc-700 xl:text-base">
                    <p>{name}</p>

                    <span className="flex items-center gap-2">
                        <Counter counter={quantity} onDecrement={handleQuantity} onIncrement={handleQuantity} />


                        <button className="flex items-center p-1.5 gap-1 w-[90px] h-[38px] rounded-md bg-neutral-200 hover:bg-neutral-300"
                            onClick={(e) => { e.preventDefault(); handleRemoveCoffee(id) }}
                        >
                            <Trash className="w-4 h-4" color="#8047F8" />

                            <p className="text-xs text-zinc-700">
                                REMOVER
                            </p>
                        </button>
                    </span>
                </span>
            </div>

            <span className="font-bold text-zinc-700 text-nowrap">
                R$ {formatToReal(price * quantity)}
            </span>
        </div>
    ) : (
        <div className="flex flex-col justify-between h-[310px] w-64 px-5 rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg bg-neutral-100">
            <div className="flex flex-col items-center">
                <img className="-mt-5 w-28 h-28" src={coffeeImg} />

                <div className="flex gap-1 mt-3">
                    {tags.map(tag => (
                        <CoffeeTag key={tag + id} tag={tag} />
                    ))}
                </div>

                <div className="text-center space-y-2 mt-4">
                    <p className="font-bold font-poetsen text-xl text-zinc-700">
                        {name}
                    </p>

                    <p className="text-zinc-500 text-sm">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between mb-5">
                <span className="space-x-0.5 xl:space-x-1">
                    <span className="text-sm text-zinc-600">
                        R$
                    </span>

                    <span className="text-xl font-poetsen font-bold text-zinc-700">
                        {formattedPrice}
                    </span>
                </span>

                <div className="flex items-center gap-2">
                    <Counter counter={counter} onDecrement={handleCounterMinus} onIncrement={handleCounterPlus} />

                    <SquareButton
                        icon={<ShoppingCart className="w-5 h-5 fill-slate-50" weight="fill" />}
                        bgColor="bg-violet-800 hover:bg-violet-600"
                        onClick={handleAddToCart}
                    />
                </div>
            </div>
        </div>
    )
}