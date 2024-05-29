import heroLogo from "../../../assets/coffee-delivery-home-logo.svg";
import { HeroGrid } from "./HeroGrid";

export function Hero() {
    return (
        <div className="px-5 pt-5 pb-14 xl:flex xl:gap-14 xl:px-40 xl:py-20">
            <div className="space-y-12 xl:space-y-16">
                <div className="space-y-4">
                    <h1 className="font-poetsen text-3xl leading-8 font-bold xl:text-5xl">
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <h2 className="text-base xl:text-xl">
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </h2>
                </div>

                <HeroGrid />
            </div>

            <img className="hidden xl:block" src={heroLogo} />
        </div>


    );
}