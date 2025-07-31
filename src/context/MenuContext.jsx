import { createContext, useState } from "react";

export const MenuContext = createContext('');

export const MenuContextProvider = ({children})=>{
    const [activeTab, setActiveTab] = useState(true);

    const handleTab = () => {
        setActiveTab((prev) => !prev)
    }

    return(
        <MenuContext.Provider value={{handleTab, activeTab, setActiveTab}}>
            {children}
        </MenuContext.Provider>
    )
}

