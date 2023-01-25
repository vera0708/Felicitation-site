import { useContext } from "react";
import { createContext } from "react";
import { useText } from "../hucks/useText";
import { holidaysContext } from "./holidaysContext";

export const textContext = createContext({})

export const TextContextProvider = ({ children }) => {
    const { holiday } = useContext(holidaysContext)
    const [text] = useText(holiday)

    return (
        <textContext.Provider value={{ text }}>
            {children}
        </textContext.Provider>
    )
}