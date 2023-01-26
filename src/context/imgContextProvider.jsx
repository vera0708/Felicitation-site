import { useContext } from "react";
import { createContext } from "react";
import { useFetch } from "../hucks/useFetch";
import { URI_API } from '../const/const';
import { holidaysContext } from "./holidaysContext";

export const imgContext = createContext({})

export const ImgContextProvider = ({ children }) => {
    const { holiday } = useContext(holidaysContext)
    const [{ urlImg }] = useFetch(holiday ? `${URI_API}image/${holiday}` : '')

    return (
        <imgContext.Provider value={{ urlImg }}>
            {children}
        </imgContext.Provider>
    )
}