// import React ,{useContext, useState,useReducer} from 'react';
import { createContext, useReducer } from 'react';
import { IMessage } from '../interface/Message';
import { AppReducer } from './AppReducer';
// //import AppReducer from './AppReducertjs';
// import { reducer, Action } from './reducer';

export interface IState {
    messages: IMessage[];
    oldMessage: IMessage[];
    isConnected:boolean;
    currentTimeStamp:string;
    storedMessageMap:Map<string,string>;
    sendButtonDisabled:boolean;
  }
    const defaultState: IState = {
    messages: [],
    oldMessage: [],
    isConnected:false,
    currentTimeStamp:"1 hour ago",
    storedMessageMap:new Map<string,string>(),
    sendButtonDisabled:true
};
const AppContext = createContext<{state:IState,dispatch: React.Dispatch<any>}>(
    {
        state:defaultState,dispatch:()=>null
    });


    const AppProvider: React.FC = ({ children }) => {
        const [state, dispatch] = useReducer(AppReducer, defaultState);
      
        return (
          <AppContext.Provider value={{state, dispatch}}>
            {children}
          </AppContext.Provider>
        )
      }
      
      export { AppContext, AppProvider };


// //provider component
// //we are taking everything and wrap this into children
// export const GlobalProvider=({children})=>{
//     const [state,dispatch]=useReducer(AppReducer,intitialState);

//     //actions


//     function addMessages(message){
//         dispatch({
//             type:'ADD_MESSAGE',
//             payload:message
//         })
//     }

//     function updateIsConnected(value){
//         dispatch({
//             type:'UPDATE_CONNECTION',
//             payload:value
//         })
//     }

//     return (
//         //this children part is our whole app
//         //provider provides state and actions to components wrapped around
//         <GlobalContext.Provider
//         value={{
//             messages:state.messages,
//             oldMessage:state.addMessages,
//             isConnected:state.isConnected,
//             updateIsConnected,
//             addMessages
//         }}
//         >
//             {children}
//         </GlobalContext.Provider>
//     )

// }