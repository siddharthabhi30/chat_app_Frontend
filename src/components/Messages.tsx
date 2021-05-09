import { useContext, useEffect } from "react"
import { MessageContext, StateContext } from "../context/AppState";

export const Messages=()=>{
  console.log("message component is being")
  const state  = useContext(MessageContext);
    useEffect(()=>{
     
 },[])
    return (
      
    <div className="messages">
     {state.length}
    </div>
  
    )

}