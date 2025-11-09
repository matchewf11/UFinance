import React from "react";

interface UiCardProps {
    children: React.ReactNode;
}

const UiCard = ({children}: UiCardProps) => {
    return(
        <div className="bg-white border-1 border-solid border-neutral-300 rounded-[12px] p-4 h-full">
            {children}
        </div>
    );
}

export default UiCard;