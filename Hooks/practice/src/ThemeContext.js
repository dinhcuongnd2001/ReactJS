import {createContext, useState } from "react";
const ThemeContext = createContext();

// console.log(ThemeContext.Provider);

function ThemeProvider({children}){
    const [theme, setTheme] = useState('dark');
    function handleClick() {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    const valueProvider = {
        theme,
        handleClick
    }
    return(
        <ThemeContext.Provider value = {valueProvider}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}