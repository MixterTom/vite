import { useState, createContext } from "react";

const LoginContext = createContext();


// eslint-disable-next-line react/prop-types
function LoginProvider({children}){
    const [type, setType] = useState("login");
    
    // eslint-disable-next-line no-unused-vars
    const toggleType = (newType) => {
        setType(newType);
        console.log(type);
    }

    const value = {
        type,
        toggleType
    }

    return(
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
} 


export {LoginProvider, LoginContext}