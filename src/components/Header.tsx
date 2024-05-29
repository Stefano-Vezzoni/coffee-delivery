import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import coffeeDeliveryLogo from "../assets/coffee-delivery-logo.svg";
import { ShoppingCartContext } from "../contexts/ShoppingCartProvider";
import SquareButton from "./SquareButton";

export function Header() {
    const { shoppingCart } = useContext(ShoppingCartContext);

    const navigate = useNavigate();

    function handleGoToCheckout() {
        if (window.location.pathname !== '/checkout' && shoppingCart.length)
            navigate('/checkout')
    }

    return (
        <div className="flex justify-between p-6 xl:px-40 xl:py-8">
            <span>
                <img src={coffeeDeliveryLogo} />
            </span>

            <span className="flex justify-center items-center gap-2.5">
                <span className="flex items-center gap-0.5 text-sm h-[38px] px-2 rounded-md text-violet-800 bg-violet-100">

                    <MapPin className="fill-violet-500 w-5 h-5" weight="fill" />
                    Guarulhos, SP
                </span>

                <SquareButton
                    icon={<ShoppingCart className="w-5 h-5 fill-yellow-600" weight="fill" />}
                    bgColor="bg-yellow-100 hover:bg-amber-200"
                    counter={shoppingCart.length}
                    onClick={handleGoToCheckout}
                />
            </span>
        </div>
    );
}