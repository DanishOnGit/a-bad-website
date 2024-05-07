import React,{ createContext, useContext, useState } from 'react';

const LangContext=createContext();

export default function LangContextProvider({children}){
    const [lang,setLang]=useState("en")
    return <LangContext.Provider value={{lang,setLang}}>
        {children}
    </LangContext.Provider> 
}

export const useLang =()=> useContext(LangContext)