
import React, { useState } from "react";

interface AppContextI {
    token: string,
    setToken: (value: string) => void

}

export const AppContext = React.createContext({}) as AppContextI;

export const Provider = () => ({ Children }: any) => {

    const [token, setToken] = useState<string>('');
    const values = {
        token,
        setToken


return(<AppContext.Provider value={ values } > { children }</AppContext.Provider >.Provider >)

    }