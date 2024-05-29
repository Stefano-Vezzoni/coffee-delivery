import { ReactNode } from "react";

interface IPaymentButton {
    name: string;
    icon: ReactNode;
    props?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function PaymentButton({ name, icon, props, onClick }: IPaymentButton) {
    return (
        <button
            className={`flex items-center px-4 py-2 rounded-lg text-xs border-[0.5px] text-zinc-700 transition bg-neutral-200 hover:bg-violet-100 hover:border-violet-400 ${props} xl:flex xl:items-center xl:gap-2 xl:py-4 xl:mr-0 xl:min-w-36 xl:text-base xl:text-nowrap`}
            onClick={onClick}
        >
            <span className="hidden xl:block">{icon}</span>
            {name}
        </button>
    );
}