import { useContext} from "react";
import { StateContext } from "../context/AppState";
export const IsConnectedFlag=()=>{

    const state  = useContext(StateContext);
    console.log("is connected flag is being rendered")
    return (
        
        <div className={state.isConnected?'green':'red'}>
            /
        </div>
        
      
    )
}