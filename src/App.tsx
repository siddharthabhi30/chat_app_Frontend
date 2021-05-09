import { Messages } from "./components/Messages"
import { UserAction } from "./components/Useractions"
import {useEffect} from 'react'
import { AppProvider } from "./context/GlobalState"
import { ConnectedStatus } from "./components/ConnectedStatus"
//import { connect, sendMsg } from "./api";
export const App=()=>{

 
  
//console.log("can you really render appp")
    const fetchUrl=async ()=>{
       
      }

     
     
      useEffect(()=>{
       
         fetchUrl();
    
      },[])

      
     // console.log("new url socket before render",socketUrl)
    //  console.log("I am being rendered")
    return (

      <AppProvider>
        <div className='container'>
        <Messages/>
        <UserAction/>
        <ConnectedStatus></ConnectedStatus>
      </div>
      </AppProvider>
    )
}