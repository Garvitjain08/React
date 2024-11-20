import { createContext,useContext } from "react";


export const ThemeContext = createContext({
    ThemeMode:"light" ,
    DarkTheme:()=>{},
    LightTheme:()=>{}
})

export const  ThemeProvider = ThemeContext.provider
export default function useTheme