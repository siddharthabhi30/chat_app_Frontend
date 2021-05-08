import { IMessage } from "../interface/Message";
import { IState } from "./GlobalState";
const updateConnection='ADD_MESSAGE';
 
type Action =
    | AddMessageAction
    | UpdateConnectionAction
    | UpdateOldMessageAction
    | ClearMessageCachetAction

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


 export const reducer= (state:IState,action:Action):IState=>{
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


          default:
              return state;
      }
  }