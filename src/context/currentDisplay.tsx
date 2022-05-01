import { createContext } from "react";

export interface currentDisplayInterface {
    left: JSX.Element,
    right: JSX.Element
}

export const CurrentDisplay = createContext({
    left: <></>,
    right: <></>
});