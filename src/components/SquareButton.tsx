import { ReactNode } from "react";

interface ISquareButton {
    icon: ReactNode;
    bgColor: string;
    counter?: number | null;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SquareButton: React.FC<ISquareButton> = ({ icon, bgColor, counter, onClick }) => {
    return (
        <button className={`flex items-center justify-center w-[38px] h-[38px] rounded-md transition relative ${bgColor}`}
            onClick={onClick}
        >
            {counter != null && counter > 0 &&
                <span className="flex justify-center items-center absolute top-[-20%] right-[-20%] w-5 h-5 pl-px pb-px text-xs font-bold text-zinc-50 rounded-full center bg-amber-600">
                    {counter}
                </span>
            }

            {icon}
        </button>
    );
}

export default SquareButton;
