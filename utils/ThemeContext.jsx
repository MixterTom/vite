import { useState, createContext, useContext } from "react";
import { LoginContext } from "./LoginContect";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
function ThemeProvider({children}){
    const [theme, setTheme] = useState("hidden");
    const type = useContext(LoginContext);
    // eslint-disable-next-line no-unused-vars
    const toggleTheme = () => {
        setTheme(theme === 'hidden' ? '' : 'hidden');
        type.toggleType('login');
        console.log(theme);
    }

    const value = {
        theme,
        toggleTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
} 


export {ThemeProvider, ThemeContext}