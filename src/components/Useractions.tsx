import { useContext, useEffect} from "react";

import { AppContext } from "../context/GlobalState";
export const UserAction=()=>{
 //const {dispatch } = useContext(AppContext);
//console.log("user action is being rendered")
//console.log(state.messages)

  useEffect(()=>{
  

 },[])
 
 function sendMyMessage(data:string){
  //console.log("trying to send message from user action")
    
  // try{
  //   sendMessage(data)
    

  // } 
  // catch{
  //   dispatch({
  //     type:'UPDATE_CONNECTION',
  //     payload:false
  //   })
  // }  
 }

    return (
        
        <div className="input">
          <input type='text'></input>
          {/* //<button onClick={()=>sendMyMessage("dsds")}>send</button> */}
     
      </div>
      
    )
}