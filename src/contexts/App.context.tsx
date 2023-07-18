
import React, { useState } from "react";

interface user {

    name: string;
    email: string;
    role: string;
    status: boolean;
    google: boolean;
    vid: string;
}


interface AppContextI {
    token: string,
    user: User | null,
    setToken: (value: string) => void
    setUser: (value: User) => void
}

export const AppContext = React.createContext({}) as AppContextI;

export const Provider = () => ({ Children }: any) => {

    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<User | null>(null);
        
        const value = {

            token,
            setToken,
            user,
            setUser
        }


return(<AppContext.Provider value={ values } > { children }</AppContext.Provider >.Provider >)

    }