import { Messages } from "./components/Messages"
import { UserAction } from "./components/Useractions"
import { ConnectionFactory } from "./components/ConnectionFactory"
import { IsConnectedFlag } from "./components/IsConnectedFlag"
import { StateProvider } from "./context/AppState"
export const App=()=>{
    return (
       
      
      <StateProvider>
        <div className='container'>
        <Messages/>
        <UserAction/>
        <ConnectionFactory/>
        <IsConnectedFlag/>
        
      </div>
      </StateProvider>
     
     
    )
}