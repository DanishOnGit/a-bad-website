import React, { useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useLang } from './contexts/LangContext'

const LangWrapper = ({ children }) => {
    const [messages,setMessages]=useState(null)
    const language=useLang();  
    

    useEffect(()=>{
        (async function(){
            const messages = await import(`../public/locales/${language.lang}/translation.json`).then(res=>res.default)
            if(messages) setMessages(messages)
                else setMessages(null)
        })()
    },[language.lang])

    if(!messages) return 'Loading...'

    return (
        <div>
            <IntlProvider messages={messages || {}} locale={language.lang || 'fr'} defaultLocale='en'>
                {children}
            </IntlProvider>
        </div>
    )
}

export default LangWrapper