import { ReactNode } from "react";

interface IRoundedIcon {
    description?: string;
    icon: ReactNode;
    bgColor: string;
}

const RoundedIcon: React.FC<IRoundedIcon> = ({ description, icon, bgColor }) => {
    return (
        <div className="flex items-center gap-1 xl:gap-3">
            <span className={`flex items-center justify-center p-1.5 rounded-full ${bgColor}`}>
                {icon}
            </span>
            {description}
        </div>
    );
};

export default RoundedIcon;

