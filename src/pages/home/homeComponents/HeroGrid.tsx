import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import RoundedIcon from "../../../components/RoundedIcon";

export function HeroGrid() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-y-3 text-sm xl:gap-y-5 xl:text-base">
            <RoundedIcon
                description="Compra simples e segura"
                icon={<ShoppingCart className="h-3.5 w-3.5 fill-slate-50 xl:4 xl:w-4" weight="fill" />}
                bgColor="bg-amber-600"
            />

            <RoundedIcon
                description="Embalagem mantém o café intacto"
                icon={<Package className="h-3.5 w-3.5 fill-slate-50" weight="fill" />}
                bgColor="bg-zinc-600"
            />

            <RoundedIcon
                description="Entrega rápida e rastreada"
                icon={<Timer className="h-3.5 w-3.5 fill-slate-50" weight="fill" />}
                bgColor="bg-yellow-500"
            />

            <RoundedIcon
                description="O café chega fresquinho até você"
                icon={<Coffee className="h-3.5 w-3.5 fill-slate-50" weight="fill" />}
                bgColor="bg-violet-500"
            />
        </div>
    );
}