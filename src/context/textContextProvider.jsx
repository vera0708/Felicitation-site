import { useContext } from "react";
import { createContext } from "react";
import { useFetch } from "../hucks/useFetch";
import { holidaysContext } from "./holidaysContext";
import { URI_API } from "../const/const";

export const textContext = createContext({})

export const TextContextProvider = ({ children }) => {
    const { holiday } = useContext(holidaysContext)
    const [{ text }] = useFetch(holiday ? `${URI_API}text/${holiday}` : '')


    return (
        <textContext.Provider value={{ text }}>
            {children}
        </textContext.Provider>
    )
}