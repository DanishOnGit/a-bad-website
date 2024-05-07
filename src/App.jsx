import React from "react"
import {FormattedMessage, FormattedNumber} from 'react-intl'
import { useLang } from './contexts/LangContext'


export default function App(){
    const {setLang}=useLang()
    return <div className='App'>
        React i18n
        <select onChange={(e)=>{
            setLang(e.target.value)
        }}>
            <option value={"en"}>English</option>
            <option value={"fr"}>French</option>
        </select>
        <button>
            <FormattedMessage
             id="submit"
             defaultMessage="Submit"
             values={"Submit"}
            />
        </button>
    </div>
}