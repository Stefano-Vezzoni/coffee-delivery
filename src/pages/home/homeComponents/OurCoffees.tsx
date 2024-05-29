import { useContext } from "react";
import { CoffeeCard } from "../../../components/CoffeeCard";
import { CoffeeListContext } from "../../../contexts/CoffeeListProvider";

export function OurCoffees() {

    const { coffeeList } = useContext(CoffeeListContext);

    return (
        <div className="space-y-10 px-5 xl:px-40">
            <h1 className="text-2xl font-poetsen font-bold text-zinc-700">
                Nossos cafés
            </h1>

            <div className="grid grid-cols-1 grid-rows-1 gap-y-8 place-items-center xl:grid-cols-4 xl:place-items-baseline xl:gap-8">
                {coffeeList.map(coffee =>
                    <CoffeeCard
                        key={coffee.id}
                        id={coffee.id}
                        name={coffee.name}
                        description={coffee.description}
                        price={coffee.price}
                        coffeeImg={coffee.coffeeImg}
                        tags={coffee.tags}
                        quantity={1}
                    />
                )}
            </div>
        </div>
    );
}