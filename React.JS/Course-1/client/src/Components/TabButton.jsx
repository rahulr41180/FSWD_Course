
import { useTransition } from "react";

export const TabButton = ({children, isActive, onClick}) => {
    if (isActive) {
        return <b>{children}</b>
    }

    return (
        <div>
            <button onClick={onClick}>
                { children}

            </button>
        </div>
    )
}