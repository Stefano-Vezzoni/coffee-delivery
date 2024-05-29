import { Minus, Plus } from "phosphor-react";
import { EnumOperation } from "./CoffeeCard";

interface iCounter {
    counter: number;
    onIncrement: (operation: EnumOperation) => void;
    onDecrement: (operation: EnumOperation) => void;
}

export function Counter({ counter, onIncrement, onDecrement }: iCounter) {

    return (
        <div className="flex items-center justify-center gap-1 w-[72px] h-[38px] p-2 rounded-md bg-neutral-200">
            <button onClick={(e) => { e.preventDefault(); onDecrement(EnumOperation.DECREMENT) }}>
                <Minus className="h-4 w-4 text-violet-500 hover:text-violet-800" weight="bold" />
            </button>

            <span className="p-1">
                {counter}
            </span>

            <button onClick={(e) => { e.preventDefault(); onIncrement(EnumOperation.INCREMENT) }}>
                <Plus className="h-4 w-4 transition text-violet-500 hover:text-violet-800" weight="bold" />
            </button>
        </div>
    );
}