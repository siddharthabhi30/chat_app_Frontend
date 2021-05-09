import { IMessage } from "../interface/Message";
import { IState } from "./AppState";

type Action =
    | AddMessageAction
    | UpdateConnectionAction
    | UpdateOldMessageAction
    | ClearMessageCachetAction
    |sendButtonDisabledAction
    |UpdateMapAction


interface AddMessageAction {
    type: 'ADD_MESSAGE';
    payload:IMessage;
}
interface UpdateConnectionAction {
    type: 'UPDATE_CONNECTION'
    payload: boolean
}
interface UpdateOldMessageAction {
    type: 'UPDATE_OLD_MESSSAGE'
    payload: IMessage[]
}

interface ClearMessageCachetAction {
    type: 'CLEAR_MESSAGE_CACHE'
    
}
interface UpdateMapAction {
    type: 'UPDATE_MAP'
    payload: string
}

interface sendButtonDisabledAction {
    type: 'UPDATE_BUTTON'
    payload: boolean
}


 export const AppReducer= (state:IState,action:Action):IState=>{
      switch(action.type){

     
        case 'ADD_MESSAGE':
           
            return {
                ...state,
                messages:[...state.messages,action.payload],

            }

        case 'UPDATE_CONNECTION':
            return{
                ...state,
                isConnected:action.payload
            }
        
        case 'UPDATE_BUTTON':
            return{
                ...state,
                sendButtonDisabled:action.payload
            }
        case 'UPDATE_MAP':
            return{
                ...state,
               storedMessageMap:state.storedMessageMap.set(action.payload,"true")
            }


          default:
              return state;
      }
  }