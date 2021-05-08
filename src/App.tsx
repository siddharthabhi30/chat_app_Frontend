import { Messages } from "./components/Messages"
import { UserAction } from "./components/Useractions"
import {useState,useEffect} from 'react'
//import { connect, sendMsg } from "./api";
export const App=()=>{
    //const [socketUrl,setSocketUrl]=useState("")
    //const [randomNo,setRand]=useState(0)

  //  const [sockett,setSocl]=useState()
  //const [tasks,setTasks]=useState([''])

    const fetchUrl=async ()=>{
        // const res=await fetch('http://localhost:5000/getip')
        // const data=await res.json();
        //console.log(data);
        //setSocketUrl(data);
        console.log("am I affectring the renderiuing")
       // setTasks([...tasks,"ssaa"])
       // setRand(Math.random()*10)
        //console.log("old url socket",socketUrl)
        //setSocketUrl("123");
        //console.log("new url socket",socketUrl)
     //setConnection(true)
      }


 const io = require("socket.io-client");
 const socket = io("http://localhost:3000", {
   withCredentials: true,
   extraHeaders: {
     "my-custom-header": "abcd"
   },
   reconnection: false
 });

const tryReconnect = () => {
    console.log("holy moly error goli")
    //console.log(isConnected)
    //
    const reconnector=setInterval(() => {
      socket.io.open((err:Error) => {
        if (err) {
            fetchUrl();
          console.log("we tried rec onnecting")
        }
        else{
            clearInterval(reconnector);
        }
      });
    }, 2000);
  };
  let cheecl=false;
 // tryReconnect();
  socket.io.on("close", tryReconnect);
  socket.on('message',(data:string)=>{
    console.log("some one is sending",data)
    //setTasks([...tasks,data])
  })
  socket.on("connect", () => {
      //console.log("is connected",isConnected)
      cheecl=true;
    //setConnection(true)
   
    console.log("socket connected",socket.connected); // true
  });
      useEffect(()=>{
       
         fetchUrl();
    
      },[])

      
     // console.log("new url socket before render",socketUrl)
      console.log("I am being rendered")
    return (
        <div className='container'>
        <Messages/>
        <UserAction/>
      </div>
    )
}