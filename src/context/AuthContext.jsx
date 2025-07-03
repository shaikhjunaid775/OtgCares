
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [email, setEmail] = useState(localStorage.getItem("loggedinUser") || null);
    const [username, setUsername] = useState(localStorage.getItem('loggedinName') || null);
    

    useEffect(()=>{
        const storedEmail = (localStorage.getItem("loggedinUser"));
        if(storedEmail){
           setEmail({email : storedEmail})
           return
        }

    }, [])
    const login = (userEmail, userName) => {
        localStorage.setItem('loggedinUser', userEmail)
        localStorage.setItem('loggedinName', userName)
        setEmail({userEmail})
        setUsername({userName})
    }
    const logout = () => {
        localStorage.removeItem('loggedinUser')
        setEmail(null)
        setUsername(null)
    }
    return (
        <AuthContext.Provider value={{email ,setEmail, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
