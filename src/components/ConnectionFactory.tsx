
import EventEmitter from "events";
import { useContext, useEffect } from "react"
import { intializeConnection } from "../api";
import { MessageContext, ReducerContext } from "../context/AppState";
import { IMessage } from "../interface/Message";

export const ConnectionFactory=()=>{
    console.log("connection factory is being rendereed")
   // const state  = useContext(MessageContext);
    const dispatcher=useContext(ReducerContext);
  
    const getUrl=async ()=>{
        const res= await fetch ('http://localhost:5000');
      const data=await res.text();
     return data;
    }
    let messageEmitter:EventEmitter=new EventEmitter();;
    const sendMyMessage=(data:string)=>{
        messageEmitter.emit('message',data);
    }
     let getMessage=(data:IMessage)=>{
       
        dispatcher({
            type:'ADD_MESSAGE',
            payload:data
        })
    }
    function getStatus(data:boolean){

        if(data==false){
            setTimeout(()=>{
                getUrl().then((data:string)=>{
                   intializeConnection(data,getMessage,getStatus,messageEmitter);
                })
            },2000)

        }
       
        dispatcher({
            type:'UPDATE_CONNECTION',
            payload:data
        })
    }
    useEffect(()=>{
            getUrl().then((data:string)=>{
              intializeConnection(data,getMessage,getStatus,messageEmitter);
            })
       
   
     },[])
    return (
      <div>
        <button onClick={()=>sendMyMessage("dsds")}>send</button>
      </div>
    
    )

}

