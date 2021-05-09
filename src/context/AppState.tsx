
import { createContext,  useReducer, useState } from 'react';
import { IMessage } from '../interface/Message';
import { AppReducer } from './AppReducer';


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
const StateContext = createContext<IState>(defaultState);

const MessageContext=createContext<IMessage[]>([]);

    const ReducerContext = createContext< React.Dispatch<any>>(()=>null);
  
    const StateProvider: React.FC = ({ children }) => {
        const [state, dispatch] = useReducer(AppReducer,defaultState);
        const [messages] = useState(state.oldMessage)
        return (
          <StateContext.Provider value={state}>

           <ReducerContext.Provider value={dispatch}>

             <MessageContext.Provider value={state.messages}>

            {children}
             </MessageContext.Provider>
          </ReducerContext.Provider>

          </StateContext.Provider>
       
        )
      }

      export {StateProvider,StateContext,ReducerContext,MessageContext}
