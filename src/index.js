import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {IntlProvider} from 'react-intl'
import LangContextProvider, { useLang } from "./contexts/LangContext";
import LangWrapper from './LangWrapper';
const root = document.getElementById("root");

// const RootApp=()=>{
//   const lang=useLang()
//   console.log({laannngg:lang})
//   import(`../public/locales/${lang || 'fr'}/translation.json`).then(res=>res.default).then(messages=>{
//     ReactDOM.render(
//       <StrictMode>
//         <LangContextProvider>
//         <IntlProvider messages={messages} locale={lang || 'fr'} defaultLocale='en'>
//           <App />
//         </IntlProvider>
//         </LangContextProvider>
//       </StrictMode>,
//       root
//     );
//   })
// }

// ReactDOM.render(<RootApp />, root);
(async function RenderApp(){
  const root = document.getElementById("root");
  // const messages= await import("../public/locales/fr/translation.json").then(res=>res.default)
  // console.log({messages})
  ReactDOM.render(
    <StrictMode>
      <LangContextProvider>
     <LangWrapper>
        <App />
     </LangWrapper>
      </LangContextProvider>
    </StrictMode>,
    root
  );
})()
