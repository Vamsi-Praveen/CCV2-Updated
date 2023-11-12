import { useState } from "react";
import { DataContext } from "./Context";
import { useContext } from "react";


export const DataContextProvider = ({ children }) => {
    const [dataContext, setDataContext] = useState([])
    return (
        <DataContext.Provider value={{ dataContext, setDataContext }}>
            {children}
        </DataContext.Provider>
    )
}
export const useData = () => useContext(DataContext)