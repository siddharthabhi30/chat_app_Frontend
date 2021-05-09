import { useContext, useEffect } from "react"

import { AppContext } from "../context/GlobalState";

// import { AppContext } from "../context/GlobalState";
export const Messages=()=>{
   
   console.log("message compo is being rendered")
    const {  dispatch } = useContext(AppContext);
    // let getMessage=(data:string)=>{
    //    console.log("we got our new message",data);
    //     dispatch({
    //         type:'ADD_MESSAGE',
    //         payload:data
    //     })
    // }
    useEffect(()=>{
        //relayConnectionStatus(getStatus);
        //relayMessage(getMessage);
   // console.log("effects of connection is for messages")
   

 },[])
    return (
      
    <div className="messages">
     
    </div>
  
    )

}