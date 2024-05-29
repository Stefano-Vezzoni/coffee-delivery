import { ReactNode, createContext } from "react";
import { ICoffeeCard } from "../components/CoffeeCard";

interface CoffeeCardListContext {
    coffeeList: ICoffeeCard[];
    findCoffeeById: (id: number) => ICoffeeCard | undefined;
}

interface CoffeeListProviderProps {
    children: ReactNode
}

const coffeeList: ICoffeeCard[] = [
    {
        id: 1,
        name: "Expresso Tradicional",
        price: 9.90,
        description: "O tradicional café feito com água quente e grãos moídos",
        coffeeImg: "src/assets/coffee-expresso.svg",
        tags: ["tradicional"],
        quantity: 0
    },
    {
        id: 2,
        name: "Expresso Americano",
        price: 9.90,
        description: "Expresso diluído, menos intenso que o tradicional",
        coffeeImg: "src/assets/coffee-americano.svg",
        tags: ["tradicional"],
        quantity: 0
    },
    {
        id: 3,
        name: "Expresso Cremoso",
        price: 9.90,
        description: "Café expresso tradicional com espuma cremosa",
        coffeeImg: "src/assets/coffee-cremoso.svg",
        tags: ["tradicional"],
        quantity: 0
    },
    {
        id: 4,
        name: "Expresso Gelado",
        price: 9.90,
        description: "Bebida preparada com café expresso e cubos de gelo",
        coffeeImg: "src/assets/coffee-gelado.svg",
        tags: ["tradicional", "gelado"],
        quantity: 0
    },
    {
        id: 5,
        name: "Café com Leite",
        price: 9.90,
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        coffeeImg: "src/assets/coffee-com-leite.svg",
        tags: ["tradicional"],
        quantity: 0
    },
    {
        id: 6,
        name: "Latte",
        price: 9.90,
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        coffeeImg: "src/assets/coffee-latte.svg",
        tags: ["tradicional", "comLeite"],
        quantity: 0
    },
    {
        id: 7,
        name: "Capuccino",
        price: 9.90,
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        coffeeImg: "src/assets/coffee-capuccino.svg",
        tags: ["tradicional", "comLeite"],
        quantity: 0
    },
    {
        id: 8,
        name: "Macchiato",
        price: 9.90,
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        coffeeImg: "src/assets/coffee-macchiato.svg",
        tags: ["tradicional"],
        quantity: 0
    },
    {
        id: 9,
        name: "Mochaccino",
        price: 9.90,
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        coffeeImg: "src/assets/coffee-mochaccino.svg",
        tags: ["tradicional", "comLeite"],
        quantity: 0
    },
    {
        id: 10,
        name: "Chocolate Quente",
        price: 9.90,
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        coffeeImg: "src/assets/coffee-chocolate-quente.svg",
        tags: ["especial", "comLeite"],
        quantity: 0
    },
    {
        id: 11,
        name: "Cubano",
        price: 9.90,
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        coffeeImg: "src/assets/coffee-cubano.svg",
        tags: ["especial", "alcoolico", "gelado"],
        quantity: 0
    },
    {
        id: 12,
        name: "Havaiano",
        price: 9.90,
        description: "Bebida adocicada preparada com café e leite de coco",
        coffeeImg: "src/assets/coffee-havaiano.svg",
        tags: ["especial"],
        quantity: 0
    },
    {
        id: 13,
        name: "Árabe",
        price: 9.90,
        description: "Bebida adocicada preparada com café e leite de coco",
        coffeeImg: "src/assets/coffee-arabe.svg",
        tags: ["especial"],
        quantity: 0
    },
    {
        id: 14,
        name: "Irlandês",
        price: 9.90,
        description: "Bebida preparada com grãos de café árabe e especiarias",
        coffeeImg: "src/assets/coffee-irlandes.svg",
        tags: ["especial", "alcoolico"],
        quantity: 0
    },
];

export const CoffeeListContext = createContext({} as CoffeeCardListContext);

export function CoffeeListProvider({ children }: CoffeeListProviderProps) {

    function findCoffeeById(id: number) {
        return coffeeList.find((coffee) => coffee.id === id)
    }

    return (
        <CoffeeListContext.Provider
            value={{
                coffeeList,
                findCoffeeById
            }}>
            {children}
        </CoffeeListContext.Provider>
    )
}