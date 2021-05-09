import EventEmitter from "events";
import { IMessage } from "../interface/Message";

export const io = require("socket.io-client");


type callbackFunctionString=(data:IMessage)=>void;


type callbackFunctionBoolean=(data:boolean)=>void;


function initilizeEvents(socket:any,cb1:callbackFunctionString,cb2:callbackFunctionBoolean,messageEmitter:EventEmitter){

  socket.on("connect", () => {
    cb2(true)
  });
  socket.io.on("close", ()=>{
  //  console.log("closing of socket is occuring")
    cb2(false)
  });

  socket.on('message',(data:IMessage)=>{
    console.log("some one is sending",data)
    cb1(data);
  })

  socket.on("connect_error", () => {
   // console.log("connection error occured")
    cb2(false);
  });
 
  return socket;
  

}


export function intializeConnection(url:string,cb1:callbackFunctionString,cb2:callbackFunctionBoolean,messageEmitter:EventEmitter){
    const  socket = io(url, {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    },
    reconnection: false
  });
  console.log(messageEmitter);
  messageEmitter.on('message',(data)=>{
    socket.emit('message',data)
  })
  initilizeEvents(socket,cb1,cb2,messageEmitter);
}

// let  serverUrl:string="";
// const getIp= async ()=>{
//   console.log("we are asking for ip address");

//   const res= await fetch('http://localhost:5000');
//   const data=await res.text();
//   console.log("data we got",data);
//   return data

// }
// try{
//   getIp().then(data=>{
//     serverUrl=data;
//   });
// }
// catch{
//   console.log("got bad req from ip")
// }

// console.log("ip url for us is ",serverUrl)

// //console.log("socket at thsi time ",socket)
// export const messagesRelay:string[]=[];



// // if(!socket.connected){
// //   tryReconnect()
// // }
//   export const sendMessage= (data:string)=>{
//     //console.log("we are sending the message");
//    if(socket.connected){
//      socket.emit('message',data);
//    }
//    else{
//      throw Error
//    }
//   }

//   export const reconnect= ()=>{
//     //console.log("reconnect is creating problem")
//     //tryReconnect();
//   }

//     export function relayMessage(cb:(data:string)=>void){
     
//     }

//     export function relayConnectionStatus(cb:(data:boolean)=>void){
//       socket.on("connect", () => {
//         cb(true)
//       });
//       socket.io.on("close", ()=>{
//         console.log("closing of socket is occuring")
//        // tryReconnect();
//         cb(false)
//       });
//     }


//     socket.on("disconnect", (reason:string) => {
//       console.log("disconnextion is occureign")
//     });

//     socket.on("connect_error", () => {
//       console.log("conn err is ocrring")
//     setTimeout(() => {
//       console.log("trying ot connect")
//     socket.connect();
//   }, 5000);
//     });

//     const tryReconnect = () => {
//       setTimeout(() => {
//         socket.io.open((err:Error) => {
//           if (err) {
//             tryReconnect();
//           }
//         });
//       }, 2000);
//     }
    
// //    socket.io.on("close", tryReconnect);


// export function reconnectFromExternal(){
//   console.log("our socket is", socket)
//   socket = io(serverUrl, {
//     withCredentials: true,
//     extraHeaders: {
//       "my-custom-header": "abcd"
//     },
//     reconnection: false
//   });
//   if(socket.connected){
//     console.log("reconnected ")
//   }
// }