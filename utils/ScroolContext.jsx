import { useState, createContext } from "react";

const ScroolContext = createContext();


// eslint-disable-next-line react/prop-types
function ScroolProvider({children}){
    const [scrool, setScrool] = useState(0);
    
    // eslint-disable-next-line no-unused-vars
    const togglescrool = (event) => {
        setScrool(event);
        console.log(scrool);
    }

    const value = {
        scrool,
        togglescrool
    }

    return(
        <ScroolContext.Provider value={value}>
            {children}
        </ScroolContext.Provider>
    )
} 


export {ScroolProvider, ScroolContext}