import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},    //these are default value we are passing The object passed to createContext is the default value for the context. This default value is used when a component does not have a matching Provider above it in the tree.
    lightTheme: () => {}, //  not only state we can also pass the methods as defaul value 
})

export const ThemeProvider = ThemeContext.Provider  // yahi pe export kar rahe he 


//custom hook he usetheme jo ki usecontext hook ka use kar raha he ThemeContext ko access karne ke liye
export  function useTheme(){//usetheme a custom hook that uses the useContext hook to access the ThemeContext
    return useContext(ThemeContext) 
}