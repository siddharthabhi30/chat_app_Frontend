
import { useContext, useEffect, useState } from "react"
import { intializeConnection } from "../api";
import { AppContext } from "../context/GlobalState";

export const ConnectedStatus=()=>{
  //  const [isCon, setCon] = useState(false)
   // const { state, dispatch } = useContext(AppContext);

    const getUrl=async ()=>{
        const res= await fetch ('http://localhost:5000');
      const data=await res.text();
     return data;
    }

   console.log("connection part is being redndered")

     let getMessage=(data:string)=>{
       console.log("we got our new message",data);
        // dispatch({
        //     type:'ADD_MESSAGE',
        //     payload:data
        // })
    }
    function getStatus(data:boolean){

        if(data==false){
            console.log("we got disonnected")
            setTimeout(()=>{
                getUrl().then((data:string)=>{
                    intializeConnection(data,getMessage,getStatus);
                })
            },10000)

        }


        // setTimeout(()=>{
        //     dispatch({
        //         type:'UPDATE_BUTTON',
        //         payload:!data
        //     }) 
        // },2000)

        setTimeout(()=>{
            // dispatch({
            //     type:'UPDATE_CONNECTION',
            //     payload:data
            // }) 
        })
       // setCon(data);
       
        // console.log("see old con",isCon)
       //setCon(data)
        // console.log("see new  con",isCon)
    }
    useEffect(()=>{
       
            console.log("effects of connection is hape")
            getUrl().then((data:string)=>{
                intializeConnection(data,getMessage,getStatus);
            })
       
   
     },[])

    //console.log("connected is being rendered")
 
    return (
       <div className={true?'green':'red'}>
            {/* <button onClick={()=>reconnectFromExternal()}>reconnect</button>  */}
        </div>
        
    
    )

}